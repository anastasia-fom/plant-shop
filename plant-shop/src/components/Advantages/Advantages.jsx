import payment from "../../assets/icons/payment.svg";
import delivery from "../../assets/icons/delivery.svg";
import support from "../../assets/icons/support.svg";
const Advantages = () => {
    return (
        <div className="d-flex justify-content-center advantages">
            <div className="advantages__element d-flex">
                <img src={delivery} alt="Delivery"/>
                <div className="advantages__element-description">
                    <h3>Free Shapping</h3>
                    <p>No charge for each delivery</p>
                </div>
            </div>

            <div className="advantages__element d-flex">
                <img src={payment} alt="Payment"/>
                <div className="advantages__element-description">
                    <h3>Quick Payment</h3>
                    <p>100% secure payment</p>
                </div>
            </div>

            <div className="advantages__element d-flex">
                <img src={support} alt="Support"/>
                <div className="advantages__element-description">
                    <h3>24/7 Support</h3>
                    <p>Quick support</p>
                </div>
            </div>
        </div>
    )
}

export default Advantages;