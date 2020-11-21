import * as React from 'react'
import { Visible } from '../Types'
import { record } from '../Modules/Record'

import EditModal from './Modal/EditModal'
import DelModal from './Modal/DelModal' 

type props = {
	catName : string,
	recId : number,
	records : record [],
	recordEdit : (id : number, name : string, brief : string, content : string) => void,
	recordDel : (id : number) => void,
	history : History
}

function Component ({catName, recId, records, recordEdit, recordDel, history } : props) {
	const record = records.find(rec => rec.id === recId)
	const [ edit, setEdit ] = React.useState<{}>({});
	const [ del, setDel ] = React.useState<{}>({});

	return (
		<div>
			<h2>Record of {catName}</h2>
			<div className="Record">
				<span>{record.name} {record.date}</span>
				<button onClick={() => setEdit({visible : Visible.RECORD_EDIT, id : record.id, func : recordEdit})}>Edit</button>
				<button onClick={() => setDel({visible : Visible.DEL, id : record.id, func : recordDel, back : true})}>Del</button>
				<p>{record.content}</p>
			</div>
			<EditModal edit={edit} setEdit={setEdit} />
			<DelModal del={del} setDel={setDel} history={history}/>
		</div>
	)
}

export default Component;