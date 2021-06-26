let initState=false
let myReducer=(state=initState,action)=>{
  let {type}=action
  switch(type){
    case 'TOGGLE_STATUS':
      return !state   
  }
  return state

}
export default myReducer