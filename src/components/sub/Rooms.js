import { useRef } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../common/Layout';

function Rooms() {
	const path = process.env.PUBLIC_URL;

	const ul = useRef(null);

	const rooms = useSelector((store) => store.roomsReducer.rooms);

	return (
		<Layout name={'rooms'} bgImage={`${path}/images/roomsBg.jpg`}>
			<div className='roomsTitle'>
				<div className='pic'>
					<img src={`${path}/images/roomsTitleBg.jpeg`} />
				</div>
				<div className='desc'>
					<p>
						All of the rooms at (salt) are designed from our interpretation of
						how we believe you should perceive and absorb Aewol’s landscape. We
						took into account Jeju’s unpredictable wind, along with a sky which
						changes height every season, to an ever-changing wave of Jeju’s sea.
						Each room at (salt) focuses on providing various views that you
						should not miss. Whether you are enjoying the view in comfortable
						silence or waking up to it in the morning, our unique design and
						simplified changes will allow you to focus on the things that matter
						most.
					</p>
				</div>
			</div>
			<ul className='roomsList' ref={ul}>
				{rooms.map((room, index) => {
					return (
						<li key={index}>
							<div className='room'>
								<div className='pic'>
									<img src={`${path}/images/${room.pic}`} alt={room.title} />
								</div>
								<div className='desc'>
									<h2>{room.title}</h2>
									<p>{room.desc}</p>
									<p>{room.limit}</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Rooms;
