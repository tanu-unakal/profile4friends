import React from 'react';

const Searchbox = ({searchischanged}) => {
	return(
		<div className = 'pa2'>

			<input 
			className = 'pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='search robots' 
			onChange = {searchischanged}
			/>

		</div>
		);
}

export default Searchbox;