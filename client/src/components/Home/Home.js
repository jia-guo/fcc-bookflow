import React from 'react';
import './Home.css';

class Home extends React.Component{
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
						<h1>Flow books <br className="break-point" /> to you and to others.</h1>
						<h1>Connect people <br className="break-point" /> with the same passion.</h1>
						<p className="font-size-18">We are a non-profit book sharing and exchanging platform.</p>
					</div>
				</div>
				<div className="info-boxes">
					<div className="info-box-wrapper">
						<div className="info-box-content">
							<h3 className="font-weight-400">Search and add books you want to give away.</h3>
						</div>
					</div>
					<div className="info-box-wrapper">
						<div className="info-box-content">
							<h3 className="font-weight-400">Receive requests from others for your books.</h3>
						</div>
					</div>
					<div className="info-box-wrapper">
						<div className="info-box-content">
							<h3 className="font-weight-400">Mail your books and receive points.</h3>
						</div>
					</div>
					<div className="info-box-wrapper">
						<div className="info-box-content">
							<h3 className="font-weight-400">Ask for books from others with your points.</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;