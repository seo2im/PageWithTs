import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Modules'


import { MainPage, CategoryPage, RecordPage } from './Containers'
import { BrowserRouter, Route } from 'react-router-dom'

const store = createStore(Reducer);

function Root () {
	return (
		<BrowserRouter>
			<Route path="/" exact component={MainPage} />
			<Route path="/Category/:catId" component={CategoryPage} />
			<Route path="/Record/:catName/:recId" component={RecordPage} />
		</BrowserRouter>
	)
}

function App () {
	return (
		<Provider store={store}>
			<Root />
		</Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
