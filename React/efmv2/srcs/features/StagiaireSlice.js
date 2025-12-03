import { createSlice } from "@reduxjs/toolkit";

const initialState={
  stagiaires:[{id:1,matricule:1000,nom:"stud123",ville:"Agadir",codepostal:80000,moyenne:12.00}],
  filtredList:[],
}
const stagiaireSlice=createSlice({
   name:"stagiaire",
   initialState,
    reducers:{
      addStudent:(state,action)=>{
        let s=state.stagiaires.find(s=>s.id===action.payload.id);
        if(!s) state.stagiaires.push(action.payload); 
      },
      delStudent:(state,action)=>{
        state.stagiaires=state.stagiaires.filter(s=>s.id!==action.payload)
      },
      editStudent:(state,action)=>{
       state.stagiaires=state.stagiaires.map(s=>s.id===action.payload.id?action.payload:s)
      },
      filterStudents:(state,action)=>{
           state.filtredList= state.stagiaires.filter(s=>s.ville=action.payload.ville && s.nom===action.payload.nom)
      },
      resetSearch:(state,action)=>{
        state.filtredList=[]
      }
      


    }
});

export const{addStudent,delStudent,editStudent,filterStudents,resetSearch}=stagiaireSlice.actions;

export default stagiaireSlice.reducer;