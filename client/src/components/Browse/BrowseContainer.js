import { connect } from 'react-redux';
import { changeNav, submitBookRequest, updateFilterString, submitAddToWishListRequest } from '../../assets/action';
import Browse from './Browse';

const mapStateToProps = state => ({
	token: state.account.token,
	username: state.account.userInfo.username || "",
	userInfo: state.account.userInfo,
	...state.book
})

const BrowseContainer = connect(mapStateToProps, { changeNav, submitBookRequest, updateFilterString, submitAddToWishListRequest })(Browse);

export default BrowseContainer;