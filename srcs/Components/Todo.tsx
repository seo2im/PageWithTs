import * as React from 'react';
import { todo } from '../Modules/Todo'

type props = {
	todos : todo [],
	add : (name : string) => void,
	del : (id : number) => void,
	edit : (id : number, name : string) => void,
	done : (id : number) => void
}

function Component ({todos, add, del, edit, done} : props) {
	return (
		<>
			{todos.map(todo => (
				<p>{todo.id}_{todo.name}_{todo.state ? "true" : "false"}</p>
			))}
			<button onClick={() => add("new")}>Add</button>
			<button onClick={() => del(0)}>Del</button>
			<button onClick={() => edit(0, "edit")}>Edit</button>
			<button onClick={() => done(0)}>Done</button>
		</>
	)
}

export default Component;