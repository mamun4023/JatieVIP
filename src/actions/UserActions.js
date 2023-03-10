import { UserController } from '@/controllers';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginError = error => ({
  type: TYPES.LOGIN_ERROR,
  payload: { error },
});

const loginSuccess = user => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: { user },
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});

export const login = (username, password) => async dispatch => {
  dispatch(loginRequest());
  try {
    const user = await UserController.login(username, password);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => async dispatch => {
  try {
    await UserController.logout();
  } finally {
    dispatch(clearStore());
  }
};


// just for development 
const adminUserRequest = (data)=>{
  return {
    type : 'Admin',
    payload : data
  }
}
const FreeUserRequest = (data)=>{
  return {
    type : 'Free',
    payload : data
  }
}
const VipUesrRequest = (data)=>{
  return {
    type : 'VIP',
    payload : data
  }
}

export const ChooseUser = (data)=>{
   return (dispatch)=>{
      if(data ==  'Admin'){
        dispatch(adminUserRequest(data))
      }
      if(data == 'Free'){
        dispatch(FreeUserRequest(data))
      }

      if(data == 'VIP'){
        dispatch(VipUesrRequest(data))
      }
   }
}
