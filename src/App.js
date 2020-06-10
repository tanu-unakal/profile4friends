import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';


class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			filtername:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(
				users => {
					this.setState({robots: users})
				})
	}


	searchischanged = (event)=> {
		this.setState({
			filtername: event.target.value
		})
	}

	render(){
		const filteredbots = this.state.robots.filter(robo => {
				return robo.name.toLowerCase().includes(this.state.filtername.toLowerCase());
			})
		return(
		<div className = 'tc'>
			<h1 className= 'code f2 washed-blue'> Robo friends </h1>
			<Searchbox searchischanged={this.searchischanged} />
			<Scroll>
				<CardList robots={filteredbots}/>
			</Scroll>
		</div>
		);
	}
	
}

export default App;
