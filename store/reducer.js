//import * as ActionTypes from './actionTypes'
import {ADD_USER} from './actionTypes'
import { ADD_USER } from './store';
const initialState={
    user:{
        username:"Test",
    },
};
export const reducer=( state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.ADD_USER:
            return{
                ...state,
                user: { ...state.user, username: action.payload.username},
            };
        default:
            return state;
    }
};