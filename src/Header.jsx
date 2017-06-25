import React from 'react';
import styled from 'styled-components';

const StyledHead = styled.div`
	display: flex;
	justify-content: space-between;
`
const AddClien = styled.div`
	display: flex;
	margin-top: 10px;
	align-items: center;
	cursor: pointer;
	font-size: 0.7rem;
	font-weight: bold;
	> i {
		margin-right: 5px;
	}
`;

export default ({ onAddClient }) => {
	return (
		<StyledHead>
			<div>
				<strong>Клиенты</strong>
				<AddClien onClick={onAddClient}>
					<i className="material-icons">add_circle</i>Добавить клиента
				</AddClien>
			</div>
			<i className="material-icons">clear</i>
		</StyledHead>
	);
}