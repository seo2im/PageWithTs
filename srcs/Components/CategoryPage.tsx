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

import * as styled from '../Styles/CategoryPage'

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

function Component
({catId, categories, todos, records,
 categoryEdit, categoryDel, todoAdd, todoEdit, todoDone, todoDel, recordAdd} : props)
{
	const [ add, setAdd ] = React.useState<{}>({visible : Visible.NONE, func : () => {}, catId : -1})
	const [ edit, setEdit ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}})
	const [ del, setDel ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}})
	const [ done, setDone ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}})
	const { name } = categories.find(cat => cat.id == catId);
	const todoList = todos.filter(todo => todo.catId === catId);
	const recordList = records.filter(rec => rec.catId === catId);

	return (
		<styled.Div>
			<styled.Title>
				Records of {name}
				<styled.Button onClick={() => {
					setEdit({visible : Visible.EDIT, id : catId, func : categoryEdit})
					}}>Edit</styled.Button>
			</styled.Title>

			<styled.TodoDiv>
				<styled.Todo>
					<styled.TodoItem>
					Todos
					<styled.Button onClick={() => {
						setAdd({visible : Visible.ADD, func : todoAdd, catId : catId})
						}}>Todo Add</styled.Button>
					</styled.TodoItem>
				<styled.TodoBox>
					{todoList.filter(todo => todo.state === false).map((todo, i) => (
						<styled.TodoItem key={i}>
							<p onClick={() => {
								setEdit({visible : Visible.EDIT, id : todo.id, func : todoEdit})
							}}>{todo.name}</p> 
							<button onClick={() => setDel({visible : Visible.DEL, id : todo.id, func : todoDel})}>Del</button>
							<button onClick={() => setDone({visible : Visible.DONE, id : todo.id, func : todoDone})}>Done</button>
						</styled.TodoItem>
					))}
				</styled.TodoBox>
				</styled.Todo>
				<styled.Todo>Done
				<styled.TodoBox>
					{todoList.filter(todo => todo.state).map((todo, i) => (
						<styled.TodoItem key={i}>
							<p onClick={() => setEdit({visible : Visible.EDIT, id : todo.id, func : todoEdit})}>{todo.name}</p> 
						</styled.TodoItem>
					))}
				</styled.TodoBox>
				</styled.Todo>
			</styled.TodoDiv>

			<styled.RecordDiv>
				Records<styled.Button onClick={() => setAdd({visible : Visible.RECORD_ADD, func : recordAdd, catId : catId})}>Record Add</styled.Button>
				{recordList.map((rec, i) => (
					<styled.Link to={`/Record/${name}/${rec.id}`}>
						<styled.RecordItem>
							<styled.RecrodName>{rec.name}</styled.RecrodName><styled.Date>{rec.date}</styled.Date>
						</styled.RecordItem>
					</styled.Link>
				))}
			</styled.RecordDiv>

			<EditModal edit={edit} setEdit={setEdit}/>
			<AddModal add={add} setAdd={setAdd}/>
			<DelModal del={del} setDel={setDel} history={null}/>
			<DoneModal done={done} setDone={setDone}/>
		</styled.Div>
	)
}

export default Component;