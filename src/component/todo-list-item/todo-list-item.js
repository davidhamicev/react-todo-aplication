import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {
	let itemClassNames = 'todo-list__item d-flex';
	if (done) {
		itemClassNames += ' todo-list__item--done';
	}
	if (important) {
		itemClassNames += ' todo-list__item--important';
	}

	return (
		<span className={itemClassNames}>
			<span
				className="todo-list__item-label"
				onClick={onToggleDone}
			>
				{label}
			</span>

			<button type="button"
				className="btn btn-outline-danger btn-sm"
				onClick={onDeleted}
			>
				<i className="fa fa-trash-o"></i>
			</button>

			<button type="button"
				className="btn btn-outline-success btn-sm"
				onClick={onToggleImportant}
			>
				<i className="fa fa-exclamation"></i>
			</button>
		</span>
	);
};

export default TodoListItem;