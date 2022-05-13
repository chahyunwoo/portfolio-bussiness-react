import { useEffect, useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faX,
	faPen,
	faTrashCan,
	faCheck,
} from '@fortawesome/free-solid-svg-icons';

import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Community() {
	const path = process.env.PUBLIC_URL;

	const pop = useRef(null);
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

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

	const [posts, setPosts] = useState(getLocalData());
	const [allowed, setAllowed] = useState(true);

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			alert('Write a title and comments');
			return;
		}

		setPosts([
			{ title: input.current.value, content: textarea.current.value },
			...posts,
		]);

		resetPost();
	};

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const enableUpdate = (index) => {
		setAllowed(false);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	const updatePost = (index) => {
		if (!editInput.current.value.trim() || !editTextarea.current.value.trim()) {
			alert('Write a title and comments');
			return;
		}
		setAllowed(true);

		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	const deletePost = (index) => {
		setPosts(posts.filter((_, idx) => idx !== index));
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(posts));
	}, [posts]);

	return (
		<>
			<Layout name={'community'} bgImage={`${path}/images/communityBg.jpg`}>
				<div className='communityVisual'>
					<div className='wrap'>
						<div className='pic'>
							<img src={`${path}/images/communityVisualPic.jpg`} />
						</div>
						<div className='desc'>
							<p className='descTitle'>Small Talk</p>
							<p className='descContent'>
								The first floor of the building had spent a long time without a
								specific purpose, although the luggages were delivered from time
								to time, people had their cups of coffee and made small talks.
								We wish to embody all the possibilities of this space by calling
								it: The First Floor.
							</p>
						</div>
					</div>
				</div>
				<button className='BtnWrite' onClick={() => pop.current.open()}>
					Leave comments
				</button>

				<div className='showBox'>
					{posts.map((post, idx) => {
						return (
							<article key={idx}>
								{post.enableUpdate ? (
									<>
										<div className='editTitle'>
											<input
												type='text'
												defaultValue={post.title}
												ref={editInput}
											/>
											<div className='editBtns'>
												<button
													className='cancel'
													onClick={() => {
														disableUpdate(idx);
													}}>
													<FontAwesomeIcon icon={faX} />
												</button>
												<button
													className='confirm'
													onClick={() => {
														updatePost(idx);
													}}>
													<FontAwesomeIcon icon={faCheck} />
												</button>
											</div>
										</div>
										<div className='editComments'>
											<textarea
												cols='100'
												rows='5'
												defaultValue={post.content}
												ref={editTextarea}></textarea>
										</div>
									</>
								) : (
									<>
										<div className='title'>
											<h2>{post.title}</h2>
											<div className='btns'>
												<button
													className='edit'
													onClick={() => {
														if (allowed) enableUpdate(idx);
													}}>
													<FontAwesomeIcon icon={faPen} />
												</button>
												<button
													className='delete'
													onClick={() => deletePost(idx)}>
													<FontAwesomeIcon icon={faTrashCan} />
												</button>
											</div>
										</div>
										<div className={`comments`}>
											<p>{post.content}</p>
										</div>
									</>
								)}
							</article>
						);
					})}
				</div>
			</Layout>

			<Popup ref={pop}>
				<div className='writeBox'>
					<div className='inputBox'>
						<div className='labelWrap'>
							<label htmlFor='title'>TITLE</label>
						</div>
						<input type='text' name='title' id='title' ref={input} />
					</div>
					<div className='inputBox'>
						<div className='labelWrap'>
							<label htmlFor='comments'>COMMENTS</label>
						</div>
						<textarea
							name='comments'
							id='comments'
							cols='30'
							rows='10'
							ref={textarea}></textarea>
					</div>
					<div className='inputBox'>
						<button className='btnReset' onClick={resetPost}>
							RESET
						</button>
						<button
							className='btnCreate'
							onClick={() => {
								createPost();
								pop.current.close();
							}}>
							CREATE
						</button>
					</div>
					<span
						className='btnClose_community'
						onClick={() => pop.current.close()}>
						<FontAwesomeIcon icon={faX} />
					</span>
				</div>
			</Popup>
		</>
	);
}

export default Community;
