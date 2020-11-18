import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Modules'

import { Category, Todo, Record } from './Containers'

const store = createStore(Reducer);

function App () {
	return (
		<Provider store={store}>
			<h1> APP </h1>
			<Category />
			<Todo />
			<Record />
		</Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
