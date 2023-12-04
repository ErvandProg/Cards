import React, { useState } from 'react';
import "../css/info.css";
import Card from "./Card.js";
import "../css/card.css";

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			valueImg: '',
			valueTitle: '',
			valuePrice: '',
			cards: []
		};

		this.titleChange = this.titleChange.bind(this);
		this.imgChange = this.imgChange.bind(this);
		this.priceChange = this.priceChange.bind(this);
		this.createCard = this.createCard.bind(this);
		this.deleteCard = this.deleteCard.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}

	imgChange(event) {
		this.setState({ valueImg: event.target.value });
	}

	titleChange(event) {
		this.setState({ valueTitle: event.target.value });
	}

	priceChange(event) {
		this.setState({ valuePrice: event.target.value });
	}

	createCard(event) {
		event.preventDefault();

		const newCard = {
			img: this.state.valueImg,
			title: this.state.valueTitle,
			price: this.state.valuePrice
		};

		this.setState((prevState) => ({
			cards: [...prevState.cards, newCard],
			valueImg: '',
			valueTitle: '',
			valuePrice: ''
		}));
	}

	deleteCard(index) {
		this.setState((prevState) => ({
			cards: prevState.cards.filter((_, i) => i !== index)
		}));
	}


	formSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<>
				<form className='info_form' onSubmit={this.formSubmit}>
					<label className='lab'>
						Image URL:
						<input type="text" className='take_info' value={this.state.valueImg} onChange={this.imgChange} />
					</label>
					<label className='lab'>
						Title:
						<input type="text" className='take_info' value={this.state.valueTitle} onChange={this.titleChange} />
					</label>
					<label className='lab'>
						Price:
						<input type="text" className='take_info' value={this.state.valuePrice} onChange={this.priceChange} />
					</label>
					<input type="submit" className='give_info' value="Submit" onClick={this.createCard} />
				</form>

				<div className='cards'>
					{this.state.cards.map((card, index) => (<Card img={card.img} title={card.title} price={card.price} key={index} onDelete={() => this.deleteCard(index)} />))}
				</div>
			</>
		);
	}
}

export default Info;
