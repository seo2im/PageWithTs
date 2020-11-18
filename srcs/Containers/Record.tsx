import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { recordAdd, recordDel, recordEdit } from '../Modules/Record'
import { State } from '../Modules'
import { Record } from '../Components'

function Container () {
	const records = useSelector((state : State) => state.records);
	const dispatch = useDispatch();

	const add = (name : string, brief : string, content : string) => {
		dispatch(recordAdd({ name, brief, content }));
	}

	const del = (id : number) => {
		dispatch(recordDel({ id }));
	}

	const edit = (id : number, name : string, brief : string, content : string) => {
		dispatch(recordEdit({ id, name, brief, content }));
	}
	
	return (
		<div>
			<Record records={records}
				add={add} del={del} edit={edit}/>
		</div>
	)
}

export default Container;