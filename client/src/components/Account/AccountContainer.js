import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeActionType, submitAccountRequest } from '../../assets/action';
import Account from './Account';

const mapStateToProps = state => ({
	...state.account
})

const AccountContainer = withRouter(connect(
	mapStateToProps,
	{
		changeActionType,
		submitAccountRequest
	}
)(Account));

export default AccountContainer