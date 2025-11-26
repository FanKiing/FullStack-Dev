import { createSlice } from "@reduxjs/toolkit";
const LivreSlice=createSlice({
    name:"livre",
    initialState:[],
    reducer:{
       add:(state,action)=>{
        const l=state.find(item=>item.isbn==action.payload.isbn)
        if(!l)
            state.push(action.payload)
       },
       remove=(state,action)=>{
        return state.filter(item=>item.isbn!=action.payload.isbn)
       },
       del=(state,action)=>{
        const pos=state.findIndex(item=>item.isbn==action.payload);
        if(pos!=-1){
            state.splice(pos,1)
        }
       },
       Modifier=(state,action)=>{
          return state.map(item=>item.isbn==action.payload.isbn?action.payload:item);
       },
       ModifierV2=(state,action)=>{
          const pos=state.findIndex(item=>item.isbn==action.payload);
            if(pos!=-1){
                state[pos]=action.payload
              }


          }



},});
export const{add,remove,del,Modifier,ModifierV2}=LivreSlice.actions
export default LivreSlice.reducer;
