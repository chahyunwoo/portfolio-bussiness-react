import { NavLink } from 'react-router-dom';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<AnimatePresence>
			{open && (
				<motion.nav
					className='menuMo'
					initial={{ x: 200, opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
						transition: { bounce: 0, type: 'spring' },
					}}
					exit={{ x: 200, opacity: 0 }}
					onClick={() => {
						setOpen((prev) => !prev);
						props.setToggle((prev) => !prev);
					}}>
					<ul id='gnbMo'>
						<li>
							<NavLink to='/rooms'>ROOMS</NavLink>
						</li>
						<li>
							<NavLink to='/gallery'>GALLERY</NavLink>
						</li>
						<li>
							<NavLink to='/youtube'>YOUTUBE</NavLink>
						</li>
						<li>
							<NavLink to='/community'>COMMUNITY</NavLink>
						</li>
						<li>
							<NavLink to='/location'>LOCATION</NavLink>
						</li>
						<li>
							<NavLink to='/join'>JOIN</NavLink>
						</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
