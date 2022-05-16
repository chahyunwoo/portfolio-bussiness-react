import { combineReducers } from 'redux';

const roomsReducer = (state = { rooms: [] }, action) => {
	switch (action.type) {
		case 'SET_ROOMS':
			return { ...state, rooms: action.payload };

		default:
			return state;
	}
};

const galleryReducer = (state = { gallery: [] }, action) => {
	switch (action.type) {
		case 'SET_GALLERY':
			return { ...state, gallery: action.payload };

		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case 'SET_YOUTUBE':
			return { ...state, youtube: action.payload };

		default:
			return state;
	}
};

const reducers = combineReducers({
	roomsReducer,
	galleryReducer,
	youtubeReducer,
});

export default reducers;
