import React from 'react';

class ErrorBoundary extends React.Component{
	constructor(props){
		super();
		this.state ={
			hasError: false
		}
	}
	compnentDidCatch(error, info){
		this.setstate({hasError: true})
	}

	render(){
			if(this.state.hasError){
				return <h1> sorry </h1>
			} else {
				return this.props.children
			}

	}
}

export default ErrorBoundary;