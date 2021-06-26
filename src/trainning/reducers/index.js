import status from './status'
import sort from './sort'
import {combineReducers} from 'redux'
let myReducer=combineReducers({
  status,sort
})
export default myReducer

// let initState={
//   status:false,
//   sort:{
//     by:'name',
//     value:1
//   }
// }
// let myReducer=(state=initState,action)=>{
//   let {type}=action
//   switch(type){
//     case 'TOGGLE_STATUS':
//       return{
//         ...state,
//          status:!state.status
//       }
//     case 'SORT_DES':
      
//       return{
//         ...state,
//         sort:action.sort
//       }
      
//   }
//   return state

// }
// export default myReducer