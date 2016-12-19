/**
 * Created by sang on 12/19/16.
 */
import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { CategoryTypes as types } from '../actions/categories';
import CategoryApi from '../middleware/CategoryApi';

export function* loadCategoryList() {
  try {
    const response = yield call(CategoryApi.loadCategoryList);
    yield put({ type: types.LOAD_CATEGORY_LIST_SC, response });
  } catch (error) {
    yield put({ type: types.LOAD_CATEGORY_LIST_ER, error });
    throw error;
  }
}

export default function* Category() {
  yield [
    takeLatest(types.LOAD_CATEGORY_LIST_RE, loadCategoryList),
  ]
}
