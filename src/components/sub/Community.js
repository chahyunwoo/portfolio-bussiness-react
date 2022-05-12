import { useEffect, useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Community() {
	const path = process.env.PUBLIC_URL;

	const pop = useRef(null);

	return (
		<>
			<Layout name={'community'}>
				<div className='communityVisual'>
					<div className='wrap'>
						<div className='pic'>
							<img src={`${path}/images/communityVisualPic.jpg`} />
						</div>
						<div className='desc'>
							<p className='descTitle'>Small Talk</p>
							<p className='descContent'>
								The first floor of the building had spent a long time without a
								specific purpose, although the luggages were delivered from time
								to time, people had their cups of coffee and made small talks.
								We wish to embody all the possibilities of this space by calling
								it: The First Floor.
							</p>
						</div>
					</div>
				</div>
				<button className='BtnWrite' onClick={() => pop.current.open()}>
					Leave comments
				</button>
			</Layout>

			<Popup ref={pop} className='communityPopUp'>
				<div className='writeBox'>
					<div className='inputBox'>
						<div className='labelWrap'>
							<label htmlFor='title'>TITLE</label>
						</div>
						<input type='text' name='title' id='title' />
					</div>
					<div className='inputBox'>
						<div className='labelWrap'>
							<label htmlFor='comments'>COMMENTS</label>
						</div>
						<textarea
							name='comments'
							id='comments'
							cols='30'
							rows='10'></textarea>
					</div>
					<div className='inputBox'>
						<button className='btnReset'>RESET</button>
						<button className='btnCreate'>CREATE</button>
					</div>
					<span
						className='btnClose_community'
						onClick={() => pop.current.close()}>
						<FontAwesomeIcon icon={faX} />
					</span>
				</div>
			</Popup>
		</>
	);
}

export default Community;
