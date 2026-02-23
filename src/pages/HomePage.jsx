import CardBook from "../components/CardMovies"

const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">Bool Movies</h1>
            <h2><i>The boolean nerd movies community</i></h2>
            <div>
                <p>qui andra elenco movies</p>
                <CardBook />
                <CardBook />
                <CardBook />
                <CardBook />
            </div>
        </>
    )
}

export default HomePage