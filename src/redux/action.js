export const setRooms = (room) => {
	return {
		type: 'SET_ROOMS',
		payload: room,
	};
};

export const setGallery = (data) => {
	return {
		type: 'SET_GALLERY',
		payload: data,
	};
};
export const setYoutube = (data) => {
	return {
		type: 'SET_YOUTUBE',
		payload: data,
	};
};
