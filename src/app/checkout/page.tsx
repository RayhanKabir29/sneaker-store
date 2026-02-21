import Checkout from "@/components/Checkout";
import Container from "@/components/layout/Container";
import RecommodedProduct from "@/components/products/RecomondedProduct";


const CheckOutPage = () => {
    return (
        <Container>
           <Checkout />
            <RecommodedProduct />
        </Container>
    );
};

export default CheckOutPage;