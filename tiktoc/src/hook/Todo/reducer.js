import {SET_JOB,DELETE_JOB,ADD_JOB} from './constants'
// init state
export const initState = {
    job:'',
    jobs:[]
}
const reducer = (state,action) =>{
    switch (action.tybe) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs,action.payload]
            }
        case DELETE_JOB:
            const newJop =[...state.jobs]
            newJop.splice(action.payload,1)
            return{
                ...state,
                jobs: newJop

            }
        default: throw new Error("adas")
    }
}
export default reducer
