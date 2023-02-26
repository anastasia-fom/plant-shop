import search from "../../../assets/icons/magnifying-glass.png"
const Search = () => {
    return (
        <form className="search d-flex align-items-center">
            <label>
                <input placeholder="Search plant"/>
            </label>

            <button className="d-flex justify-content-center align-items-center">
                <img src={search} alt="Search"/>
            </button>
        </form>
    )
}

export default Search;