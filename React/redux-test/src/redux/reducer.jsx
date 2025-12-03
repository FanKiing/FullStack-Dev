import { useReducer , createContext } from "react";



const initialestate = [
      {
        cef:"",
        nom:"",
        groupId:"",
        discipline:20,
      }
 ]


function reducer (state, action){

console.log(action)
    switch (action.type){

        case 'Add' : return [...state , action.data]
    }





}

export const StagiairesReducerContext = createContext()


export function StagiairesReducer({children}){


    const [state , dispatch ] = useReducer(reducer , [
      {
        cef:"",
        nom:"",
        groupId:"",
        discipline:20,
      }
 ])
    

    return (


        <StagiairesReducerContext.Provider  value={{state,dispatch}}>

                {children}

        </StagiairesReducerContext.Provider>

   
    )


}