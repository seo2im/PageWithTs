
/* TODO : as const 를 추가해야 하는가? https://react.vlpt.us/using-typescript/05-ts-redux.html
	// 액션 타입을 선언합니다
	// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
	// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
*/
const CATEGORY_ADD = 'category/ADD' as const;
const CATEGORY_DEL = 'category/DEL' as const;
const CATEGORY_EDIT = 'category/EDIT' as const;

export const categoryAdd = ({ name } : { name : string }) => ({
	type : CATEGORY_ADD,
	payload : { name }
});

export const categoryDel = ({ id } : { id : number }) => ({
	type : CATEGORY_DEL,
	payload : { id }
});

export const categoryEdit = ({ id , name } : { id : number, name : string }) => ({
	type : CATEGORY_EDIT,
	payload : { id, name }
});

type categoryAction = 
	| ReturnType<typeof categoryAdd>
	| ReturnType<typeof categoryDel>
	| ReturnType<typeof categoryEdit>;

export type category = {
	id : number,
	name : string,
	TodoList : any [],
	Records : any []
};

export type categoryState = category[];

const initialState : categoryState = [];

function categoryReducer (state : categoryState = initialState, action : categoryAction) {
	switch (action.type) {
		case CATEGORY_ADD :
			return [...state, {
				id : state.length === 0 ? 0 : state[state.length - 1].id + 1,
				name : action.payload.name,
				TodoList : [],
				Records : []
			}];
		
		case CATEGORY_DEL :
			return state.filter(cat => cat.id !== action.payload.id);
		
		case CATEGORY_EDIT :
			return state.map(cat => {
				if (cat.id === action.payload.id)
					return { ...cat, name : action.payload.name };
				return cat;
			})
		
		default :
			return state;
	}
}

export default categoryReducer;
