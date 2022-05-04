import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<div className='wrap'>
					<div className='info'>
						<h1>
							<NavLink exact to='/' className='logo'>
								(salt;)
							</NavLink>
						</h1>
						<p>info@salt-aewol.com</p>
						<p>+82(0) 064-799-6401</p>
						<p>1159, Gonae-ri, Aewol-eup, Jeju-si,</p>
						<p>Jeju,do, Republic of Korea</p>
					</div>
					<div className='sns'>
						<ul className='snsList'>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faFacebookF} />
								</a>
							</li>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</li>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<p>2022 chahyunwoo &copy; ALL RIGHTS RESERVED.</p>
			</div>
		</footer>
	);
}

export default Footer;
