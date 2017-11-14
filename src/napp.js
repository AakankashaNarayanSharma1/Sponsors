import React, {Component} from 'react';
import './App.css';
/*import ReactDom from 'react-dom';*/



class App extends Component{
	render()
	{
		window.j = 0;

		function fin_ki_value(obj){return obj.id>=(window.j+1);}

		window.data = this.props.data;
		const imglist = window.data.map((image,i) => {
			if(image.link===''){
				return (
				<div key={i} id="f1_container" className="hover col-1">
					<div id="f1_card" className="shadow col-1">
		  				<div className="front face col-1_image">
	    					<img  className="col-1" alt="" src={image.image} />
	  						</div>
	  					<div className="back face center">
				    <h3 className="props_for_p">{image.name}	</h3>
				    <h4> for PECFEST 2017 </h4>
	  				</div>
					</div>
				</div>);}
				else{
					return (
				<a href={image.link}><div key={i} id="f1_container" className="hover col-1">
					<div id="f1_card" className="shadow col-1">
		  				<div className="front face col-1_image">
	    					<img  className="col-1" alt="" src={image.image} />
	  						</div>
	  					<div className="back face center">
				    <h3 className="props_for_p">{image.name}	</h3>
				    <h4> for PECFEST 2017 </h4>
	  				</div>
					</div>
				</div></a>);
				}
		});

		window.type_of_spons = [];

		var img_concat = [];var init=0; var final;

		for(window.j=0;init<imglist.length;window.j++)
		{
			final = window.data.findIndex(fin_ki_value);
			if(final===-1){img_concat[window.j] = imglist.slice(init,imglist.length);window.type_of_spons[window.j] = window.data[init].type;break;}
			window.type_of_spons[window.j] = window.data[init].type;
			img_concat[window.j] = imglist.slice(init,final);
			init = final;
		}

		window.j = 0;

		const final_arr = img_concat.map((imag,i) => {
			return (
					<div id="holder-div key={i}">
						<div className="App-indi-headers">
						{window.type_of_spons[window.j++]}	
						</div>
						<div className="flex-css" key={i}>
							{imag.concat(" ")}
						</div>
					</div>
					);
		
		});

		

		return (
			<div id="main-div">
			<div className="App-main-header" ><h1>Sponsors</h1></div>
			{final_arr}
			</div> 
		);
	}
}



export default App;