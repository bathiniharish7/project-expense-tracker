import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice(
    {
        name:'Expenses',
        initialState:
        {
            Food:[],
            Travel:[],
            Movies:[],
            Health:[],
            Shopping:[]
        },

        reducers:
        {
            add:(state,action)=>{
                switch(action.payload.Category)
                {
                    case 'Food':
                        state.Food.push(action.payload)
                    case 'Travel':
                        state.Travel.push(action.payload) 
                    case 'Movies':
                        state.Movies.push(action.payload)
                    case 'Health':
                        state.Health.push(action.payload)    
                    case 'Shopping':
                        state.Shopping.push(action.payload)
                       
                }
            }
        }
    }
)


export default expenseSlice.reducer;
export const{add} = expenseSlice.actions;