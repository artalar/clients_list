import React, { Component } from 'react';
import styled from 'styled-components';


const EditorStyleClose = styled.div`
	overflow: hidden;
	.close {
		top: -160px;
		height: 0px;
		opacity: 0;
		transition: all .4s ease;
	}
`;

const EditorStyle = styled.form`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	top: 0px;
	height: 160px;
	margin-top: 10px;
	font-size: 0.6rem;
	color: gray;
	opacity: 1;
	transition: all .4s ease;
`;

const Field = styled.div`
	display: flex;
	flex-direction: column;
	.phoneNumber {
		width: 325px;
		margin: 8px 0px;
	}
`;

const Input = styled.div`
	display: flex;
	align-items: center;
	width: 600px;
	height: 30px;
	margin: 8px 30px 8px 0px;
	padding: 0 10px;
	border: 1px solid lightgray;
	border-radius: 13px;
	background-color: #FFF;
	> input {
		width: 96%;
		border: none;
		background-color: rgba(0,0,0,0);
		z-index: 1;
		:focus { outline: none; }
	}
`;

const HidenText = styled.span`
	position: absolute;
	font-size: 0.8rem;
`;

const Submit = styled.button`
	height: 32px;
	margin-top: 19px;
	padding: 0px 20px;
	border: 0px solid;
	border-radius: 15px;
	background-color: #b51212;
	color: white;
	font-weight: bold;
	cursor: pointer;
	:focus { outline: none; }
	:active { background-color: #8a0f0f; }
`;

const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	border-bottom: 1px solid lightgray;
	i {
		cursor: pointer;
	}
`;


export default class Editor extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				name: '',
				phoneNumber: '',
				email: '',
			},
		};
	};

	componentWillReceiveProps({editableUser}){
		if (!editableUser) return;
		const { name, phoneNumber, email } = editableUser;
		this.setState({
			user: {
				name: name || '',
				phoneNumber: phoneNumber || '',
				email: email || '',
			},
		})
	}

	onInput = ({target}) => {
		this.setState({
			user:{
				...this.state.user,
				[target.id]: target.value,
			}
		})
	};

	onSave = (e) => {
		e.preventDefault();
		this.props.onEditorSubmit(this.state.user);
	};

	render() {
		const { name, phoneNumber, email } = this.state.user;
		return (
			<EditorStyleClose ref='Editor'>
				<EditorStyle onSubmit={this.onSave} className={!this.props.isOpen ? 'close' : ''}>
					<Field>
						Имя
						<Input>
							<input
								id='name'
								onChange={this.onInput}
								value={name}
							></input>
							{!name.length
								? <HidenText>Иванов Иван Иванович</HidenText>
								: null
							}
						</Input>
					</Field>
					<Field>
						Телефон
						<Input className='phoneNumber'>
							<input
								id ='phoneNumber'
								onChange={this.onInput}
								value={phoneNumber}	
							></input>
						</Input>
					</Field>

					<Field>
						E-Mail
						<Input>
							<input
								id='email'
								onChange={this.onInput}
								value={email}	
							></input>
							{!email.length
								? <HidenText>name@address.ru</HidenText>
								: null
							}
						</Input>
					</Field>
					<Submit onClick={this.onSave}>Сохранить</Submit>
					<Footer>
						<i className="material-icons" onClick={this.props.onCloseEditor}>keyboard_arrow_up</i>
						<i className="material-icons" onClick={this.props.onCloseEditor}>keyboard_arrow_up</i>
					</Footer>
				</EditorStyle>
			</EditorStyleClose>
		)
	}
}
