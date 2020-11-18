import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Modules/index'

import { Category } from './Containers/index'

const store = createStore(Reducer);

function App () {
	return (
		<Provider store={store}>
			<Category />
		</Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));