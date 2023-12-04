import React from "react";
import "../css/card.css";

class Card extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="card">
				<div className="align_centre">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 closeIcon" onClick={this.props.onDelete}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<img className="img" src={this.props.img} />
					<p className="title">{this.props.title}</p>
					<p className="price">{this.props.price}$</p>
				</div>
			</div>
		)
	}
}
export default Card