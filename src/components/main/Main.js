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

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<RoomInfo />
      <News />
      <Pics />
      <Videos />
		</main>
	);
}

export default Main;
