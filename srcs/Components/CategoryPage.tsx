import * as React from 'react'
import { Link } from 'react-router-dom'
import { category } from '../Modules/Category'
import { record } from '../Modules/Record'
import { todo } from '../Modules/Todo'
import { Visible } from '../Types'

import EditModal from './Modal/EditModal'
import AddModal from './Modal/AddModal'
import DelModal from './Modal/DelModal'
import DoneModal from './Modal/DoneModal'


type props = {
	catId : number,
	categories : category[],
	todos : todo[],
	records : record[],
	categoryEdit : (id : number, name : string) => void,
	categoryDel : (id : number) => void,
	todoAdd : (catId : number, name :string) => void,
	todoEdit : (id : number, name : string) => void,
	todoDone : (id : number) => void,
	todoDel : (id : number) => void,
	recordAdd : (catId : number, name : string, brief : string, content : string) => void,
}

/*

*/

function Component
({catId, categories, todos, records,
 categoryEdit, categoryDel, todoAdd, todoEdit, todoDone, todoDel, recordAdd} : props)
{
	const [ add, setAdd ] = React.useState<{}>({visible : Visible.NONE, func : () => {}, catId : -1})
	const [ edit, setEdit ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}})
	const [ del, setDel ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}})
	const [ done, setDone ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}})
	const { name } = categories.find(cat => cat.id = catId);
	const todoList = todos.filter(todo => todo.catId === catId);
	const recordList = records.filter(rec => rec.catId === catId);

	console.log(todos);

	return (
		<div>
			<h2>Records of {name}</h2>
			<button onClick={() => {
				setEdit({visible : Visible.EDIT, id : catId, func : categoryEdit})
				}}>Edit</button>
			<div className="Todo">
				<h3>Todos</h3>
				<button onClick={() => {
					setAdd({visible : Visible.ADD, func : todoAdd, catId : catId})
					}}>Todo Add</button>
				<div className="TodoBox">
					{todoList.filter(todo => todo.state === false).map((todo, i) => (
						<div className="TodoItem" key={i}>
							<p onClick={() => {
								setEdit({visible : Visible.EDIT, id : todo.id, func : todoEdit})
							}}>{todo.name}</p> 
							<button onClick={() => setDel({visible : Visible.DEL, id : todo.id, func : todoDel})}>Del</button>
							<button onClick={() => setDone({visible : Visible.DONE, id : todo.id, func : todoDone})}>Done</button>
						</div>
					))}
				</div>
				<div className="TodoBox">
					{todoList.filter(todo => todo.state).map((todo, i) => (
						<div className="TodoItem" key={i}>
							<p onClick={() => setEdit({visible : Visible.EDIT, id : todo.id, func : todoEdit})}>{todo.name}</p> 
						</div>
					))}
				</div>
			</div>
			<div className="Record">
				<button onClick={() => setAdd({visible : Visible.RECORD_ADD, func : recordAdd, catId : catId})}>Record Add</button>
				{recordList.map((rec, i) => (
					<Link to={`/Record/${name}/${rec.id}`}>
						<div onClick={() => "/* Link */"} className="RecordBox">
							<span>{rec.name} {rec.date}</span>
						</div>
					</Link>
				))}
			</div>
			<EditModal edit={edit} setEdit={setEdit}/>
			<AddModal add={add} setAdd={setAdd}/>
			<DelModal del={del} setDel={setDel} history={null}/>
			<DoneModal done={done} setDone={setDone}/>
		</div>
	)
}

export default Component;