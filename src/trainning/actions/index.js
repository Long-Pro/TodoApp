import * as types from '../const/activeType'
export let status=()=>{
  return{
    type:types.TOGGLE_STATUS
  }
}
export let sort=(sort)=>{
  return{
    type:types.SORT_DES,
    sort
  }
}