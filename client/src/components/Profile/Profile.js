import React from 'react';
import { Header, Icon, Statistic, Divider, Button } from 'semantic-ui-react'
import Page from '../Page/Page';
import Search from '../Search/Search';
import Books from '../Books/Books';
import ProfileTab from './ProfileTab';
import EditInfo from './EditInfo';
import './Profile.css';
 
export default class Profile extends React.Component{
	state = {
		activeTab: 'addNew',
		own: [],
		wish: [],
		required: [],
		given: [],
		received: [],
		openEditInfo: false
	}
	componentDidMount(){
		this.props.submitUserBookRequest(this.props.username);
	}
	componentWillReceiveProps(nextProps){
		let own = [], wish = [], required = [], given = [], received = [];
		let { username } = this.props;
		nextProps.userBooks.forEach(book => {
			if(book.requiredBy === username){
				if(book.status === 'inTrade'){
					wish.push(book);
				} else {
					received.push(book);
				}
			} else if(book.ownedBy === username){
				if(book.status === 'listed'){
					own.push(book);
				} else if(book.status === 'inTrade'){
					own.push(book);
					required.push(book);
				} else if(book.status === 'traded'){
					given.push(book);
				}
			}
		});
		this.setState({ own, wish, required, given, received });
	}
	onTabClick = name => {
		this.setState({ activeTab: name })
	}
	renderBooks = () => {
		let { 
			token, 
			userInfo, 
			searchResult,
			submitAddNewBookRequest, 
			submitRemoveUserBookRequest, 
			submitRemoveWishListRequest,
			submitTradeRequest
		} = this.props;
		let { activeTab, own } = this.state;
		let ownBookGoogleIds = own.map(book => book.googleBookId);
		searchResult.forEach(book => {
			if(ownBookGoogleIds.includes(book.googleBookId)){
				book.existsInUserBook = true;
			} else {
				book.existsInUserBook = false;
			}
		})
		const bookProps = {
			addNew: {iconClassName: "add-new", actionIcon: "add", actionIconName: "Add to my books", iconClickAction: submitAddNewBookRequest},
			own: {iconClassName: "", actionIcon: "trash", actionIconName: "Remove from my book list", iconClickAction: submitRemoveUserBookRequest},
			wish: {iconClassName: "", actionIcon: "trash", actionIconName: "Remove from wishlist", iconClickAction: submitRemoveWishListRequest},
			required: {iconClassName: "required-action", actionIcon: "add", actionIconName: "", iconClickAction: null},
			given: {iconClassName: "no-action", actionIcon: "add", actionIconName: "", iconClickAction: null},
			received: {iconClassName: "no-action", actionIcon: "add", actionIconName: "", iconClickAction: null}
		}
		return <Books 
					token={token} 
					userInfo={userInfo}
					bookData={ activeTab === 'addNew' ? searchResult : this.state[activeTab] } 
					iconClassName={bookProps[activeTab].iconClassName}
					actionIcon={bookProps[activeTab].actionIcon}
					actionIconName={bookProps[activeTab].actionIconName}
					iconClickAction={bookProps[activeTab].iconClickAction}
					submitTradeRequest={submitTradeRequest}
				/>
	}
	openEditInfoModal = () => this.setState({ openEditInfo: true })
	hideEditInfoModal = () => this.setState({ openEditInfo: false })
	render(){
		let { token, userInfo, searchString, loading, errorMsg, submitBookSearch, submitUpdateUserInfoRequest } = this.props;
		let { username, address, email } = userInfo;
		let { activeTab, own, wish, required, given, received, openEditInfo } = this.state;
		return (
			<Page title="My Profile" heroImage="url(./images/page-hero4.jpg)">
				<div className="profile-root">
					<div className="user-info">
						<Header as='h1' className="username">
							{username}
							<a className="user-info-edit" onClick={this.openEditInfoModal}>
								<Icon name="edit" />
								Edit
							</a>
						</Header>
						<Header as='h5' className="user-info-email">
						    <Icon name='mail' />
						    <Header.Content>{email}</Header.Content>
						</Header>
						<Header as='h5' className="user-info-address">
						    <Icon name='marker' />
						    <Header.Content>{address}</Header.Content>
						</Header>
					</div>
					<Statistic.Group className="user-book-tab">
						<ProfileTab name="addNew" clsname="addNew" activeTab={activeTab} 
							value={<Icon name='add' />} label="Add New" onTabClick={this.onTabClick} />
						<ProfileTab name="own" clsname="" activeTab={activeTab} 
							value={own.length} label="Books Own" onTabClick={this.onTabClick} />
						<ProfileTab name="wish" clsname="" activeTab={activeTab} 
							value={wish.length} label="Wishlist" onTabClick={this.onTabClick} />
						<ProfileTab name="required" clsname="" activeTab={activeTab} 
							value={required.length} label="Required" onTabClick={this.onTabClick} />
						<ProfileTab name="given" clsname="" activeTab={activeTab} 
							value={given.length} label="Given" onTabClick={this.onTabClick} />
						<ProfileTab name="received" clsname="" activeTab={activeTab} 
							value={received.length} label="Received" onTabClick={this.onTabClick} />
					</Statistic.Group>
					<Divider />
					<Button circular icon='add' className="add-new" onClick={() => this.onTabClick('addNew')} />
					{
						activeTab === 'addNew' &&
						<Search 
							searchInput={searchString} 
							placeholder="Browse and add books..." 
							loading={loading}
							submitAction={submitBookSearch}
						/>
					}
					{
						errorMsg &&
						<Header className="additional-info"
							as='h4' color="red" icon='warning' textAlign='center' 
						 	content={errorMsg} /> 
					}
					{
						this.renderBooks()
					}
					<EditInfo 
						open={openEditInfo} 
						username={username} token={token}
						address={address} email={email} 
						hideEditInfo={this.hideEditInfoModal} 
						submitUpdateUserInfoRequest={submitUpdateUserInfoRequest}
					/>
				</div>
			</Page>
		)
	}
} 
