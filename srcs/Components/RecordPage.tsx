import * as React from 'react'
import { record } from '../Modules/Record'

type props = {
	catName : string,
	recId : number,
	records : record [],
	recordEdit : (id : number, name : string, brief : string, content : string) => void,
	recordDel : (id : number) => void
}

function Component ({catName, recId, records } : props) {
	const record = records.find(rec => rec.id === recId)

	return (
		<div>
			<h2>Record of {catName}</h2>
			<div className="Record">
				<span>{record.name} {record.date}</span>
				<button onClick={() => "/* Edit */"}>Edit</button>
				<button onClick={() => "/* Del */"}>Del</button>
				<p>{record.brief}</p>
				<p>{record.content}</p>
			</div>
		</div>
	)
}

export default Component;