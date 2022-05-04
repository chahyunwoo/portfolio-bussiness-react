import { useEffect, useRef } from 'react';

const path = process.env.PUBLIC_URL;

function Visual() {
	const frame = useRef(null);

  useEffect(() => {
    frame.current.classList.remove('on');
		frame.current.classList.add('on');
  }, [])

	return (
		<figure ref={frame}>
			<img src={`${path}/images/bg.jpg`} alt='' />
		</figure>
	);
}

export default Visual;
