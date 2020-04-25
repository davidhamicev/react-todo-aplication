import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

	state = {
		label: ''
	}

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	}

	onItemAdded = (e) => {
		e.preventDefault();
		this.setState({
			label: ''
		});
		this.props.onAdded(this.state.label);
	}

	render() {
		return (
			<form action=""
				className="item-add-form"
				onSubmit={this.onItemAdded}>
				<input type="text"
					className="form-control item-add-form__input"
					onChange={this.onLabelChange}
					placeholder="What needs to be done"
					value={this.state.label}
				/>
				<button className="btn btn-info">Add task</button>
			</form>
		);
	};
}