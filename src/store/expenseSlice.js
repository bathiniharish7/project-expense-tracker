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
                        state.Food.push(action.payload);
                        break;
                    case 'Travel':
                        state.Travel.push(action.payload);
                        break;
                    case 'Movies':
                        state.Movies.push(action.payload);
                        break;
                    case 'Health':
                        state.Health.push(action.payload);
                        break;    
                    case 'Shopping':
                        state.Shopping.push(action.payload);
                        break;
                       
                }
            }
        }
    }
)


export default expenseSlice.reducer;
export const{add} = expenseSlice.actions;