import React, { useState } from 'react';
import "../css/info.css";

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = { valueImg: '', valueTitle: '', valuePrice: '', }

		this.titleChange = this.titleChange.bind(this);
		this.imgChange = this.imgChange.bind(this);
		this.priceChange = this.priceChange.bind(this);
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

	formSubmit(event) {
		alert('Отправленное img: ' + this.state.valueImg + ' Отправленное title: ' + this.state.valueTitle + ' Отправленное price: ' + this.state.valuePrice);
		event.preventDefault();
	}

	render() {
		return (
			<form className='info_form' onSubmit={this.formSubmit}>
				<label className='lab'>
					Image URL:
					<input type="text" className='take_info' value={this.state.value} onChange={this.imgChange} />
				</label>
				<label className='lab'>
					Title:
					<input type="text" className='take_info' value={this.state.value} onChange={this.titleChange} />
				</label>
				<label className='lab'>
					Price:
					<input type="text" className='take_info' value={this.state.value} onChange={this.priceChange} />
				</label>
				<input type="submit" className='give_info' value="Submit" />
			</form>
		);
	}
}

export default Info