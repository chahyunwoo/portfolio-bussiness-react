import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { useState, useRef } from 'react';

import Popup from '../common/Popup';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';

function Videos() {
	const videos = useSelector((store) => store.youtubeReducer.youtube);
	const pop = useRef(null);

	const [index, setIndex] = useState(0);

	return (
		<>
			<section id='videos' className='myScroll'>
				<div className='bgPointLeft'></div>
				<div className='videosBg'>
					<div className='bgPoint'></div>
				</div>
				<div className='inner'>
					<div className='title'>
						<h1>YOUTUBE</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
							<br /> Ad praesentium aliquam distinctio ea vero animi numquam
							iusto nulla.
						</p>
						<Link to='/youtube'>
							<button className='btnDetail'>
								VIEW YOUTUBE
								<FontAwesomeIcon className='icon' icon={faArrowRightLong} />
							</button>
						</Link>
					</div>
					<Swiper
						className='youtubeSwiper'
						slidesPerView={2}
						loop={true}
						grabCursor={false}
						navigation={true}
						modules={[Navigation]}
						speed={1500}>
						{videos.map((video, idx) => {
							return (
								<SwiperSlide
									key={idx}
									onClick={() => {
										pop.current.open();
										setIndex(idx);
									}}>
									<div className='pic'>
										<img src={video.snippet.thumbnails.maxres.url} />
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</section>

			<Popup ref={pop}>
				{videos.length !== 0 && (
					<>
						<iframe
							src={`https://www.youtube.com/embed/${videos[index].snippet.resourceId.videoId}`}
							frameborder='0'></iframe>
						<span className='btnClose' onClick={() => pop.current.close()}>
							<FontAwesomeIcon icon={faX} />
						</span>
					</>
				)}
			</Popup>
		</>
	);
}

export default Videos;
