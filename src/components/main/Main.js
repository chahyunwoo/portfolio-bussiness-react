import Header from '../common/Header';
import Visual from './Visual';
import RoomInfo from './RoomInfo';
import News from './News';
import Pics from './Pics';
import Videos from './Videos';

import Anime from '../../class/anime.js';

import { useRef, useEffect, useState } from 'react';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);

	const [index, setIndex] = useState(0);
	const [num, setNum] = useState(0);
	const [scrolled, setScrolled] = useState(0);

	const getPos = () => {
		const secs = main.current.querySelectorAll('.myScroll')
		pos.current = [];

		for (const sec of secs) pos.current.push(sec.offsetTop)
	}
	// console.log(pos.current)

	const activation = () => {
		const base = 100
		const scroll = window.scrollY
		setScrolled(scroll)

		const secs = main.current.querySelectorAll('.myScroll')

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (let i = 0; i < secs.length; i++) {
				}
				secs[0].classList.add('on')
				secs[idx + 1].classList.add('on')
			}
		})
	}

	useEffect(() => {
		const secs = main.current.querySelectorAll('.myScroll')
		setNum(secs.length)
		getPos();

		window.addEventListener('resize', getPos)
		window.addEventListener('scroll', activation)

		return () => {
			window.removeEventListener('resize', getPos)
		window.removeEventListener('scroll', activation)
		}
	}, [])

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[index],
			duration: 500,
		})
	}, [index])

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<RoomInfo scrolled={scrolled} start={pos.current[1]}/>
      <News />
      <Pics />
      <Videos />
		</main>
	);
}

export default Main;
