import * as React from 'react'

import * as styled from '../../Styles/Modal'
import { Visible } from '../../Types'

function Modal ({del, setDel, history}) {
	const { visible, id, func, back } = del;

	return (
		<styled.Div display={visible}>
			<styled.Modal>
				<styled.ModalText>정말 지우시겠습니까?</styled.ModalText>
				<styled.buttonDiv>
				<styled.Button onClick={() => {
					func(id);
					setDel({visible : Visible.NONE, id : -1, func : () => {}})
					back ? history.push(back) : null;
				}}>YES</styled.Button>
				<styled.Button onClick={() => setDel({visible : Visible.NONE, id : -1, func : () => {}})
				}>NO</styled.Button>
				</styled.buttonDiv>
			</styled.Modal>
		</styled.Div>
	)	
}

export default Modal;