import React, { Component } from 'react';
import imag2 from './b.jpg';
import sponsors from './sponsors';
import './App.css';


class Sponsor extends Component {
	render() {
		return (
			<img className="col-3 margin" src={this.props.sponsor.name} alt="logo2" />
		)
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
			 <div className="App-main-header">
					<h2>Sponsors</h2>
			 </div>
			 <div className="App-indi-headers">
					<h3>Title Sponsors</h3>
			 </div>
				<div className="images">
					{
						sponsors.map(sponsor => {
							return (
								<Sponsor sponsor={sponsor} />
							)
						})
					}
				</div>
				<div className="App-indi-headers">
					<h3>Associate Sponsors</h3>
			 </div>
			 <div className="images">
				
				<img className="col-3 margin" src={imag2} alt="logo2" />
				<img className="col-3 margin" src={imag2} alt="logo2" />
				<img className="col-3 margin" src={imag2} alt="logo2" />
				<img className="col-3 margin" src={imag2} alt="logo2" />
				<img className="col-3 margin" src={imag2} alt="logo2" />
				</div>
				<br />
				<div className="App-indi-headers">
				<h2>Food Partners</h2>
				</div>
				<div className="images">
				<img src={imag2} className="col-3 margin" alt="ntn" />
				<img className="col-3 margin" src={imag2} alt="logo2" />
				<img className="col-3 margin" src={imag2} alt="logo2" /> 
				</div>
				<br />
				
			</div>
		);
	}
}

export default App;