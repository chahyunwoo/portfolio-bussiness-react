import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Gallery() {
	const path = process.env.PUBLIC_URL;

	const frame = useRef(null);
	const pop = useRef(null);
	const input = useRef(null);

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(0);
	const [enableClick, setEnableClick] = useState(true);

	const masonryOptions = { transitionDuration: '0.5s' };

	const getPicture = async (option) => {
		const key = '4612601b324a2fe5a1f5f7402bf8d87a';
		const num = 24;
		const initPicture = 'flickr.people.getPhotos';
		const searchPicture = 'flickr.photos.search';

		let url = '';

		if (option.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${searchPicture}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&tags=${option.tags}`;
		}

		if (option.type === 'user') {
			url = `https://www.flickr.com/services/rest/?method=${initPicture}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&user_id=195444009@N05`;
		}

		await axios.get(url).then((json) => {
			if (json.data.photos.photo.length === 0) {
				alert('해당 검색어의 이미지가 없습니다.');
			}
			setItems(json.data.photos.photo);
		});

		frame.current.classList.add('on');

		setTimeout(() => {
			setLoading(false);
			setEnableClick(true);
		}, 1000);
	};

	const showSearch = () => {
		const result = input.current.value.trim();

		if (!result) {
			alert('검색어를 입력하세요');
			return;
		}

		input.current.value = '';

		if (enableClick) {
			setEnableClick(false);
			setLoading(true);
			frame.current.classList.remove('on');

			getPicture({
				type: 'search',
				count: 30,
				tags: result,
			});
		}
	};

	useEffect(() => {
		getPicture({
			type: 'user',
			count: 24,
		});
	}, []);

	return (
		<>
			<Layout name={'gallery'} bgImage={`${path}/images/galleryBg.jpg`}>
				<div className='searchBox'>
					<input
						type='text'
						placeholder='SEARCH'
						ref={input}
						onKeyUp={(e) => {
							if (e.key === 'Enter') showSearch();
						}}
					/>
					<button onClick={showSearch}>
						<FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
					</button>
				</div>
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
