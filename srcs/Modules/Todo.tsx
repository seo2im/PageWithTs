import { stat } from "fs";

const TODO_ADD = 'todo/ADD' as const;
const TODO_DEL = 'todo/DEL' as const;
const TODO_EDIT = 'todo/EDIT' as const;
const TODO_DONE = 'todo/DONE' as const;

export const Add = ({ catId, name } : { catId : number, name : string}) => ({
	type : TODO_ADD,
	payload : { catId, name }
});

export const Del = ({ id } : { id : number }) => ({
	type : TODO_DEL,
	payload : { id }
});

export const Edit = ({ id, name } : { id : number, name : string }) => ({
	type : TODO_EDIT,
	payload : { id, name }
});

export const Done = ({ id } : { id : number}) => ({
	type : TODO_DONE,
	payload : { id }
});

type todoAction = 
	| ReturnType<typeof Add>
	| ReturnType<typeof Del>
	| ReturnType<typeof Edit>
	| ReturnType<typeof Done>;

export type todo = {
	catId : number,
	id : number,
	name : string,
	state : boolean
};

export type todoState = todo [];

const initState : todoState = [{
	catId : 0, id : 0, name : "testTodo1",  state : false
},{
	catId : 0, id : 1, name : "testTodo2",  state : false
},{
	catId : 0, id : 2, name : "testTodo3",  state : false
},{
	catId : 1, id : 3, name : "testTodo4",  state : false
},{
	catId : 1, id : 4, name : "testTodo5",  state : false
},{
	catId : 1, id : 5, name : "testTodo6",  state : false
}];

function todoReducer (state : todoState = initState, action : todoAction) {
	switch (action.type) {
		case TODO_ADD :
			console.log("add", action.payload);
			return [{
				catId : action.payload.catId,
				id : state.length === 0 ? 0 : state[state.length - 1].id + 1,
				name : action.payload.name,
				state : false}, ...state];

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