import Container from "@/components/layout/Container";
import ProductSection from "@/components/products/Product";
import RecommodedProduct from "@/components/products/RecomondedProduct";


export default function ProductPage() {
  

  return (
    <Container>
      <ProductSection />
      <RecommodedProduct/>
    </Container>
  );
}