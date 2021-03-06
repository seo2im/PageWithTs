import * as React from 'react'
import { category } from '../../Modules/Category'
import { record } from '../../Modules/Record'
import { todo } from '../../Modules/Todo'
import { Visible } from '../../Types'

import EditModal from '../Modal/EditModal'
import AddModal from '../Modal/AddModal'
import DelModal from '../Modal/DelModal'
import DoneModal from '../Modal/DoneModal'

import { Head, MenuBar } from '..'

import Todo from './Todo'

import * as styled from '../../Styles/CategoryPage'

type props = {
	catId : number,
	categories : category[],
	todos : todo[],
	records : record[],
	history : History
	categoryEdit : (id : number, name : string) => void,
	categoryDel : (id : number) => void,
	todoAdd : (catId : number, name :string) => void,
	todoEdit : (id : number, name : string) => void,
	todoDone : (id : number) => void,
	todoDel : (id : number) => void,
	recordAdd : (catId : number, name : string, brief : string, content : string) => void,
}

function Component
({catId, categories, todos, records, history,
 categoryEdit, categoryDel, todoAdd, todoEdit, todoDone, todoDel, recordAdd} : props)
{
	const [ add, setAdd ] = React.useState<{}>({visible : Visible.NONE, func : () => {}, catId : -1})
	const [ edit, setEdit ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}, data : {}})
	const [ del, setDel ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}})
	const [ done, setDone ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}})
	const { name } = categories.find(cat => cat.id == catId);
	const todoList = todos.filter(todo => todo.catId === catId);
	const recordList = records.filter(rec => rec.catId === catId);

	return (
		<styled.Div>
			<Head title={`Records of ${name}`} 
				button={[{ name : "Edit", onClick : () => {
						setEdit({visible : Visible.EDIT, id : catId, func : categoryEdit, data : { name : name }})
					}}, { name : "Del", onClick : () => {
						setDel({visible : Visible.DEL, id : catId, func : categoryDel, back : '/'})
					}}]}/>

			<MenuBar menu="Todos"
				button={{name : "Add", onClick : () => {
					setAdd({visible : Visible.ADD, func : todoAdd, catId : catId})
				}}} />
			<styled.TodoDiv>
				<Todo kind="Todo" todos={todoList}
					func={{setEdit, setDel, setDone}}
					todoFunc={{todoEdit, todoDel, todoDone}}/>
				<styled.Arrow />
				<Todo kind="Done" todos={todoList}
					func={{setEdit, setDel, setDone}}
					todoFunc={{todoEdit, todoDel, todoDone}}/>
			</styled.TodoDiv>
			
			<MenuBar menu="Records" button={{ name : "Add", onClick : () => setAdd({visible : Visible.RECORD_ADD, func : recordAdd, catId : catId})}} />
			<styled.RecordDiv>
				{recordList.map((rec, i) => (
					<styled.RecordItem>
						<styled.Link to={`/Record/${name}/${rec.id}`}>
							<styled.RecrodName>{rec.name}</styled.RecrodName>
						</styled.Link>
						<styled.Date>{rec.date}</styled.Date>
					</styled.RecordItem>	
				))}
			</styled.RecordDiv>

			<EditModal edit={edit} setEdit={setEdit}/>
			<AddModal add={add} setAdd={setAdd}/>
			<DelModal del={del} setDel={setDel} history={history}/>
			<DoneModal done={done} setDone={setDone}/>
		</styled.Div>
	)
}

export default Component;