import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-list/components/ProductDetail";
function ProductDetailPage(params) {
    return (
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
        </div>
    );
}

export default ProductDetailPage;