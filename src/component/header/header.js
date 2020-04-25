import React from 'react';
import './header.css';

const Header = (props) => {

	const { items } = props;
	const doneCount = items.filter(({ done }) => done === true).length;
	const moreToDo = items.length - doneCount;

	return (
		<header className="nheader d-flex">
			<h1 className="header__title">Todo List</h1>
			<h2 className="header__sub-title">{moreToDo} more to do, {doneCount} done</h2>
		</header>
	);
};

export default Header;