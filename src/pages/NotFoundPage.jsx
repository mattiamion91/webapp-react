import { Link } from "react-router-dom"

const NotFoundPage = () => {

    return (
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <h2>Pagina non trovata</h2>
            <p className="text-muted my-3">Ci dispiace, ma la pagina che stai cercando non esiste</p>
            <Link className="btn btn-primary" to="/">Torna alla HomePage</Link>
        </div>
    )

}

export default NotFoundPage