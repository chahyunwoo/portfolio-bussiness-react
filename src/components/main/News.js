import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function News() {
	const path = process.env.PUBLIC_URL;

	const getLocalData = () => {
		const data = localStorage.getItem('post');

		const dummyPosts = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(posts));
	}, []);

	return (
		<>
			<section id='news'>
				<div className='inner'>
					<div className='newsBox'>
						<div className='pic'>
							<img src={`${path}/images/mainNewsImg.jpg`} />
						</div>
						<h2>COMMUNITY</h2>
					</div>
					<div className='newsList'>
						<div className='wrap'>
							<h3>RECENT NEWS</h3>
							<Link to='/community'>
								<button className='btnDetail'>
									VIEW COMMUNITY
									<FontAwesomeIcon className='icon' icon={faArrowRightLong} />
								</button>
							</Link>
							<ul>
								{posts.map((post, index) => {
									if (index < 4) {
										return (
											<li key={index}>
												<h2>{post.title}</h2>
												<p>
													{post.content.length > 90
														? `${post.content.substr(0, 90)}...`
														: post.content}
												</p>
											</li>
										);
									}
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default News;
