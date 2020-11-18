import React from 'react'
import { Test } from '../Components/index'
import { useSelector ,useDispatch } from 'react-redux'
import { categoryAdd, categoryDel, categoryEdit } from '../Modules/Category'
import { State } from '../Modules/index'

function Category () {
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
		<>
			<Test categories={categories}/>
		</>
	)
}

export default Category;