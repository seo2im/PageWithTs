const RECORD_ADD = 'record/ADD' as const;
const RECORD_DEL = 'record/DEL' as const;
const RECORD_EDIT = 'record/EDIT' as const;

export const Add = 
({ catId, name, content } :
{ catId : number, name : string, content : string}) => 
({
	type : RECORD_ADD,
	payload : { catId, name, content}
})

export const Del = ({ id } : { id : number }) =>
({
	type : RECORD_DEL,
	payload : { id }
})

export const Edit = ({ id, name, brief, content} :
{ id : number, name : string, brief : string, content : string}) =>
({
	type : RECORD_EDIT,
	payload : { id, name, brief, content }
})

type recordAction =
	| ReturnType<typeof Add>
	| ReturnType<typeof Del>
	| ReturnType<typeof Edit>

export type record = {
	catId : number,
	id : number,
	date : string,
	name : string,
	content : string
};

type recordState = record[];

const initState : recordState = [{
	catId : 0,
	id : 0,
	date : '20.11.12',
	name : 'Test Record1',
	content : 'TestTestTest'
},
{
	catId : 0,
	id : 1,
	date : '20.11.13',
	name : 'Test Record1',
	content : 'TestTestTest'
},
{
	catId : 0,
	id : 2,
	date : '20.11.14',
	name : 'Test Record1',
	content : 'TestTestTest'
}];

function recordReducer (state : recordState = initState, action : recordAction) {
	switch (action.type) {
		case RECORD_ADD :
			const date = new Date();
			return [{
				catId : action.payload.catId,
				id : state.length === 0 ? 0 : state[state.length - 1].id + 1,
				date : `${date.getFullYear() % 100}.${date.getMonth()}.${date.getDate()}`,
				name : action.payload.name,
				content : action.payload.content
			}, ...state]
		
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
