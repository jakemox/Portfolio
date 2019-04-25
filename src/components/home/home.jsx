import React from 'react';
import Hero from '../hero/hero.jsx';
import Portfolio from '../portfolio/portfolio.jsx';
import About from '../about/about.jsx';
import Footer from '../footer/footer.jsx';

export default class Home extends React.Component {
   	constructor(props) {
        super(props);

        this.state = {
			aboutVisible: false,
        }
	}
	
	changeAboutVisible = (data) => {
		this.setState({
			aboutVisible: data.visible
		});
	};

	render() {
		return (
			<>
				<Hero page="home" action={this.changeAboutVisible}/>
				<Portfolio />
				<About action={this.changeAboutVisible} visible={this.state.aboutVisible}/>
                <Footer />
			</>
		)
	}
}