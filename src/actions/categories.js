/**
 * Created by sang on 12/19/16.
 */
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadCategoryListRe: null,
  loadCategoryListSc: ['categories'],
  loadCategoryListEr: ['error'],
});

export const CategoryTypes = Types;
export default Creators;
