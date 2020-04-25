import React, { Component } from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import FilterStatus from '../filter-status';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
	state = {
		todoItems: [
			{ id: 1, label: 'Drink Coffee', important: false, done: false },
			{ id: 2, label: 'Learn React', important: false, done: false },
			{ id: 3, label: 'Make Awesome App', important: false, done: false },
			{ id: 4, label: 'Learn English', important: false, done: false }
		],
		filter: 'all',
		term: ''
	};

	deleteItem = (id) => {
		this.setState(({ todoItems }) => {
			const updatedItems = todoItems.filter((item) => item.id !== id);

			return {
				todoItems: updatedItems
			};
		})
		
	}

	addItem = (itemLabel) => {
		this.setState(({ todoItems }) => {
			const newItem = {
				id: todoItems.length + 1,
				label: itemLabel,
				important: false,
				done: false
			}
			let updatedItems = todoItems;
			updatedItems.push(newItem);

			return {
				todoItems: updatedItems
			}
			
		})
	}
	
	togglePoperty = (propId, propName) => {
		this.setState(({ todoItems }) => {
			const updatedItems = todoItems;
			updatedItems.forEach((item) => {
				if (item.id === propId) {
					item[propName] = !item[propName];
				}
			});

			return {
				todoItems: updatedItems
			};
		});
	}

	toggleImportant = (id) => {
		this.togglePoperty(id, 'important')
	}

	toggleDone = (id) => {
		this.togglePoperty(id, 'done')
	}

	onFilteredItems = (term) => {
		this.setState({ term });
	}

	searchItems = (items, term) => {
		if (!term.length)
			return items
		else
			return items.filter((item) => {
				return item.label.toLowerCase().includes(term)
			})
	}

	filter = (items, filter) => {
		switch (filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done)
			case 'done':
				return items.filter((item) => item.done)
			default:
				return items;
		}
	}

	onFilterChange = (filter) => {
		this.setState({ filter });
	}

	render() {
		const { todoItems, filter, term } = this.state;
		const visibileItems = this.filter(this.searchItems(todoItems, term), filter);
		
		return (
			<div className="todo-app container">
				<Header items={todoItems} />

				<div className="search-panel d-flex">
					<SearchPanel onFilteredItems={this.onFilteredItems} />
					<FilterStatus filter={filter}
						onFilterChange={this.onFilterChange}
					/>
				</div>

				<TodoList items={visibileItems}
					onDeleted={this.deleteItem}
					onToggleImportant={this.toggleImportant}
					onToggleDone={this.toggleDone}
				/>

				<ItemAddForm onAdded={this.addItem} />
			</div>
		);
	};
};