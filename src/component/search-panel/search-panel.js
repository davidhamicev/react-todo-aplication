import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
	state = {
		searchingPhrase: ''
	}
	onSearch = (e) => {
		const term = e.target.value;
		this.setState({
			searchingPhrase: term
		})
		this.props.onFilteredItems(term.toLowerCase());
	}

	render() {
		return (
			<input
				type="text"
				className="search-panel__input form-control"
				placeholder="type to search"
				onChange={this.onSearch} 
				value={this.state.searchingPhrase} />
		);
	};
}