import { Link } from "react-router-dom"
import CardReview from "../components/CardReview"

//dati temporaneri per tesy props

const movie = {
    "id": 5,
    "title": "Interstellar",
    "director": "Christopher Nolan",
    "genre": "Science Fiction",
    "release_year": 2014,
    "abstract": "A team of explorers travels through a wormhole in space to save humanity.",
    "image": "titanic.jpg",
    "created_at": "2024-11-29T10:40:13.000Z",
    "updated_at": "2025-05-22T10:55:27.000Z",
    "reviews": [
        {
            "id": 13,
            "movie_id": 5,
            "name": "Mia",
            "vote": 5,
            "text": "Visually stunning and emotionally resonant.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        },
        {
            "id": 14,
            "movie_id": 5,
            "name": "Noah",
            "vote": 3,
            "text": "Interesting ideas but too long.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        },
        {
            "id": 15,
            "movie_id": 5,
            "name": "Olivia",
            "vote": 4,
            "text": "A beautiful story about love and survival.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        }
    ]
}

const MoviePage = () => {

    //funzione render reviews
    const renderReviews = () => {
        return (movie.reviews.map(rev => {
            return (
                <CardReview revProp={rev} key={rev.id} />
            )
        }))
    }
    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src={movie.image} alt={movie.title} />
                </div>
                <h1>{movie.title}</h1>
                <h3 className="text-muted"><i>By {movie.director}</i></h3>
                <p>{movie.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>          
                {renderReviews()}
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MoviePage