import{createStore} from 'redux'
import{status,sort} from './actions/index'
import myReducer from './reducers/index'


let store = createStore(myReducer)

// ban dau
console.log('START',store.getState())

// thay doi status
store.dispatch(status())
console.log('TOGGLE_STATUS',store.getState())

// sx name z->a
store.dispatch(sort(
  {
    by:'name',
    value:-1
  }
))
console.log('SORT_DES',store.getState())