/**
 * Created by sang on 12/19/16.
 */
import axios from 'axios';
import env from '../constants/env';

const BASE_URL = env.BASE_URL;

class CategoryApi {
  static loadCategoryList() {
    const url = `${BASE_URL}/categories`;
    return axios.get(url);
  }
}

export default CategoryApi;
