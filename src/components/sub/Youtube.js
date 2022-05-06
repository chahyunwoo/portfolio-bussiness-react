import Layout from '../common/Layout';
// import Popup from '../common/Popup'

import { useEffect, useState } from 'react';
import axios from 'axios';

function Youtube() {
	const [videos, setVideos] = useState([]);

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
		<Layout name={'youtube'}>
			<div className='videosWrap'>
				{videos.map((video, index) => {
					const idx = (index + 1).toString();

					return (
						<article key={index}>
							<h2>{`salt aewol #${
								idx.length < 2 ? idx.padStart(2, '0') : idx
							}`}</h2>
							<div className='pic'>
								<img
									src={video.snippet.thumbnails.medium.url}
									alt={video.snippet.title}
								/>
							</div>
							<div className='desc'>
								<p>{idx.length < 2 ? idx.padStart(2, '0') : idx}</p>
								<span>{video.snippet.publishedAt.split('T')[0]}</span>
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Youtube;
