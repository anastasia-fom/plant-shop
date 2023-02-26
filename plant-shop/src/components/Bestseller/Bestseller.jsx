import TitleBestseller from "./elements/TitleBestseller";
import Products from "./elements/Products";

const Bestseller = () => {
    return (
        <section className="bestseller d-flex container">
            <TitleBestseller />
            <Products />
        </section>
    )
}

export default Bestseller;