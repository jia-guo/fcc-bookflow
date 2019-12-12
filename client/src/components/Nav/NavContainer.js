import { connect } from 'react-redux';
import { changeNav } from '../../assets/action';
import Nav from './Nav';

const mapStateToProps = state => ({
	token: state.account.token,
	curNav: state.curNav
})

const NavContainer = connect(mapStateToProps, { changeNav })(Nav);

export default NavContainer