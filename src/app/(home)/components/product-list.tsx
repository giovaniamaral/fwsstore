import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="h-[170px] w-[170px] max-w-[170px]">
          <ProductItem
            product={computeProductTotalPrice(product)}
            className="w-[156px] lg:w-[200px] lg:min-w-[200px]"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
