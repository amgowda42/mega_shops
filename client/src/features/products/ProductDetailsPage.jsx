import { useParams } from "react-router";
import { useProductContext } from "./ProductContext";
import { useEffect } from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { fetchProductById, loading, product } = useProductContext();

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id, fetchProductById]);

  return <div>{product?.name}</div>;
};

export default ProductDetailsPage;
