//importo axios
import axios from "axios"
//importo state e effect
import { useState, useEffect } from "react"

import CardMovie from "../components/CardMovie"

//creo variabile per gestire endpoint
const endpoint = "http://localhost:3000/api/movies";

const HomePage = () => {

    //imposo variabile di stato
    const [movies, setMovies] = useState([]);

    //funzione che gestisce chiamata a BE
    const fetchMovie = () => {
        axios.get(endpoint)
        .then(res => {console.log(res.data);
        })
        .catch(err => {console.log(err);
        });
    };

    //richamo funz di fetch al montaggio home page
    useEffect(fetchMovie, []);

    //funzione rendering listato movie
    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <div className="col" key={movie.id}>
                    <CardMovie movieProp={movie} />
                </div>
            )
        })
    }
    return (
        <>
            <h1 className="text-primary">Bool Movies</h1>
            <h2><i>The boolean nerd movies community</i></h2>
            <div>
                <section className="row row-cols-3 mt-4">
                    {renderMovies()}
                </section>
            </div>
        </>
    )
}

export default HomePage