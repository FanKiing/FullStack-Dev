import React,{useState,useEffect} from 'react'
import  {villes} from "../villes";
import { useSelector,useDispatch } from 'react-redux'
import {delStudent,addStudent,editStudent,filterStudents,resetSearch} from '../features/StagiaireSlice';
const Stagiaires = () => {
      const ls=useSelector(state=>state.StudentReducer.Stagiaires);
    
      const dispatch=useDispatch();
      const[data,setData]=useState([]);
    
      const filtredLs=useSelector(state=>state.StudentReducer.filtredList);
       
       const[editMode,setEditMode]=useState(false);
       const[statistics,setStatistics]=useState({min:0,max:0,moyClass:0})
        const nextId=()=>{
            return ls.length>0? Math.max([...ls.map(s=>s.id)])+1:1;
        }
        const[formData,setFormData]=useState({id:nextId(),matricule:0,nom:"",ville:"",codepostal:0,moyenne:0})
        useEffect(()=>{
          setData(filtredLs.length>0?filtredLs:ls);
          setStatistics({min:Math.min([...data.map(s=>s.moyenne)]),max:Math.max(data.map(s=>s.moyenne)),moyClass:data.reduce((acc,s)=>acc+s.moyenne,0)})


        },[ls,filtredLs])
        const handelChange=(e)=>{
          const {name,value}=e.target;
          setFormData({...formData,[name]:value})
        }
        const changeVille=(e)=>{
          setFormData({...formData,ville:villes[e.target.value],codepostal:e.target.value})
        }
        
        const handelDel=(id)=>{
          dispatch(delStudent(id));
        }
        const handelEdit=(s)=>{
           setEditMode(true);
           setFormData(s);

        }
        const handelSave=()=>{
          if(editMode){
            dispatch(editStudent(formData));
            setEditMode(false);
          }
          else{
            dispatch(addStudent(formData))
          }
        }

        const handelFilter=()=>{
          dispatch(filterStudents({nom:formData.nom,ville:formData.ville}))
        }

  return (
    <div className="container mt-4 mx-auto w-75">
       {
            data.length>0&&(
              <>
                 <table className="table table-striped">
                   <thead>
                   
                    <tr><td>id</td>
                    <td>matricule</td>
                    <td>nom</td>
                    <td>ville</td>
                    <td>codepostal</td>
                    <td>moyenne</td>
                    <td>actions</td>
                    </tr>
                   </thead>
                    <tbody>
                      {
                      ls.map((s,pos)=>{
                        <tr><td>s["id"]</td>
                    <td>s["matricule"]</td>
                    <td>s["nom"]</td>
                    <td>s["ville"]</td>
                    <td>s["codepostal"]</td>
                    <td>s["moyenne"]</td>
                    <td>
                      <button className="btn btn-info" onClick={()=>handelEdit(s)}>Edit</button>
                      <button className="btn btn-danger" onClick={()=>handelDel(s.id)}>Supprimer</button>

                    </td>
                    </tr>
                      })

                    }
                    </tbody>



                 </table>
                 <ul>
                  <li>Moyenne générale minimum : {statistics.min}</li>
                  <li>Moyenne générale minimum : {statistics.max}</li>
                  <li>Moyenne générale minimum : {statistics.moyClass}</li>
                 </ul>
</>
            )
       } 
    <h2>{editMode?"Modifier la liste des stagiaires":"Ajouter un nouveau stagiiare"}</h2>
    <form className="w-75 mx-auto border">
      <div className="mt-2">
        <label className="form-label">
          ID
        </label>
        <input className="form-control" name="id" type="text" value={formData.id} readOnly/>
      </div>
        <div className="mt-2">
        <label className="form-label">
          Matricule
        </label>
        <input className="form-control" name="matricule" onChange={handelChange} type="number" value={formData.matricule} />
      </div>
         <div className="mt-2">
        <label className="form-label">
          Nom
        </label>
        <input className="form-control" name="nom" onChange={handelChange} type="text" value={formData.nom} />
      </div>
      <div className="mt-2">
        <label className="form-label">
          Ville
        </label>
        <select className="form-control" name="codepostal" onChange={changeVille} value={formData.codepostal}>
             {
              villes.map((v,pos)=>{
                <option value={v.codepostal}>{v.nom}</option>
              })
             }
        </select>
      </div>
<div className="mt-2">
        <label className="form-label">
          Moyenne
        </label>
        <input className="form-control" name="moyenne" onChange={handelChange} type="number" value={formData.moyenne} />
      </div>
<div className="mt-2">
  <button className="btn btn-primary" onClick={handelSave}>{editMode?"Modifier":"Ajouter"}</button>
  <button className="btn btn-secondary" onClick={handelFilter}>Filtrer</button>
  <button className="btn btn-info" onClick={()=>dispatch(resetSearch())}>Reset Filer</button>
  <button className="btn btn-success" onClick={()=>setFormData({id:nextId(),matricule:0,nom:"",ville:"",codepostal:0,moyenne:0})}>Vider</button>
</div>

    </form>
    
    </div>
  )
}

export default Stagiaires