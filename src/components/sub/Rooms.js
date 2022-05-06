import { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../common/Layout';

const path = process.env.PUBLIC_URL;

function Rooms() {
	const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get(`${path}/DB/rooms.json`).then((json) => {
      setRooms(json.data.rooms)
    })
  }, [])

	return (
    <Layout name={'rooms'} bgImage={`${path}/images/roomsBg.jpg`}>
      <ul className="roomsList">
        {rooms.map((room, index) => {
          return (
            <li key={index}>
              <div className="room">
                <div className="pic">
                <img src={`${path}/images/${room.pic}`} alt={room.title} />
                </div>
                <div className="desc">
                  <h2>{room.title}</h2>
                  <p>{room.desc}</p>
                  <p>{room.limit}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
		</Layout>
	);
}

export default Rooms;
