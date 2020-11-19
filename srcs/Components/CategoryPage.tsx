import * as React from 'react'
import { category } from '../Modules/Category'
import { record } from '../Modules/Record'
import { todo } from '../Modules/Todo'
import Modal from './Modal'
import CheckModal from './CheckModal'

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
 categoryEdit, categoryDel, todoAdd, todoEdit, todoDone, recordAdd} : props)
{
	const [ visible, setVisible ] = React.useState<boolean>(false);
	const { name } = categories.find(cat => cat.id = catId);
	const todoList = todos.filter(todo => todo.catId === catId);
	const recordList = records.filter(rec => rec.catId === catId);

	return (
		<div>
			<h2>Records of {name}</h2>
			<button onClick={() => {
				setVisible(true);
				}}>Edit</button>
			<div className="Todo">
				<h3>Todos</h3>
				<button onClick={() => {
					setVisible(true);
					}}>Todo Add</button>
				<div className="TodoBox">
					{todoList.filter(todo => !todo.state).map((todo, i) => (
						<div className="TodoItem" key={i}>
							<p onClick={() => "/* Edit */"}>{todo.name}</p> 
							<button onClick={() => "/* Del */"}>Del</button>
							<button onClick={() => "/* Done */"}>Done</button>
						</div>
					))}
				</div>
				<div className="TodoBox">
					{todoList.filter(todo => todo.state).map((todo, i) => (
						<div className="TodoItem" key={i}>
							<p onClick={() => "/* Edit */"}>{todo.name}</p> 
						</div>
					))}
				</div>
			</div>
			<div className="Record">
				<button onClick={() => "/* Add */"}>Record Add</button>
				{recordList.map((rec, i) => (
					<div onClick={() => "/* Link */"} className="RecordBox">
						<span>{rec.name} {rec.date}</span>
						<p>{rec.brief}</p>
					</div>
				))}
			</div>
			<Modal visible={visible} setVisible={setVisible} func={() => {}}/>
		</div>
	)
}

export default Component;