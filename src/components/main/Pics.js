import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

import Popup from '../common/Popup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';

function Pics() {
	SwiperCore.use([Autoplay]);

	const pics = useSelector((store) => store.galleryReducer.gallery);

	const [index, setIndex] = useState(0);

	const pop = useRef(null);

	return (
		<>
			<section id='pics' className='myScroll'>
				<div className='inner'>
					<div className='title'>
						<h1>GALLERY</h1>
						<Link to='/gallery'>
							<button className='btnDetail'>
								VIEW GALLERY
								<FontAwesomeIcon className='icon' icon={faArrowRightLong} />
							</button>
						</Link>
					</div>
				</div>
				<Swiper
					className='picSwiper'
          spaceBetween={10}
					loop={true}
					slidesPerView={3}
					grabCursor={true}
					centeredSlides={true}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					speed={1500}
          breakpoints={{
            649: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1179: {
              slidesPerView: 8,
              spaceBetween: 50,
            }
          }}
          >
					{pics.map((pic, idx) => {
						return (
							<SwiperSlide key={idx}>
								<div
									className='pic'
									onClick={() => {
										setIndex(idx);
										pop.current.open();
									}}>
									<img
										src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
									/>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>

			<Popup ref={pop}>
				{pics.length !== 0 && (
					<>
						<img
							src={`https://live.staticflickr.com/${pics[index].server}/${pics[index].id}_${pics[index].secret}_b.jpg`}
						/>
						<span className='btnClose' onClick={() => pop.current.close()}>
							<FontAwesomeIcon icon={faX} />
						</span>
					</>
				)}
			</Popup>
		</>
	);
}

export default Pics;
