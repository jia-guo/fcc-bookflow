import React from 'react';
import { Form, Input, Icon } from 'semantic-ui-react';
import './Search.css';

export default class Search extends React.Component{
	state = {
		searchInput: ''
	}
	componentWillReceiveProps(nextProps){
		this.setState({ searchInput: nextProps.searchInput })
	}
	searchInputChange = e => {
		this.setState({ searchInput: e.target.value })
	}

	render(){
		return (
			<Form className="search-root" onSubmit={() => this.props.submitAction(this.state.searchInput)} >
			  <Input icon="search" iconPosition='left' placeholder={this.props.placeholder} 
			  	value={this.state.searchInput} onChange={this.searchInputChange} />
			  {
			  	this.props.loading &&
			  	<Icon className="search-loading" loading name='spinner' />
			  }
		    </Form>
		)
	}
}
