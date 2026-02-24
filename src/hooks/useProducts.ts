import { useEffect, useMemo, useState } from "react";
import { ProductType } from "../types";
import { getProducts } from "../services/ProductService";
import { useSearchParams } from "react-router";

type Options = {
  itemsPerPage?: number;
};

export default function useProducts(options?: Options) {
  const itemsPerPage = options?.itemsPerPage ?? 8;

  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  // PURE URL SOURCE OF TRUTH
  const pageParam = searchParams.get("page");
  const page = pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1;

  // Fetch once
  useEffect(() => {
    let mounted = true;

    const fetchProducts = async () => {
      try {
        const { data } = await getProducts();
        if (mounted) setProducts(data);
      } catch {
        if (mounted) setError("Failed to load products");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      mounted = false;
    };
  }, []);

  // Filter
  const filtered = useMemo(() => {
    return products.filter((p) =>
      p.productName.toLowerCase().startsWith(search.trim().toLowerCase()),
    );
  }, [products, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));

  const paginated = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, page, itemsPerPage]);

  const goToPage = (p: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(p));
      return next;
    });
  };

  const nextPage = () => goToPage(Math.min(page + 1, totalPages));

  const prevPage = () => goToPage(Math.max(page - 1, 1));

  return {
    products: paginated,
    totalPages,
    page,
    search,
    loading,
    error,
    setSearch,
    nextPage,
    prevPage,
    goToPage,
  };
}
