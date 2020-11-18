const RECORD_ADD = 'record/ADD' as const;
const RECORD_DEL = 'record/DEL' as const;
const RECORD_EDIT = 'record/EDIT' as const;

export const recordAdd = 
({ name, brief, content } :
{ name : string, brief : string, content : string}) => 
({
	type : RECORD_ADD,
	payload : { name, brief, content}
})

export const recordDel = ({ id } : { id : number }) =>
({
	type : RECORD_DEL,
	payload : { id }
})

export const recordEdit = ({ id, name, brief, content} :
{ id : number, name : string, brief : string, content : string}) =>
({
	type : RECORD_EDIT,
	payload : { id, name, brief, content }
})

type recordAction =
	| ReturnType<typeof recordAdd>
	| ReturnType<typeof recordDel>
	| ReturnType<typeof recordEdit>

export type record = {
	id : number,
	date : string,
	name : string,
	brief : string,
	content : string
};

type recordState = record[];

const initState : recordState = [];

function recordReducer (state : recordState = initState, action : recordAction) {
	switch (action.type) {
		case RECORD_ADD :
			const date = new Date();
			return [...state, {
				id : state.length === 0 ? 0 : state[state.length - 1].id + 1,
				date : `${date.getFullYear() / 100}.${date.getMonth()}.${date.getDate()}`,
				name : action.payload.name,
				brief : action.payload.brief,
				content : action.payload.content
			}]
		
		case RECORD_DEL :
			return state.filter(rec => rec.id !== action.payload.id)
		
		case RECORD_EDIT :
			return state.map(rec => {
				if (rec.id === action.payload.id)
					return {...rec, 
						name : action.payload.name,
						brief : action.payload.brief,
						content : action.payload.content
					};
				return rec;
			})
		
		default :
			return state;
	}
}

export default recordReducer;
