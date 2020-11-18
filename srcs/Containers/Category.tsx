import * as React from 'react'
import { Category } from '../Components'
import { useSelector ,useDispatch } from 'react-redux'
import { categoryAdd, categoryDel, categoryEdit } from '../Modules/Category'
import { State } from '../Modules'

function Container () {
	const categories = useSelector((state : State) => state.categories);
	const distpatch = useDispatch();

	const Add = (name : string) => {
		distpatch(categoryAdd({ name }));
	};

	const Del = (id : number) => {
		distpatch(categoryDel({ id }));
	};

	const Edit = (id : number, name : string) => {
		distpatch(categoryEdit({ id, name }));
	};

	return (
		<div>
			<Category categories={categories}
					add={Add}
					del={Del}
					edit={Edit}/>
		</div>
	)
}

export default Container;