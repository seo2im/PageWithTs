import * as React from 'react'
import { record } from '../Modules/Record'

type props = {
	records : record[],
	add : (name : string, brief : string, content : string) => void,
	del : (id : number) => void,
	edit : (id : number, name : string, brief : string, content : string) => void
}

function Component ({records, add, del, edit} : props) {
	return (
		<>
			{records.map(rec => (
				<>
					<h4>{rec.id}_{rec.date}_</h4>
					<p>{rec.brief}_{rec.content}</p>
				</>
			))}
			<button onClick={() => add("new", "brief", "content")}>ADD</button>
			<button onClick={() => del(0)}>DEL</button>
			<button onClick={() => edit(0, "edit", "edit", "edit")}>EDIT</button>
		</>
	)
}

export default Component;