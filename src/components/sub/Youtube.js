import Layout from '../common/Layout';
import Popup from '../common/Popup';

import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Youtube() {
	const path = process.env.PUBLIC_URL;

	const pop = useRef(null);

	const [index, setIndex] = useState(0);

	const videos = useSelector((store) => store.youtubeReducer.youtube)

	return (
		<>
			<Layout name={'youtube'} bgImage={`${path}/images/youtubeBg.jpg`}>
				<div className='videosWrap'>
					{videos.map((video, idx) => {
						const idxTit = (idx + 1).toString();

						return (
							<article
								key={idx}
								onClick={() => {
									pop.current.open();
									setIndex(idx);
								}}>
								<h2>{`salt aewol #${
									idxTit.length < 2 ? idxTit.padStart(2, '0') : idxTit
								}`}</h2>
								<div className='pic'>
									<img
										src={video.snippet.thumbnails.medium.url}
										alt={video.snippet.title}
									/>
								</div>
								<div className='desc'>
									<p>{idxTit.length < 2 ? idxTit.padStart(2, '0') : idxTit}</p>
									<span>{video.snippet.publishedAt.split('T')[0]}</span>
								</div>
							</article>
						);
					})}
				</div>
			</Layout>

			<Popup ref={pop}>
				{videos.length !== 0 ? (
					<>
						<iframe
							src={`https://www.youtube.com/embed/${videos[index].snippet.resourceId.videoId}`}
							frameborder='0'></iframe>
						<span className='btnClose' onClick={() => pop.current.close()}>
							<FontAwesomeIcon icon={faX} />
						</span>
					</>
				) : null}
			</Popup>
		</>
	);
}

export default Youtube;
