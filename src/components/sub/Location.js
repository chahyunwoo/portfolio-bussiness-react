import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect, useRef } from 'react';

import Layout from '../common/Layout';

const path = process.env.PUBLIC_URL;

function Location() {
	const container = useRef(null);

	const { kakao } = window;

	useEffect(() => {
		container.current.innerHTML = '';

		const options = {
			center: new kakao.maps.LatLng(33.46698498869484, 126.33629611493727),
			level: 3,
		};

		const mapInstance = new kakao.maps.Map(container.current, options);

		const markerPosition = new kakao.maps.LatLng(
			33.46698498869484,
			126.33629611493727
		);

		const marker = new kakao.maps.Marker({
			position: markerPosition,
		});

		marker.setMap(mapInstance);

		const mapInit = () => {
			mapInstance.setCenter(options.center);
		};
    
		window.addEventListener('resize', mapInit);

		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, []);

	return (
		<>
			<Layout name={'location'} bgImage={`${path}/images/figureBg.jpg`}>
				<div className='rightDeco'>
					<img className='deco' src={`${path}/images/locationDeco.png`} />
				</div>

				<div className='locationBox'>
					<div className='address'>
						<h2>Address</h2>
						<p>
							1159, Gonae-ri,<br/> Aewol-eup, Jeju-si,
							<br />
							Jeju,do, Republic of Korea
						</p>
					</div>
					<div className='phone'>
						<h2>Phone</h2>
						<p>+82(0) 064-799-6401</p>
					</div>
					<div className='email'>
						<h2>Email</h2>
						<p>info@salt-aewol.com</p>
					</div>
					<div className='sns'>
						<a href='#'>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div>
				</div>
			</Layout>
			<div id='map' ref={container}></div>
		</>
	);
}

export default Location;
