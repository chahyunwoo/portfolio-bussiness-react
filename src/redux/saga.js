import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchGallery, fetchYoutube, fetchRooms } from './api';
import * as types from './actionType'

export function* returnRooms(action) {
	try {
    const response = yield call(fetchRooms);
		yield put({ type: types.ROOMS.success, payload: response.data.rooms });
	} catch (err) {
		yield put({ type: types.ROOMS.error, payload: err });
	}
}

export function* callRooms() {
	yield takeLatest(types.ROOMS.start, returnRooms);
}

export function* returnGallery(action) {
	try {
		const response = yield call(fetchGallery, action.opt);
		yield put({ type: types.GALLERY.success, payload: response.data.photos.photo });
	} catch (err) {
		yield put({ type: types.GALLERY.error, payload: err });
	}
}

export function* callGallery() {
	yield takeLatest(types.GALLERY.start, returnGallery);
}

export function* returnYoutube(action) {
	try {
		const response = yield call(fetchYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.error, payload: err });
	}
}

export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}

export default function* rootSaga() {
	yield all([fork(callGallery), fork(callYoutube), fork(callRooms)]);
}
