import { stat } from "fs";

const TODO_ADD = 'todo/ADD' as const;
const TODO_DEL = 'todo/DEL' as const;
const TODO_EDIT = 'todo/EDIT' as const;
const TODO_DONE = 'todo/DONE' as const;

export const todoAdd = ({ catId, name } : { catId : number, name : string}) => ({
	type : TODO_ADD,
	payload : { catId, name }
});

export const todoDel = ({ id } : { id : number }) => ({
	type : TODO_DEL,
	payload : { id }
});

export const todoEdit = ({ id, name } : { id : number, name : string }) => ({
	type : TODO_EDIT,
	payload : { id, name }
});

export const todoDone = ({ id } : { id : number}) => ({
	type : TODO_DONE,
	payload : { id }
});

type todoAction = 
	| ReturnType<typeof todoAdd>
	| ReturnType<typeof todoDel>
	| ReturnType<typeof todoEdit>
	| ReturnType<typeof todoDone>;

export type todo = {
	catId : number,
	id : number,
	name : string,
	state : boolean
};

export type todoState = todo [];

const initState : todoState = [];

function todoReducer (state : todoState = initState, action : todoAction) {
	switch (action.type) {
		case TODO_ADD :
			return [...state, {
				catId : action.payload.catId,
				id : state.length === 0 ? 0 : state[state.length - 1].id + 1,
				name : action.payload.name,
				state : false}];

		case TODO_DEL :
			return state.filter(todo => todo.id !== action.payload.id);
		
		case TODO_EDIT :
			return state.map(todo => {
				if (todo.id === action.payload.id)
					return {...todo, name : action.payload.name};
				return todo;
			})
		
		case TODO_DONE :
			return state.map(todo => {
				if (todo.id === action.payload.id)
					return {...todo, state : true}
				return todo;
			})
			
		default :
			return state;
	}
}

export default todoReducer;