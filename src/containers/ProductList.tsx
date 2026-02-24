import { useNavigate } from "react-router";
import Product from "../components/Product";
import ProductSearch from "../components/ProductSearch";
import Button from "../components/Button";
import useProducts from "../hooks/useProducts";
import { addItem } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    products,
    loading,
    error,
    page,
    totalPages,
    search,
    setSearch,
    nextPage,
    prevPage,
    goToPage,
  } = useProducts({ itemsPerPage: 20 });

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-gray-500 dark:text-gray-400">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8 text-red-500">{error}</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Products
        </h1>

        <ProductSearch value={search} onChange={setSearch} />
      </div>

      {/* Grid */}
      {products.length > 0 ? (
        <>
          <div
            className="
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {products.map((item) => (
              <Product
                key={item.productId}
                pdata={item}
                btnClick={() => {
                  dispatch(addItem(item));
                  navigate("/cart");
                }}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 1}
                onClick={prevPage}
              >
                Prev
              </Button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <Button
                    key={pageNumber}
                    size="sm"
                    variant={pageNumber === page ? "primary" : "outline"}
                    onClick={() => goToPage(pageNumber)}
                  >
                    {pageNumber}
                  </Button>
                );
              })}

              <Button
                variant="outline"
                size="sm"
                disabled={page === totalPages}
                onClick={nextPage}
              >
                Next
              </Button>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 text-center">
          No products found.
        </p>
      )}
    </div>
  );
}

export default ProductList;
