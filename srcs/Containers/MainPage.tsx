import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as category from '../Modules/Category'
import { State } from '../Modules'
import { MainPage } from '../Components'

function Container () {
	const { categories, todos } = useSelector((state : State) => state);
	const dispatch = useDispatch();

	const categoryAdd = (name : string) => {
		dispatch(category.Add({ name }));
	}

	return (
		<div>
			<MainPage categories={categories}
					todos={todos}
					categoryAdd={categoryAdd}/>
		</div>
	)
}

export default Container;