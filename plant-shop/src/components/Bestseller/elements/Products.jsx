import add from "../../../assets/icons/add.png";
import plant1 from "../../../assets/img/plant1.png";
import plant2 from "../../../assets/img/plant2.png";
import plant3 from "../../../assets/img/plant3.png";
import StarRating from "./StarRating";
const Products = () => {
    return (
        <div className="bestseller__products d-flex">
            <div className="bestseller__products-item">
                <div>
                    <img src={plant1} alt="Plant" className="plant-img"/>
                </div>

                <div className="bestseller__products-item-description d-flex flex-direction-column">
                    <div>
                        <h4>Cammile</h4>
                        <StarRating />
                    </div>

                    <div className="bestseller__products-item-description-price d-flex justify-content-between">
                        <p>$65.00</p>
                        <button className="d-flex justify-content-center align-items-center">
                            <img src={add} alt="Add button"/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bestseller__products-item">
                <div>
                    <img src={plant2} alt="Plant" className="plant-img"/>
                </div>

                <div className="bestseller__products-item-description d-flex flex-direction-column">
                    <div>
                        <h4>Cammile</h4>
                        <StarRating />
                    </div>

                    <div className="bestseller__products-item-description-price d-flex justify-content-between">
                        <p>$65.00</p>
                        <button className="d-flex justify-content-center align-items-center">
                            <img src={add} alt="Add button"/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bestseller__products-item">
                <div>
                    <img src={plant3} alt="Plant" className="plant-img"/>
                </div>

                <div className="bestseller__products-item-description d-flex flex-direction-column">
                    <div>
                        <h4>Cammile</h4>
                        <StarRating />
                    </div>

                    <div className="bestseller__products-item-description-price d-flex justify-content-between">
                        <p>$65.00</p>
                        <button className="d-flex justify-content-center align-items-center">
                            <img src={add} alt="Add button"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;