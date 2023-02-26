import './scss/index.scss';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Advantages from "./components/Advantages/Advantages";
import Bestseller from "./components/Bestseller/Bestseller";

function App() {
  return (
    <div className="App">
        <div className="hero">
            <Header />
            <Banner />
            <div className="gradient-block"></div>
        </div>

        <Advantages />
        <Bestseller />
    </div>
  );
}

export default App;
