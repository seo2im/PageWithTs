import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../Modules'
import * as category from '../Modules/Category' 
import * as todo from '../Modules/Todo'
import * as record from '../Modules/Record'
import { CategoryPage } from '../Components'

function Container ({ match, history }) {
	const { catId } = match.params;
	const { categories, todos, records } = useSelector((state : State) => state);
	const dispatch = useDispatch();

	console.log(categories);

	const categoryEdit = (id : number, name : string) => {
		dispatch(category.Edit({ id, name }));
	}

	const categoryDel = (id : number) => {
		dispatch(category.Del({ id }));
	}

	const todoAdd = (catId : number, name : string) => {
		dispatch(todo.Add({ catId, name }));
	}

	const todoEdit = (id : number, name : string) => {
		dispatch(todo.Edit({ id, name }));
	}

	const todoDone = (id : number) => {
		dispatch(todo.Done({ id }));
	}

	const todoDel = (id : number) => {
		dispatch(todo.Del({ id }));
	}

	const recordAdd = (catId : number, name : string, content : string) => {
		dispatch(record.Add({ catId, name, content }));
	}

	return (
		<CategoryPage catId={Number(catId)}
			categories={categories} todos={todos} records={records}
			categoryEdit={categoryEdit} categoryDel={categoryDel}
			todoAdd={todoAdd} todoEdit={todoEdit} todoDone={todoDone} todoDel={todoDel}
			recordAdd={recordAdd} history={history}/>
	)
}

export default Container;