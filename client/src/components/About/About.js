import React from 'react';
import Page from '../Page/Page';
import { Header, List, Label, Button, Item } from 'semantic-ui-react'
import './About.css';

const About = () => (
	<Page heroImage="url(./images/page-hero0.jpg)" title="About" >
		<div className="about-root">
			<div className="about-project">
				<Header as="h1">About BookFlow</Header>
				<List relaxed size="medium" className="about-project-list">
			      <List.Item>
			        <List.Content className="about-project-desc">
			          <List.Header className="about-project-desc-header">Project Purpose </List.Header>
			          <p>
			          	This is a freeCodeCamp full-stack project, following the instruction of  
			          	<a className="about-link" href="https://www.freecodecamp.com/challenges/build-a-nightlife-coordination-app">
			          		 "Manage a Book Trading Club | Free Code Camp"
		          		 </a>
			          </p>
			          <p>The project fullfills the following user stories: </p>
		           	  <List.List as='ul'>
				        <List.Item as='li'>I can view all books posted by every user.</List.Item>
				        <List.Item as='li'>I can add a new book.</List.Item>
				        <List.Item as='li'>I can update my settings to store my full name, city, and state.</List.Item>
				        <List.Item as='li'>I can propose a trade and wait for the other user to accept the trade.</List.Item>
				      </List.List>
			        </List.Content>
			      </List.Item>
			      <List.Item>
			        <List.Content>
			          <List.Header className="about-project-desc-header">Frontend Tech Stack and UI Lib</List.Header>
			          <Label as='a' color='blue' size='large' image>
					      <img alt='react logo' src='./images/react-logo.png' />
					        React
					  </Label>
					  <Label as='a' color='violet' size='large' image>
					      <img alt='redux logo' src='./images/redux-logo.png' />
					        Redux
					  </Label>
					  <Label as='a' color='teal' size='large' image>
					      <img alt='sematic ui react logo' src='./images/semantic-logo.png' />
					        Semantic UI React
					  </Label>
			        </List.Content>
			      </List.Item>
			      <List.Item>
			        <List.Content>
			          <List.Header className="about-project-desc-header">Backend Tech Stack</List.Header>
					  <Label as='a' color='olive' size='large' image>
					      <img alt='node.js logo' src='./images/node-logo.png' />
					        Node.js
					  </Label>
					  <Label as='a' color='grey' size='large' image>
					      <img alt='express.js logo' src='./images/express-logo.png' />
					        Express.js
					  </Label>
					  <Label as='a' color='green' size='large' image>
					      <img alt='MongoDB logo' src='./images/mongo-logo.png' />
					        MongoDB
					  </Label>
			        </List.Content>
			      </List.Item>
			      <List.Item>
			        <List.Content>
			          <List.Header className="about-project-desc-header">External API</List.Header>
			          <Label as='a' color='black' size='large' image>
					      <img alt='Google books api logo' src='./images/google-logo.png' />
					        Google Books API
					  </Label>
			        </List.Content>
			      </List.Item>
			    </List>
			</div>
			<div className="about-author">
				<Header as="h1" className="about-author-title">About the Author - Jia Guo</Header>
				<Item.Group>
				    <Item>
				      <Item.Image src='./images/jia_guo.jpg' size='small' shape='circular' className="about-author-picture" />
				      <Item.Content>
				        <Item.Header className="about-author-location">A web developer in Palo Alto, CA</Item.Header>
				        <Item.Meta className="about-author-icon">
				        	<span className="about-author-icon-text"> Get in touch with me </span>
				        	<Button circular as="a" color='black' icon='github alternate' href="https://github.com/antipasjiajia" />
							<Button circular as="a" color='black' icon='linkedin' href="https://www.linkedin.com/in/jia-guo-40921642/?trk=nav_responsive_tab_profile_pic" />
						    <Button circular as="a" color='black' icon='codepen' href="https://codepen.io/antipasjiajia/" />
						    <Button circular as="a" color='black' icon='free code camp' href="https://www.freecodecamp.com/antipasjiajia" />
				        </Item.Meta>
				        <Item.Extra className="about-author-link">
				        	<span className="about-author-link-text">View my portfolio at</span>
				            <a className="about-link" href="https://antipasjiajia.github.io/">https://antipasjiajia.github.io/</a>
				        </Item.Extra>
				      </Item.Content>
				    </Item>
			    </Item.Group>
			</div>
		</div>
	</Page>
)

export default About;