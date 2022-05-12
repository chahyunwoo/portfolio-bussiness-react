import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Gallery() {
	const path = process.env.PUBLIC_URL;

	const frame = useRef(null);
	const pop = useRef(null);

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(0);

	const masonryOptions = { transitionDuration: '0.5s' };

	const getPicture = async (option) => {
		const key = '4612601b324a2fe5a1f5f7402bf8d87a';
		const num = 24;
		const initPicture = 'flickr.people.getPhotos';
		const searchPicture = 'flickr.photos.search';

		let url = `https://www.flickr.com/services/rest/?method=${initPicture}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&user_id=195444009@N05`;

		await axios.get(url).then((json) => {
			setItems(json.data.photos.photo);
		});

    frame.current.classList.add('on');
    
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	useEffect(() => {
		getPicture();
	}, []);

	return (
		<>
			<Layout name={'gallery'} bgImage={`${path}/images/galleryBg.jpg`}>
				{loading ? (
					<img className='loading' src={`${path}/images/loadingImg.gif`} />
				) : null}

				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{items.map((item, index) => {
							return (
								<article
									key={index}
									onClick={() => {
										setIndex(index);
										pop.current.open();
									}}>
									<div className='pictureWrap'>
										<p>{`# ${index + 1}`}</p>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
											/>
										</div>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			<Popup ref={pop}>
				{items.length !== 0 ? (
					<>
						<img
							src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
						/>
						<span className='btnClose' onClick={() => pop.current.close()}>
            <FontAwesomeIcon icon={faX} />
						</span>
					</>
				) : null}
			</Popup>
		</>
	);
}

export default Gallery;
