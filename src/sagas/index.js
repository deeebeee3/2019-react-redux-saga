import { takeEvery, put, take, call } from 'redux-saga/effects';

//worker saga
function* workerSaga() {
  console.log('logging in from worker');
  yield put({ type: 'ACTION_FROM_WORKER' });
}

//watcher saga
function* rootSaga() {
  //yield takeEvery('LOGIN', workerSaga)

  yield take('LOGIN');
  yield call(workerSaga);
};

//watcher saga -> listens for an action -> will then invoke worker saga

export default rootSaga;