import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react'
import './Page.css';

const Page = (props) => (
	<div className="page-root">
		<div className="page-hero" style={{backgroundImage: props.heroImage}} >
			<h1>{props.title}</h1>
		</div>
		<Container className="page-container">
			{props.children}
		</Container>
	</div>
)

Page.PropTypes = {
	heroImage: PropTypes.String,
	title: PropTypes.String
}

export default Page;