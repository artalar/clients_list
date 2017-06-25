import React, { Component } from 'react';
import styled from 'styled-components';


const Editor = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 10px;
	font-size: 0.6rem;
	color: gray;
	.NameAndEmail {
		display: flex;
		flex-direction: column;
		margin-right: 30px;
	}
	.PhoneAndSave {
		display: flex;
		flex-direction: column;
	}
`;

const Field = styled.div`
	display: flex;
	flex-direction: column;
	> div {
		display: flex;
		align-items: center;
		width: 500px;
		height: 30px;
		margin: 8px 0;
		padding: 0 10px;
		border: 1px solid gray;
		border-radius: 13px;
		background-color: #FFF;
		> input {
			width: 96%;
			border: none;
			background-color: rgba(0,0,0,0);
			z-index: 1;
			:focus { outline: none; }
		}
	}
`;

const HidenText = styled.span`
	position: absolute;
	font-size: 0.8rem;
`

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phoneNumber: '',
			eMail: ''
		};
	}

	onInput = ({target}) => {
		this.setState({
			[target.id]: target.value
		})
	}
	render() {
		return (
			<Editor>
				<div id='NameAndEmail'>
					<Field>
						Имя
						<div>
							<input id='name' onChange={this.onInput}></input>
							{!this.state.name.length
								? <HidenText>Иванов Иван Иванович</HidenText>
								: null
							}
						</div>
					</Field>
					<Field>
						E-Mail
						<div>
							<input id='eMail' onChange={this.onInput}></input>
							{!this.state.eMail.length
								? <HidenText>name@address.ru</HidenText>
								: null
							}
						</div>
					</Field>
				</div>
				<div id='PhoneAndSave'>
					<Field>
						Телефон
						<div>
							<input onChange={this.onInput}></input>
						</div>
					</Field>
				</div>
			</Editor>
		)
	}
}
