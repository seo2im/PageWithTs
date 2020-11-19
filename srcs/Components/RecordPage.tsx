import * as React from 'react'
import { record } from '../Modules/Record'

type props = {
	catId : number,
	catName : string,
	recId : number,
	records : record [],
}

function RecordPage ({catId, catName, recId, records } : props) {
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

export default RecordPage;