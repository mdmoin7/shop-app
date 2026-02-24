import { useEffect } from "react";
import { useParams } from "react-router";

function ProductDetail() {
  const params = useParams(); // /details/123
  useEffect(() => {
    // data fetching logic by pid
  }, [params.pid]);

  return (
    <div className="flex flex-col gap-4">
      <h1>Product Detail</h1>
      <h2>PID : {params.pid}</h2>
    </div>
  );
}
export default ProductDetail;
