import axios from 'axios';

const path = process.env.PUBLIC_URL;

export const fetchGallery = async (opt) => {
	const key = 'ff6e2e626690eec0a2ef7cf56ffec326';
	const num = opt.count;
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';

	let url = '';

	if (opt.type === 'search') {
		url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&tags=${opt.tag}`;
	}
	if (opt.type === 'user') {
		url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&user_id=${opt.user}`;
	}

	return await axios.get(url);
};

export const fetchYoutube = async () => {
	const key = 'AIzaSyAdo3TEXjvTi-2C_p9Z8zgbQD3uCz_JnAs';
	const playlistId = 'PLdHIHMgBSgjLGDg3SJwV_MdhGnap-xuXg';
	const num = 6;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	return await axios.get(url);
};

export const fetchRooms = async () => {
	const url = `${path}/DB/rooms.json`;

	return await axios.get(url);
};
