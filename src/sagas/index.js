import { takeEvery, put } from 'redux-saga/effects';

//worker saga
function* workerSaga() {
  console.log('Hey from worker');
  yield put({ type: 'ACTION_FROM_WORKER' });
}

//watcher saga
function* rootSaga() {
  yield takeEvery('HELLO', workerSaga)
};

//watcher saga -> listens for an action -> will then invoke worker saga

export default rootSaga;