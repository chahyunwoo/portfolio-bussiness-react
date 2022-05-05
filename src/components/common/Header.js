import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header({ type }) {
	const [toggle, setToggle] = useState(false);

	const clickedToggle = () => {
		setToggle((prev) => !prev);
	};

	const btnCall = useRef();
	const menuMo = useRef();

	const onClick = () => {
		btnCall.current.classList.remove('on')
		menuMo.current.classList.remove('on');
	};

	const active = { color: 'orange' };

	return (
		<header className={type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/' className='logo'>
						(salt;)
					</NavLink>
				</h1>

				<ul id='gnb'>
					<li>
						<NavLink activeStyle={active} to='/rooms'>
							ROOMS
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/gallery'>
							GALLERY
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/youtube'>
							YOUTUBE
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/faq'>
							FAQ
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/location'>
							LOCATION
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/join'>
							JOIN
						</NavLink>
					</li>
				</ul>

				<button
					className={`btnCall${toggle ? ' on' : ''}`}
					onClick={clickedToggle}
					ref={btnCall}>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<nav className={`menuMo${toggle ? ' on' : ''}`} ref={menuMo}>
					<ul id='gnbMo'>
						<li>
							<NavLink activeStyle={active} to='/rooms' onClick={onClick}>
								ROOMS
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/gallery' onClick={onClick}>
								GALLERY
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/youtube' onClick={onClick}>
								YOUTUBE
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/faq' onClick={onClick}>
								FAQ
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/location' onClick={onClick}>
								LOCATION
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/join' onClick={onClick}>
								JOIN
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
