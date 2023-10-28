import { Product } from "@prisma/client";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductItem;
