import React, {Component} from 'react';
import './App.css';
/*import ReactDom from 'react-dom';*/



class App extends Component{
	render()
	{
		
		const { data } = this.props;

		const imglist = data.map((image,i) => {
			if(image.id==0){return (<div key={i} ><div className="App-indi-headers">{image.type}</div><div className="col-1"><img className="dummy" src={ image.image } alt="" /></div> </div>);}
			else if(image.id%3==1){return(<div key={i} className="col-1 leftspace"><img className="img" src={ image.image } alt={image.type} /></div>);}
			else {return(<div key={i} className="col-1"><img className="img" src={ image.image } alt={image.type} /></div>);}
			})

		const type_of_spons = this.props.name;

		const namelist = data.map(type_value => type_value);

		return (
			<div id="main div">
			<div className="App-main-header"></div>
			{imglist}
			</div> 
		);
	}
}



export default App;