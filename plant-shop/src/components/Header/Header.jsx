import Navigation from "./elements/Navigation";
import Logo from "./elements/Logo";
import Chart from "./elements/Chart";

const Header = () => {
    return(
        <header className="header container d-flex justify-content-between">
            <Logo/>
            <Navigation/>
            <Chart/>
        </header>
    )
}

export default Header;