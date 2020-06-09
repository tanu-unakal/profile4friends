import React from 'react';
import {robots} from './Robots'
import CardList from './CardList';
import Searchbox from './Searchbox';



class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: robots,
			filtername:''
		}
	}


	searchischanged = (event)=> {
		this.setState({
			robots: this.state.robots.filter(robo => {
				return robo.name.toLowerCase().includes(event.target.value.toLowerCase());
			}
			)
		})
	}

	render(){
		return(
		<div className = 'tc'>
			<h1 className= 'code f2 washed-blue'> Robo friends </h1>
			<Searchbox searchischanged={this.searchischanged} />
			<CardList robots={this.state.robots}/>
		</div>
		);
	}
	
}

export default App;