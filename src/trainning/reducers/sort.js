let initState={
    by:'name',
    value:1
}

let myReducer=(state=initState,action)=>{
  let {type}=action
  switch(type){
    case 'SORT_DES':
      return{ 
        ...action.sort
      } 
  }
  return state

}
export default myReducer