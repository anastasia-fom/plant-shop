import Search from "./elements/Search";

const Banner = () => {
    return (
        <section className="banner d-flex flex-direction-column align-items-center">
            <h1>Bring Serenity to Your Place
                With Interior Plants</h1>

            <p>find your dream plant for you home decoration with us, and we will make it happen.</p>

            <Search />
        </section>
    )
}

export default Banner;