import React from 'react';
import { Button, Header, Modal, Form, Input } from 'semantic-ui-react';
import './Profile.css';

class EditUserInfo extends React.Component {
  state = { 
  	open: false,
  	inputFields: {
  		email: this.props.email,
  		address: this.props.address
  	}
  }
  componentWillReceiveProps(nextProps){
  	this.setState({ 
  		open: nextProps.open, 
  		inputFields: {
	  		email: nextProps.email,
	  		address: nextProps.address
	  	} 
  	})
  }
  handleInputChange = e => {
  	let inputFields = this.state.inputFields;
  	inputFields[e.target.name] = e.target.value;
  	this.setState({ inputFields })
  }
  close = () => {
  	this.setState({ open: false });
  	this.props.hideEditInfo();
  }
  updateUserInfo = () => {
  	let { username, token, submitUpdateUserInfoRequest } = this.props;
  	let userInfo = this.state.inputFields;
    console.log(username, userInfo);
  	submitUpdateUserInfoRequest({ username, userInfo, token })
  	this.close();
  }
  render() {
  	let { username } = this.props;
  	let emailValue = this.state.inputFields.email;
  	let addressValue = this.state.inputFields.address;
    return (
        <Modal className="edit-userinfo-modal" size="tiny"
        	dimmer="blurring" open={this.state.open} onClose={this.close} closeIcon='close'
        >
          <Modal.Header>Edit your information</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header as="h1" content={username} />
              <Form>
              	<Form.Field>
              	   <label>Email</label>
	               <Input
	    				name='email' icon='mail' iconPosition='left'
						type='text' placeholder='Your email ...' 
						value={emailValue} onChange={this.handleInputChange}
				   />
				</Form.Field>
				<Form.Field>
				   <label>Address</label>
				   <Input
	    				name='address' icon='marker' iconPosition='left'
						type='text' placeholder='Your address (City, Country) ...' 
						value={addressValue} onChange={this.handleInputChange}
				   />
				</Form.Field>
			  </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button className="bf-theme-basic" basic color='blue' content="Cancel" onClick={this.close} />
            <Button className="bf-theme" color="blue" icon='check' content="Update" onClick={this.updateUserInfo} />
          </Modal.Actions>
        </Modal>
    )
  }
}

export default EditUserInfo