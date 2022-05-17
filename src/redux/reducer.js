import { combineReducers } from 'redux';
import * as types from './actionType';

const roomsReducer = (state = { rooms: [] }, action) => {
	switch (action.type) {
		case types.ROOMS.start:
			return { ...state };

		case types.ROOMS.success:
			return { ...state, rooms: action.payload };

		case types.ROOMS.error:
			return { ...state, rooms: action.payload };

		default:
			return state;
	}
};

const galleryReducer = (state = { gallery: [] }, action) => {
	switch (action.type) {
		case types.GALLERY.start:
			return { ...state };

		case types.GALLERY.success:
			return { ...state, gallery: action.payload };

		case types.GALLERY.error:
			return { ...state, gallery: action.payload };

		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBE.start:
			return { ...state };

		case types.YOUTUBE.success:
			return { ...state, youtube: action.payload };

		case types.YOUTUBE.error:
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
