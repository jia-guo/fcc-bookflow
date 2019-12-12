import React from 'react';
import { Input, Label } from 'semantic-ui-react';

export default class InputField extends React.Component {
	state = {
		value: '',
		error: ''
	}
	componentWillReceiveProps(nextProps){
		this.setState({ 
			value: nextProps.value,
			error: nextProps.error
		});
	}
	handleInputChange = e => {
		let name = this.props.name;
		let value = e.target.value;
		let error = this.props.validateField ? this.props.validateField(value, name) : '';
		this.setState({ value, error });
		this.props.onInputChange({ name, value, error });
	}
	render(){
		let {name, inputIcon} = this.props;
		let {value, error} = this.state;
		return (
			<div className="account-input-field">
				<Input 
    				icon={inputIcon} iconPosition='left'
					placeholder={`Your ${name === 'address' ? 'address as City, Country' : name} ...`} 
					type={name === 'password' ? 'password' : 'text'}
					value={value}
					onChange={this.handleInputChange}
				/>
				{
					error
					? <Label color='red' basic>{error}</Label>
					: <span />
				}
			</div>
		)
	}
}