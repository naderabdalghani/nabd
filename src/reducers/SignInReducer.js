import {
  FILL_SIGNIN_REDUCER,
  SIGNIN_ATTEMPT,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  RESET_SIGNIN_REDUCER_STATE
} from '../actions/types';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
const INTIAL_STATE = {
  phone: '',
  password: '',
  loading: false,
  userName: '',
  userType: '',
  token: ''
};

signInReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case RESET_SIGNIN_REDUCER_STATE:
      return INTIAL_STATE;
    case FILL_SIGNIN_REDUCER:
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    case SIGNIN_ATTEMPT:
      return {
        ...state,
        loading: true
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userName: payload.userName,
        token: payload.token,
        userType: payload.userType
      };
    case SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'signin',
  storage: storage,
  whitelist: ['phone', 'password', 'userName', 'userType', 'token']
};

export default persistReducer(persistConfig, signInReducer);
