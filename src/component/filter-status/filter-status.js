import React from 'react';

const filterButtons = [
	{ name: 'all', label: 'All' },
	{ name: 'active', label: 'Active' },
	{ name: 'done', label: 'Done' }
];

const FilerStatus = ({ filter, onFilterChange }) => {

	const buttons = filterButtons.map(({ name, label }) => {
		const isActive = name === filter;
		const classNames = isActive ? 'btn-info' : 'btn-outline-secondary';

		return (
			<button key={name}
				type="button"
				className={`btn ${classNames}`}
				onClick={() => onFilterChange(name)}
			>{label}</button>
			
		);
	});

	return (
		<div className="btn-group">
			{buttons}
		</div>
	);
};

export default FilerStatus;