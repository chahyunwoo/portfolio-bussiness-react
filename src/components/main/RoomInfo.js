import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function Roominfo() {
	const path = process.env.PUBLIC_URL;

	const rooms = useSelector((store) => store.roomsReducer.rooms);

	SwiperCore.use([Autoplay]);

	return (
		<>
			<section id='roomInfo'>
				<div className='inner'>
					<div className='roomDesc'>
						<div className='wrap'>
							<h3>LUXURY + SERVICE</h3>
							<h1>ABOUT SALT</h1>
							<p>
								All of the rooms at (salt) are designed from our interpretation
								of how we believe you should perceive and absorb Aewol’s
								landscape. We took into account Jeju’s unpredictable wind, along
								with a sky which changes height every season, to an
								ever-changing wave of Jeju’s sea. Each room at (salt) focuses on
								providing various views that you should not miss. Whether you
								are enjoying the view in comfortable silence or waking up to it
								in the morning, our unique design and simplified changes will
								allow you to focus on the things that matter most.
							</p>
							<div className='count'>
								<p>5</p>
								<span>ROOMS</span>
							</div>
							<div className='count'>
								<p>10</p>
								<span>DETAILS</span>
							</div>
							<Link to='/rooms'>
								<button className='btnDetail'>
									VIEW ROOMS
									<FontAwesomeIcon className='icon' icon={faArrowRightLong} />
								</button>
							</Link>
						</div>
					</div>
					<div className='roomBox'>
						<Swiper
							className='roomSwiper'
							spaceBetween={10}
							loop={true}
							slidesPerView={1}
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							modules={[EffectFade]}
							effect='fade'
							speed={1500}>
							{rooms.map((_, index) => {
								return (
									<SwiperSlide key={index}>
										<div className='pic'>
											<img src={`${path}/images/RoomType-${index + 1}.jpeg`} />
											<div className='deco'>
												<img src={`${path}/images/mainRoomDeco2.jpg`} />
											</div>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
}

export default Roominfo;
