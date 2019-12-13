import { take, call } from 'redux-saga/effects';

import { IMAGES } from '../constants';

//worker saga
function* handleImagesLoadSaga() {
  yield console.log('fetching images from unsplash');
}

//worker saga
function* handleDang() {
  yield console.log('Dang!!!');
}

//watcher saga
function* rootSaga() {
  yield take('DANG');
  yield call(handleDang);
  yield take(IMAGES.LOAD);
  yield call(handleImagesLoadSaga);
};

//watcher saga -> actions -> worker saga
export default rootSaga;