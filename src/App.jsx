import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import Editor from './Editor.jsx';
import UserList from './UserList.jsx';


const AppLayout = styled.div`
	width: 1000px;
	padding: 10px;
	background: #f5f5f5;
	font-family: 'Roboto', sans-serif;
	cursor: default;
	i {
		cursor: poiner;
		color: #000;
	}
`;

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			editorIsOpen: false,
			userList: [
				{
					name: 'Иван Петрович',
					phoneNumber: '+71111111111',
					email: '1111@dwdwd.com',
				},
				{
					name: 'Haha111',
					phoneNumber: '+76666666666',
					email: 'answer@mail.ru',
				}
			],
			editableUser: {},
		};
	};

	openEditor = user => {
		this.setState({
			editorIsOpen: true,
			editableUser: user || {},
		})
	};

	closeEditor = () => {
		this.setState({
			editorIsOpen: false,
		})
	}

	deliteUser = userIndex => {
		const newList = this.state.userList.filter((user, index)=>index!=userIndex);
		this.setState({
			userList: newList,
			editorIsOpen: false,
		})
	}

	onEditorSubmit = (userData) => {
		this.setState({
			editorIsOpen: false,
			//пустой объект присылает 'Добавить клиента', тогда добавляем пользователя
			userList: !Object.keys(this.state.editableUser).length
				? [...this.state.userList, userData]
				: this.state.userList.map(user => (
					user === this.state.editableUser
						? userData
						: user
				)),
			editableUser: {}
		});
	}

	render() {
		return (
			<AppLayout>
				<Header
					openEditor={this.openEditor}
				/>
				<Editor
					isOpen={this.state.editorIsOpen}
					onEditorSubmit={this.onEditorSubmit}
					onCloseEditor={this.closeEditor}
					editableUser={this.state.editableUser}
				/>
				<UserList
					list={this.state.userList}
					onEditUser={this.openEditor}
					onDeliteUser={this.deliteUser}
				/>
			</AppLayout>
		);
	}
}
