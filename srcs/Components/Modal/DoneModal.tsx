import * as React from 'react'

import * as styled from '../../Styles/Modal'
import { Visible } from '../../Types'

function Modal ({done, setDone}) {
	const { visible, id, func } = done;

	return (
		<styled.Div display={visible}>
			<styled.Modal>
				<styled.ModalText>TODO를 완료상태로 바꾸시겠습니까?</styled.ModalText>
				<styled.buttonDiv>
				<styled.Button onClick={() => {
					func(id);
					setDone({visible : Visible.NONE, id : -1, func : () => {}})
				}}>YES</styled.Button>
				<styled.Button onClick={() => setDone({visible : Visible.NONE, id : -1, func : () => {}})
				}>NO</styled.Button>
				</styled.buttonDiv>
			</styled.Modal>
		</styled.Div>
	)	
}

export default Modal;