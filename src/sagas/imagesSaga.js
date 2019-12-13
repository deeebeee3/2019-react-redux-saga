import { takeEvery, select } from 'redux-saga/effects';

import { IMAGES } from '../constants';

const getPage = state => state.nextPage;

//worker
function* handleImagesLoad() {
  const page = yield select(getPage);
  console.log('page', page);

}

//watcher
function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;