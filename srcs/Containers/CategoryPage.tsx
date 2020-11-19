import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../Modules'
import * as category from '../Modules/Category' 
import * as todo from '../Modules/Todo'
import * as record from '../Modules/Record'
import { CategoryPage } from '../Components'

function Container () {
	const { categories, todos, records } = useSelector((state : State) => state);
	const dispatch = useDispatch();

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

	const recordAdd = (catId : number, name : string, brief : string, content : string) => {
		dispatch(record.Add({ catId, name, brief, content }));
	}

	return (
		<CategoryPage catId={1}
			categories={categories} todos={todos} records={records}
			categoryEdit={categoryEdit} categoryDel={categoryDel}
			todoAdd={todoAdd} todoEdit={todoEdit} todoDone={todoDone} todoDel={todoDel}
			recordAdd={recordAdd}/>
	)
}

export default Container;