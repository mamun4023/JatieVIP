import { applyMiddleware, legacy_createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { storage } from '@/storage';
import { rootReducer } from '@/reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'status'],
};

export const store = legacy_createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
