import { delay } from 'redux-saga'
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { fetch1 } from './mocks';

export function* helloSaga() {
	console.log('the sagaaaa!!');
}

export function* incrementAsync() {
	yield call(delay, 1000);
	yield put({type: 'INCREMENT'});
}

export function* watchIncrementAsync() {
	yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* fetch() {
	// yield put({type: 'FETCH_1'} )
	try {
		const data = yield call(fetch1);
		yield put({ type: 'FETCH_1', data});

	} catch(err) {
		console.error(err);
	}
}

export function* watchFetchData() {
	yield takeLatest('FETCH_REQUESTED', fetch);
}

export default function* rootSaga() {
	yield all([
		helloSaga(),
		watchIncrementAsync(),
		watchFetchData()
	])
}