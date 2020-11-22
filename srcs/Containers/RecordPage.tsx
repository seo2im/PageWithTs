import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../Modules'
import * as record from '../Modules/Record'
import { RecordPage } from '../Components'

function Container ({ match, history }) {
	const { catName, recId } = match.params;
	const records = useSelector((state : State) => state.records)
	const dispatch = useDispatch();

	const recordDel = (id : number) => {
		dispatch(record.Del({ id }));
	}

	const recordEdit = (id : number, name : string, brief : string, content : string) => {
		dispatch(record.Edit({ id, name, brief, content}));
	}

	return (
		<RecordPage 
			catName={catName} recId={Number(recId)}
			records={records} recordDel={recordDel} recordEdit={recordEdit}
			history={history}/>
	)
}

export default Container;