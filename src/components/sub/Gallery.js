import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Masonry from 'react-masonry-component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Layout from '../common/Layout';
import Popup from '../common/Popup';

import * as types from '../../redux/actionType';

function Gallery() {
	const { gallery } = useSelector((store) => store.galleryReducer);

	const dispatch = useDispatch();
	const path = process.env.PUBLIC_URL;

	const frame = useRef(null);
	const pop = useRef(null);
	const input = useRef(null);

	const [opt, setOpt] = useState({
		type: 'user',
		count: 24,
		user: '195444009@N05',
	});
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(0);
	const [enableClick, setEnableClick] = useState(true);

	const masonryOptions = { transitionDuration: '0.5s' };

	const endLoading = () => {
		setTimeout(() => {
			frame.current.classList.add('on');
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

			setOpt({
				type: 'search',
				count: 24,
				tag: result,
			});

			endLoading();
		}
	};

	useEffect(() => {
		dispatch({ type: types.GALLERY.start, opt });
	}, [opt]);

	useEffect(() => {
		if (gallery.length !== 0) endLoading();
	}, [gallery]);

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
						{gallery.map((item, index) => {
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
				{gallery.length !== 0 ? (
					<>
						<img
							src={`https://live.staticflickr.com/${gallery[index].server}/${gallery[index].id}_${gallery[index].secret}_b.jpg`}
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
