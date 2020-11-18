import { combineReducers } from 'redux'
import categories from './Category'
import todos from './Todo'
import records from './Record'

const Reducer = combineReducers({
	categories,
	todos,
	records
})

export default Reducer;

export type State = ReturnType<typeof Reducer>