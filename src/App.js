import React, {Component} from 'react';
import './App.css';
/*import ReactDom from 'react-dom';*/



class App extends Component{
	render()
	{
		
		const { data } = this.props;

		const namelist = data.map((image, i) => {
			return (<div key={i} className="col-1"><img className="img" src={ image.image } alt={image.type} /></div> );
		})

		return (
		<div className="row">{namelist}</div>
		);
	}
}



export default App;