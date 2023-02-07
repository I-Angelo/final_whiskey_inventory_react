import { combineReducers } from 'redux';

import { reducer2, reducer1 } from './RootSlice';
// import { reducer1} from './RootSlice';

const combStore = combineReducers({
    reducer2,
    reducer1,

  });

  export default combStore;