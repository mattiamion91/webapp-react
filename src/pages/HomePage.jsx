import CardMovie from "../components/CardMovie"

const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">Bool Movies</h1>
            <h2><i>The boolean nerd movies community</i></h2>
            <div>
                <p className="row row-cols-3 mt-4">
                <CardMovie/>
                <CardMovie/>
                <CardMovie/>
                <CardMovie/>
                <CardMovie/>
                </p>
            </div>
        </>
    )
}

export default HomePage