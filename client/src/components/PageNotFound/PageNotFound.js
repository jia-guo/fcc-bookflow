import React from 'react';
import '../Home/Home.css';

class PageNotFound extends React.Component{
	state = {
		homeImageIndex: 0
	}
	componentDidMount(){
		this.changeHomeImageInterval = setInterval(() => {
			let { homeImageIndex } = this.state;
			homeImageIndex = homeImageIndex < 4 ? homeImageIndex + 1 : 0;
			this.setState({ homeImageIndex });
		}, 5000);
	}
	componentWillUnmount(){
		clearInterval(this.changeHomeImageInterval);
	}
	render(){
		let homeImage = `url(./images/page-hero${this.state.homeImageIndex}.jpg)`;
		return (
			<div className="home-root" style={{ backgroundImage: homeImage }} >
				<div className="hero">
					<div className="hero-inner-wrapper">
						<h1 className="super-text-1">404</h1>
						<h1 className="super-text-2">Page Not Found</h1>
						<p className="font-size-20">Please start your book flow from the navigation above.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default PageNotFound;