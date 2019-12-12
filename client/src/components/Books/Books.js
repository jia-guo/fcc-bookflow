import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import BookDetail from './BookDetail';
import placehoderImg from '../../assets/images/picture-not-available.png';
import './Books.css';

class Books extends React.Component{
    state = {  
        openBookDetail: false,
        bookInfo: {}
    }
    static PropTypes = {
        token: PropTypes.token,
        bookData: PropTypes.array,
        actionIconName: PropTypes.string,
        iconClickAction: PropTypes.func
    }
    showBookDetail = book => this.setState({ openBookDetail: true, bookInfo: book })
    hideBookDetail = () => this.setState({ openBookDetail: false, bookInfo: {} })
    render(){
        let { openBookDetail, bookInfo } = this.state;
        let { token, userInfo, bookData, iconClassName, actionIcon, actionIconName, iconClickAction, submitTradeRequest } = this.props;
        let username = userInfo && userInfo.username;
        return(
        	<div className="books-root">
        		{
                    bookData.map((book, i) => (
            			<Card className="book-card" key={book.googleBookId + (book._id || i)} >
                            <div className="book-img-wrap" onClick={() => this.showBookDetail(book)}>
            			      <Image src={book.imageUrl || placehoderImg} />
                              <div className="book-img-shade">
                                <Button className="book-img-button bf-theme-basic">
                                    View Detail
                                </Button>
                              </div>
                            </div>
            			    <Card.Content>
            			      <Card.Header>
            			        <p className="book-title">{book.title}</p>
                                <p className="book-subtitle">{book.subtitle}</p>
            			      </Card.Header>
            			      <Card.Meta>
            			        <span className="book-info">
                                  <p className="book-info-author">Author: {book.authors ? book.authors.join(', ') : '--'}</p>
            			          <p>Published on: {book.publishedDate}</p>
                                  <p>Pages: {book.pageCount}</p>
            			        </span>
            			      </Card.Meta>
            			    </Card.Content>
            			    <Card.Content extra className={iconClassName}>
                            {
                                iconClassName === 'add-new' && book.existsInUserBook 
                                ?
                                <a className="normal-action green" >
                                    <Icon name="checkmark" />
                                    Book already in your list
                                </a>
                                :
                                <a className="normal-action " onClick={ () => iconClickAction(book, userInfo, token) }>
                                    <Icon name={actionIcon} />
                                    { !!token ? actionIconName : "Log in & " + actionIconName }
                                </a>
                            }
                              <a className="required-action-reject" onClick={ () => submitTradeRequest(book, username, 'reject', token) }>
                                <Icon name="remove" color="red"/>
                                Reject
                              </a>
                              <a className="required-action-confirm" onClick={ () => submitTradeRequest(book, username, 'confirm', token) }>
                                <Icon name="checkmark" color="green"/>
                                Confirm
                              </a>
            			    </Card.Content>
            			</Card>
        		  ))
                }
                <BookDetail 
                    open={openBookDetail} bookInfo={bookInfo} 
                    actionClass={iconClassName}
                    actionButtonIcon={actionIcon}
                    actionButtonName={actionIconName}
                    buttonClickAction={ () => iconClickAction(bookInfo, userInfo, token) }
                    hideBookDetail={this.hideBookDetail} 
                />
        	</div>                         
        )
    }
}

export default Books;