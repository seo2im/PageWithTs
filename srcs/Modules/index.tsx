import { combineReducers } from 'redux'
import categories from './Category'
import todos from './Todo'

const Reducer = combineReducers({
	categories,
	todos
})

export default Reducer;

export type State = ReturnType<typeof Reducer>