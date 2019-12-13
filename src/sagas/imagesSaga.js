import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';

import { fetchImages } from '../api';
import { setImages, setError } from '../actions';

const getPage = state => state.nextPage;

//worker
function* handleImagesLoad() {

  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

//watcher
function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;