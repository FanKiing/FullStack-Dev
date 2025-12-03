import React, { useState } from "react";

import {StagiairesReducerContext} from '../redux/reducer'
import { useContext } from "react";

export default function Stagiaires () {


    const {state,dispatch} = useContext(StagiairesReducerContext)

    const [confirme, setConfirme] = useState(false);

    const [formInput , setFromInput ] = useState({cef : "" , nom : ""})

    const handleChange = (e) =>
        setFromInput(prev => ({...prev , [e.target.name] : e.target.value }))


    const checkFields = ()=>{

          const isAllValide =  Object.keys(formInput).every(key=> formInput[key].length > 2)
          
          if (isAllValide){

            setConfirme(true)

            console.log("runs")
            dispatch({type : "ADD" , data : formInput})
            setFromInput({})

            return
          }

          setConfirme(false)
    }



    console.log(state)
    console.log(dispatch)
    const lastStagiaire = state[state.length-1]





    return (
        <div>
            <h2>Information d'un stagiaire</h2>
            <input name="cef" placeholder="CEF" onChange={handleChange} /> <br />
            <input name="nom" placeholder="Nom" onChange={handleChange} /> <br />
            <input name="groupId" placeholder="Groupe ID" onChange={handleChange} /> <br />
            <input name="discipline" placeholder="Discipline" onChange={handleChange} /> <br /> 
            <button onClick={checkFields}>Confirmer</button>

      {confirme && (
        
        <div>
          <h3>Récapitulatif :</h3>
          <p>CEF : {lastStagiaire.cef}</p>
          <p>Nom : {lastStagiaire.nom}</p>
          <p>GroupID : {lastStagiaire.groupId}</p>
          <p>Discipline : {lastStagiaire.discipline}</p>
        </div>
      )}
      </div>
    );

}