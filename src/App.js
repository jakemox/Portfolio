import React, { Component } from 'react';
import './index.css';
import Hero from './components/hero/hero.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import About from './components/about/about.jsx';
import Footer from './components/footer/footer.jsx';

class App extends Component {
	constructor(props) {
        super(props);

        this.state = {
            aboutVisible: false
        }
	}
	
	changeAboutVisible = (data) => {
		this.setState({
			aboutVisible: data.visible
		})
	}

	render() {
	return (
		<>
			<Hero action={this.changeAboutVisible}/>
			<Portfolio />
			<About action={this.changeAboutVisible} visible={this.state.aboutVisible}/>
			<Footer />
		</>
	);
}
}

export default App;
