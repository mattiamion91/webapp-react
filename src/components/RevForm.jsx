import axios from "axios";
import { useState } from "react"

const RevForm = (props) => {

    //destrutturo
    const { movie_id } = props

    //creo strigna riferimneto enpoint del BE
    const endpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`

    //creo var di stato per gestire OGGETTO dei value di input
    const [formData, setFormData] = useState({
        "name": "",
        "vote": 0,
        "text": ""
    });

    //funzione gesitone chiamata al submit del form
    const handleSubmit = e => {
        //inibisco comportamento default form
        e.preventDefault();
        //gestisci la chiamata in post all'endpoint in axios
        axios.post(endpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() =>{console.log('tutto ok');
            })
            .catch((err) => {console.log(err);
            })



    }

    //funzione dei dati del form
    function setFieldValue(e) {
        setFormData((formData) => ({
            ...formData, [e.target.name]: e.target.value
        }));
    }

    return (
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input type="number" name="vote" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RevForm