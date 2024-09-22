import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";
import { featchFeaturedProducts } from "../../app/utils/actions";

async function FeaturedProducts() {
  const products = await featchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}
export default FeaturedProducts;
