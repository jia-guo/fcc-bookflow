import { connect } from 'react-redux';
import { 
	submitBookSearch, 
	submitUserBookRequest, 
	submitAddNewBookRequest, 
	submitRemoveUserBookRequest, 
	submitRemoveWishListRequest,
	submitTradeRequest,
	submitUpdateUserInfoRequest
} from '../../assets/action';
import Profile from './Profile';

const mapStateToProps = state => ({
	token: state.account.token,
	username: state.account.userInfo.username || "",
	userInfo: state.account.userInfo, 
	searchString: state.book.searchString,
	userBooks: state.book.userBooks,
	searchResult: state.book.searchResult,
	loading: state.book.loading,
	errorMsg: state.book.errorMsg
})

const ProfileContainer = connect(mapStateToProps, 
	{
		submitBookSearch, 
		submitUserBookRequest, 
		submitAddNewBookRequest, 
		submitRemoveUserBookRequest, 
		submitRemoveWishListRequest,
		submitTradeRequest,
		submitUpdateUserInfoRequest
	}
)(Profile);

export default ProfileContainer;