import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Modules'

import { MainPage, CategoryPage, RecordPage } from './Containers'

import { GrobalStyle } from './Styles/Basic'

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
			<GrobalStyle />
			<Root />
		</Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
