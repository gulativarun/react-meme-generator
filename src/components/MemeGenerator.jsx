import React from 'react';
import './style.css';

export default class MemeGenerator extends React.Component {
	constructor(){
		super()
		this.state = {
			topText : "Life",
			bottomText : "Is Good",
			randomImage : "https://i.imgflip.com/2puag9.jpg",
			allImages : [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
		.then(response => response.json())
		.then(response => {
			const meme = (response.data);
			this.setState({allImages : meme.memes})
			console.log(this.state.allImages);

		})
	}

	

	handleChange(event){
		const {name, value} = event.target;
		console.log(name,value);
		this.setState({[name] : value});
	}
	handleSubmit(event){
	event.preventDefault();
	console.log((Math.floor(Math.random() * this.state.allImages.length)));
	this.setState({randomImage : this.state.allImages[(Math.floor(Math.random() * this.state.allImages.length))].url})
	}
	render() {
		return (
			<div className="meme">
				<form action=""  onSubmit={this.handleSubmit} className="meme-form">
					<input 
						type= "text"
						placeholder="Enter the text"
						name="topText"
						// value={this.state.topText}
						onChange={this.handleChange}
					/>
					<input 
						type= "text"
						placeholder="Enter the text"
						name="bottomText"
						// value={this.state.bottomText}
						onChange={this.handleChange}

					/>
					<button >Gen</button>
				</form> <br/>
				<br/>
				<div>
					<h2 style={{position: "relative", top: "65px", color:"white"}}>{this.state.topText.toUpperCase()}</h2>
					<img src={this.state.randomImage} style={{width: "450px", height: "350px"}} alt=""/>
					<h2 style={{position: "relative", bottom: "65px", color:"white"}}>{this.state.bottomText.toUpperCase()}</h2>
				</div>
			</div>
		);
	}
}

