import { takeEvery } from 'redux-saga/effects';

import { IMAGES } from '../constants';

//worker saga
function* handleImagesLoadSaga() {
  yield console.log('fetching images from unsplash');
}

//watcher saga
function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoadSaga);

};

//watcher saga -> actions -> worker saga
export default rootSaga;



//takeEvery will run in any sequence / order

//take and then call - is blocking