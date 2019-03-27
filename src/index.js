import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './index.html';
import Hero from './hero/hero.jsx';
import Portfolio from './portfolio/portfolio.jsx';

class App extends React.Component {
    render() {
      	return (
			<>
				<Hero />
				<Portfolio />
			</>
      	);
    }
}

render(<App />, document.querySelector('#app'));