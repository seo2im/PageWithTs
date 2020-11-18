import * as React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { todoAdd, todoDel, todoEdit, todoDone } from '../Modules/Todo'
import { State } from '../Modules'
import { Todo } from '../Components'

function Container () {
	const todos = useSelector((state : State) => state.todos);
	const dispatch = useDispatch();
	
	console.log("todos", todos);

	const Add = (name : string) => {
		dispatch(todoAdd({ name }));
	}

	const Del = (id : number) => {
		dispatch(todoDel({ id }));
	}

	const Edit = (id : number, name : string) => {
		dispatch(todoEdit({ id, name }));
	}

	const Done = (id : number) => {
		dispatch(todoDone({ id }));
	}

	return (
		<div>
			<Todo todos={todos}
				add={Add} del={Del} edit={Edit} done={Done}/>
		</div>
	)
}

export default Container;