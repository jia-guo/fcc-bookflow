import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Container, Header, Button } from 'semantic-ui-react';
import Page from '../Page/Page';
import AccountForm from './AccountForm';
import './Account.css';

class Account extends React.Component{
	state = {
		countdown: 5
	}
	static PropTypes = {
		userInput: PropTypes.object,
		userInfo: PropTypes.object,
		token: PropTypes.string,
		actionType: PropTypes.string,
		errorMsg: PropTypes.string,
		submitionStatus: PropTypes.string,
		loading: PropTypes.bool,
		changeActionType: PropTypes.func,
		submitAccountRequest: PropTypes.func
	}
	componentDidMount(){
		if(!!!this.props.token && window.location.pathname.slice(1) === 'logout'){
			clearInterval(this.timer);
			this.timer = setInterval(() => {
				this.setState({ countdown: this.state.countdown - 1 })
			}, 1000)
		} 
	}
	componentWillReceiveProps(nextProps){
		if(!!!nextProps.token && window.location.pathname.slice(1) === 'logout'){
			clearInterval(this.timer);
			this.timer = setInterval(() => {
				this.setState({ countdown: this.state.countdown - 1 })
			}, 1000)
		} else {
			clearInterval(this.timer);
		}
	}
	componentWillUnmount(){
		clearInterval(this.timer);
	}
	render() {
		let actionType = this.props.match.params.actionType;
		let isLogin = !!this.props.token;
		let displayType = actionType[0].toUpperCase() + actionType.slice(1);
		if(actionType === 'logout') {
			return (
				<Page heroImage="url(./images/page-hero2.jpg)" title={displayType} >
					{
						isLogin 
						? <Container className="account-root account-logout">
							<Header as="h3">Sure that you want to logout? </Header>
							<Button color="blue" fluid
							    onClick={() => this.props.submitAccountRequest({ actionType: 'logout' })}
							>
						  		{displayType}
							</Button>
						  </Container>
						: <Container className="account-root account-logout">
							<Header as="h3">You have logged out successfully!</Header>
							<Header as="h3">Will redirect to home page in {this.state.countdown} seconds...</Header>
							{
								this.state.countdown <= 0 ? <Redirect to="/" /> : null
							}
						</Container>
					}
				</Page>
			)
		} else {
			return (
				<Page heroImage="url(./images/page-hero1.jpg)" title={displayType} >
					<AccountForm 
						actionType={actionType} 
						isLogin={isLogin}
						userInput={this.props.userInput}
						userInfo={this.props.userInfo}
						loading={this.props.loading}
						errorMsg={this.props.errorMsg}
	      				submitionStatus={this.props.submitionStatus}
	      				changeActionType={this.props.changeActionType}
	      				submitAccountRequest={this.props.submitAccountRequest} />
	      		</Page>
	      	)
		}
	}
}

export default Account;