import {SET_JOB,DELETE_JOB,ADD_JOB} from './constants'
export const setJop= payload =>{
    return{
        tybe: SET_JOB,
        payload
    }
}
 export  const addJop= payload =>{
    return{
        tybe: ADD_JOB,
        payload
    }
}
export const deleteJop= payload =>{
    return{
        tybe: DELETE_JOB,
        payload
    }
}