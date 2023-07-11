import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
function Home(params) {
    return (
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
    );
}

export default Home;