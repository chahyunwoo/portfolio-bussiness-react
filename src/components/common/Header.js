import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({ type }) {
	return (
		<header className={type}>
			<div className='inner'>
				<h1 className='logo'>
					<NavLink exact to='/'>
						(salt;)
					</NavLink>
				</h1>

        <ul id="gnb">
          <li><NavLink to='/rooms'>ROOMS</NavLink></li>
          <li><NavLink to='/gallery'>GALLERY</NavLink></li>
          <li><NavLink to='/youtube'>YOUTUBE</NavLink></li>
          <li><NavLink to='/faq'>FAQ</NavLink></li>
          <li><NavLink to='/location'>LOCATION</NavLink></li>
          <li><NavLink to='/join'>JOIN</NavLink></li>
        </ul>
			</div>
		</header>
	);
}

export default Header;
