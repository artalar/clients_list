import React from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import Editor from './Editor.jsx';


const Layout = styled.div`
	width: 1000px;
	padding: 10px;
	background: #EEE;
	font-family: 'Roboto', sans-serif;
`;

export default ({ children }) => {
	return (
		<Layout>
			<Header onAddClient={e=>console.log(e)}/>
			<Editor/>
		</Layout>
	);
}
