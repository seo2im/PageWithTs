import { combineReducers } from 'redux'
import categories from './Category'

const Reducer = combineReducers({
	categories
})

export default Reducer;

export type State = ReturnType<typeof Reducer>