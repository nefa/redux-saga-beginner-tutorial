import { delay } from 'redux-saga'
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { fetch1, fetch2 } from './mocks';

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
	// const postRequest = yield call(request, requestURL, {
	// 	method: 'POST',
	// });

	try {
		const data1 = yield call(fetch1);
		console.log("data1",data1);
		yield put({ type: 'FETCH_1', data: data1});

		const data = yield call(fetch2, data1.oldUrl);
		console.log("data2", data);
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