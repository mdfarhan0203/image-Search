import { legacy_createStore as createStore} from 'redux'
import reduce from '../reducer/index'


const  store=createStore(reduce,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;