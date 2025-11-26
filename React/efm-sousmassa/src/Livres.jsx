import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLivre, removeLivre } from "./redux/actions";
import "./style.css";

export default function Livres() {
    const [livres, setLivres] = useState([]);
    const dispatch = useDispatch();
    const panier = useSelector((state) => state.panier);

    useEffect(() => {
        fetch("https://fakerestapi.azurewebsites.net/api/v1/Books")
            .then((res) => res.json())
            .then((data) => setLivres(data));
    }, []);

    return (
        <div>
            <h2>Liste des Livres</h2>
            {livres.map((livre) => (
                <div key={livre.id} className="card">
                    <h4>{livre.title}</h4>
                    <p>{livre.description}</p>
                    <button onClick={() => dispatch(addLivre(livre))}>
                        Ajouter au panier
                    </button>
                    <button onClick={() => dispatch(removeLivre(livre.id))}>
                        Supprimer du panier
                    </button>
                </div>
            ))}

            <h3>Panier : {panier.length} livre(s)</h3>
            <ul>
                {panier.map((l) => (
                    <li key={l.id}>{l.title}</li>
                ))}
            </ul>
        </div>
    );
}
