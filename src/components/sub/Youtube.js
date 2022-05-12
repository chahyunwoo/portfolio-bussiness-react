import Layout from '../common/Layout';
import Popup from '../common/Popup';

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Youtube() {
	const path = process.env.PUBLIC_URL;

	const pop = useRef(null);

	const [videos, setVideos] = useState([]);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyAdo3TEXjvTi-2C_p9Z8zgbQD3uCz_JnAs';
		const playlistId = 'PLdHIHMgBSgjLGDg3SJwV_MdhGnap-xuXg';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setVideos(json.data.items);
		});
	}, []);

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

