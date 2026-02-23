import { Link } from "react-router-dom"
import CardReview from "../components/CardReview"

const MoviePage = () => {
    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src="https://ntvb.tmsimg.com/assets/p6326_v_h8_be.jpg?w=960&h=540" alt="titolo movie" />
                </div>
                <h1>Titolo movie</h1>
                <h3 className="text-muted"><i>By Nome regista</i></h3>
                <p>lorem ipsm dolor sit amet</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {/* Reviews qui */}
                <CardReview />
                <CardReview />
                <CardReview />
                <CardReview />
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MoviePage