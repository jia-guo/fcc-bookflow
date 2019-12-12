import React from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from 'semantic-ui-react'
import Page from '../Page/Page';
import Search from '../Search/Search';
import Books from '../Books/Books';

export default class Browse extends React.Component{
	state = {
		redirect: false
	}
	componentDidMount(){
		this.props.submitBookRequest()
	}
	addToWishList = book => {
		let { token, userInfo } = this.props;
		if(!!token){
			this.props.submitAddToWishListRequest( book._id, userInfo, token )
			this.props.submitBookRequest()
		} else {
			this.setState({ redirect: true });
			this.props.changeNav('login')
		}
	}
	render(){
		let { token, username, userInfo, filterString, bookList, wishedItemsNumMsg, updateFilterString } = this.props;
		let filteredBookList = bookList
				.filter(book => {
					let description = book.description || '';
					return description.toLowerCase().includes(filterString.toLowerCase());
				})
				.filter(book => book.ownedBy !== username)
				.filter(book => book.status === 'listed');
		return (
			<Page title="Browse Books" heroImage="url(./images/page-hero3.jpg)">
				<Search 
					searchInput={filterString} 
					placeholder="Browse books in the flow..." 
					submitAction={updateFilterString}
				/>
				{	
					!!wishedItemsNumMsg 
					?  wishedItemsNumMsg === 'added' 
						? <Header className="additional-info"
							as='h4' color="green" icon='check' textAlign='center' 
							content="Book successfully added to your wishlist!" /> 
						: <Header className="additional-info"
							as='h4' color="red" icon='warning' textAlign='center' 
						 	content="Cannot add more than 3 books to wishlist." /> 
					: null
				}
				<Books 
					token={token} 
					userInfo={userInfo}
					bookData={filteredBookList} 
					actionIcon="like"
					actionIconName="Add to wish list" 
					iconClickAction={this.addToWishList} 
				/>
				{
					this.state.redirect &&
					<Redirect to="/login" />
				}
			</Page>
		)
	}
} 