import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import { data } from './data/data.js';
import Home from './components/home/home.jsx'
import Hero from './components/hero/hero.jsx';
// import Portfolio from './components/portfolio/portfolio.jsx';
// import About from './components/about/about.jsx';
import Footer from './components/footer/footer.jsx';
import CaseStudyInfo from './components/case-study/case-study.jsx';
import CaseStudyOther from './components/case-study/case-study-other.jsx';

class App extends Component {
	render() {
		return (
			<Router>
				<Route exact path="/" component={Home} />
				<Route
					path="/:name"
					render={ (props) =>
						<CaseStudy
							itemData= {data.portfolioItems} {...props}
						/>
					}
				/>
			</Router>
		);
	}
}

const CaseStudy = ({match, itemData}) => {
	var project = itemData.find(p => p.name === match.params.name);
	
	console.log(project);
	return (
		<>
			<Hero
				page={project.name}
				title={project.title}
				subtitle={project.subtitle}
				image={project.image}
			/>
			<CaseStudyInfo
				color={project.color}
				description={project.description}
				link={project.link}
			/>
			<CaseStudyOther 
				stackInfo={project.stackInfo}
				stack={project.stack}
			/>
			<Footer />
		</>
	)
}

export default App;
