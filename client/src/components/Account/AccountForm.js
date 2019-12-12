import React from 'react';
import IsEmail from 'isemail';
import { Form, Icon, Container, Message, Button } from 'semantic-ui-react';
import InputField from './InputField';
import './Account.css';

class AccountForm extends React.Component{
	state = {
		inputFields: {
			username: this.props.userInput.username,
			password: this.props.userInput.password,
			address: this.props.userInput.address,
			email: this.props.userInput.email
		},
		errors: {
			username: '',
			password: '',
			address: '',
			email: ''
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			inputFields: { 
				username: nextProps.userInput.username,
				password: nextProps.userInput.password,
				address: nextProps.userInput.address,
				email: nextProps.userInput.email 
			},
			errors: { username: '', password: '', address: '', email: '' }
		});
		if(nextProps.actionType !== this.props.actionType){
			this.props.changeActionType(nextProps.actionType);
		}
	}
	onInputChange = ({ name, value, error }) => {
		let { inputFields, errors } = this.state;
		inputFields[name] = value;
		errors[name] = error;
		this.setState({ inputFields, errors });
	}
	validateForm = () => {
		let { inputFields, errors } = this.state;
		let isNotValid = false;
		if(inputFields.username === '') {
			errors.username = 'Username is a required field'
			this.setState({ errors });
			isNotValid = true;
		}
		if(inputFields.password === '') {
			errors.password = 'Password is a required field'
			this.setState({ errors });
			isNotValid = true;
		}
		if(this.props.actionType === 'signup' && inputFields.email === '') {
			errors.email = 'Email is a required field'
			this.setState({ errors });
			isNotValid = true;
		}
		if(errors.username || errors.password) {
			isNotValid = true;
		}
		return isNotValid;
	}
	validateField = (value, name) => {
		if(value.length < 6) {
			return name + ' needs to have at least 6 characters'
		} else {
			return false;
		}
	}
	validateEmail = (value) => {
		if(!IsEmail.validate(value)){
			return 'Please enter a valid email address';
		} else {
			return false;
		}
	}
 	handleFormSubmit = () => {
 		if(this.validateForm()) return;
 		let { username, password, address, email } = this.state.inputFields;
 		let { actionType } = this.props;
 		this.props.submitAccountRequest({ actionType, username, password, address, email });
	}
	render(){
		let { actionType, isLogin, userInfo, loading, submitionStatus, errorMsg } = this.props;
		let displayType = actionType[0].toUpperCase() + actionType.slice(1);
		return (
			<Form as={Container}
				className="account-root" 
				warning={loading}
				success={submitionStatus === 'success' || isLogin } 
				error={submitionStatus === 'error'}
			>
				<Form.Field>
					<Message warning
				      className="account-msg-loading" icon={<Icon loading name='spinner' />}
				      content={`Submitting ${actionType} information`}
				    />
					<Message success
					  className="account-msg-success"
				      content={`You have successfully logged in as ${userInfo && userInfo.username}!`}
				    />
				    <Message error
				      className="account-msg-error" icon="warning"
				      content={ errorMsg === "" ? "Some problem with the username or password..." : errorMsg }
				    />
				</Form.Field>
				{
					!isLogin &&
					<div>
						<Form.Field>
					      <InputField name="username" 
					      	value={this.state.inputFields.username} error={this.state.errors.username} 
					      	inputIcon="user"
					      	validateField={this.validateField} 
					      	onInputChange={this.onInputChange} />
					    </Form.Field>
					    <Form.Field>
					      <InputField name="password" 
					      	value={this.state.inputFields.password} error={this.state.errors.password} 
					      	inputIcon="lock"
					      	validateField={this.validateField} 
					      	onInputChange={this.onInputChange} />
					    </Form.Field>
					    {
					    	actionType === "signup" &&
					    	<div className="signup-fields">
						    	<Form.Field>
							      <InputField name="email" 
							      	value={this.state.inputFields.email} error={this.state.errors.email} 
							      	inputIcon="mail"
							      	validateField={this.validateEmail} 
							      	onInputChange={this.onInputChange} />
							    </Form.Field>
							    <Form.Field>
							      <InputField name="address" 
							      	value={this.state.inputFields.address} error={this.state.errors.address} 
							      	inputIcon="marker"
							      	onInputChange={this.onInputChange} />
							    </Form.Field>
						   	</div>
					    }
					    <Button fluid type='submit' color="blue" onClick={this.handleFormSubmit}> 
					    	{displayType} 
					    </Button>
					</div>
				}
			</Form>
		)
	}
} 

export default AccountForm;