import * as React from 'react'
import { Visible } from '../Types'
import { record } from '../Modules/Record'

import EditModal from './Modal/EditModal'
import DelModal from './Modal/DelModal' 

import { Head } from './'
import * as styled from '../Styles/RecordPage'

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
	const [ edit, setEdit ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}, data : {}});
	const [ del, setDel ] = React.useState<{}>({visible : Visible.NONE, id : -1, func : () => {}});

	return (
		<styled.Div>
			<Head title={`Record of ${catName}`} />
			<styled.Head>
				<styled.Wrap w="25rem">
					<styled.RecordTitle>{record.name}</styled.RecordTitle>
					<styled.Date>{record.date}</styled.Date>
				</styled.Wrap>
				<styled.Wrap w="8rem">
					<styled.Button onClick={() => setEdit({visible : Visible.RECORD_EDIT, id : record.id, func : recordEdit, data : { name : record.name, content : record.content}})}>Edit</styled.Button>
					<styled.Button onClick={() => setDel({visible : Visible.DEL, id : record.id, func : recordDel, back : `/Category/${record.catId}`})}>Del</styled.Button>
				</styled.Wrap>
			</styled.Head>

			<styled.Content>{record.content}</styled.Content>

			<EditModal edit={edit} setEdit={setEdit} />
			<DelModal del={del} setDel={setDel} history={history}/>
		</styled.Div>
	)
}

export default Component;