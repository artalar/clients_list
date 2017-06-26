import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
	width: 100%;
	text-align: center;
	font-size: 0.7rem;
	border-collapse: collapse;
	th {
		width: ${95/7}%;
		border-bottom: 2px solid #a50000;
		padding: 20px 0px;
		color: gray;
	}
	td {
		width: ${95/7}%;
		padding: 10px 0px;
		color: #484848;
		font-weight: bold;
	}
	.controls {
		width: 5%;
	}
	i {
		cursor: pointer;
		font-size: 18px;
	}
`;

export default ({list, onEditUser, onDeliteUser}) => {
	const onEditUserButtonClick = user => {
		return () => onEditUser(user);
	};

	const onDeliteUserButtonClick = index => {
		return () => onDeliteUser(index);
	};

	return (
		<Table>
		<tbody>
			<tr>
				<th className='controls'></th>
				<th>Клиент</th>
				<th>Телефон</th>
				<th>E-mail</th>
				<th>Дата<br/>последнего<br/>посещения</th>
				<th>Сумма оплат</th>
				<th>Количество<br/>посещений</th>
				<th>Активный<br/>абонемент</th>
			</tr>
			{list.map((user, index) => (
				<tr key={`${index}${user.email}`}>
					<td className='controls'>
						<i className="material-icons" onClick={onEditUserButtonClick(user)}>create</i>
						<i className="material-icons" onClick={onDeliteUserButtonClick(index)}>clear</i>
					</td>
					<td>{user.name}</td>
					<td>{user.phoneNumber}</td>
					<td>{user.email}</td>
					<td>------</td>
					<td>------</td>
					<td>------</td>
					<td>------</td>
				</tr>
			))}
		</tbody>
		</Table>
	)
}