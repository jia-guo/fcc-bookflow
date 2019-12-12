import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class BookDetail extends React.Component {
  state = { open: false }
  componentWillReceiveProps(nextProps){
  	this.setState({ open: nextProps.open })
  }
  close = () => {
  	this.setState({ open: false });
  	this.props.hideBookDetail();
  }
  actionButtonClick = () => {
    this.props.buttonClickAction();
    this.close();
  }
  render() {
  	let { bookInfo, actionClass, actionButtonName, actionButtonIcon } = this.props;
    return (
        <Modal className="book-detail-modal"
        	dimmer="blurring" open={this.state.open} onClose={this.close} closeIcon='close'
        >
          <Modal.Header>{bookInfo.title}</Modal.Header>
          <Modal.Content image scrolling>
            <Image src={bookInfo.imageUrl} />
            <Modal.Description>
              <Header>{bookInfo.title}{bookInfo.subtitle ? " - " + bookInfo.subtitle : ""}</Header>
              <p>{bookInfo.description}</p>
              <p>Author: {bookInfo.authors && bookInfo.authors.join(', ')}</p>
              <p>Published on: {bookInfo.publishedDate}</p>
              <p>Category: {bookInfo.categories && bookInfo.categories.join(', ')}</p>
              <p>Pages: {bookInfo.pageCount}</p>
            </Modal.Description>
          </Modal.Content>
          {
            actionClass === 'required-action' 
            ?
            <Modal.Actions>
              <Button className="bf-theme" color="blue" icon="reply" content="Back" onClick={this.close} />
            </Modal.Actions>
            : 
            <Modal.Actions>
              <Button className="bf-theme-basic" basic color='blue' 
                as="a" href={bookInfo.infoLink} target="_blank" content="More Info" 
              />
              <Button className="bf-theme" color="blue" icon={actionButtonIcon} content={actionButtonName} 
                onClick={this.actionButtonClick} 
              />
            </Modal.Actions>
          }
            
        </Modal>
    )
  }
}

export default BookDetail