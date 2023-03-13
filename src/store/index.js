// 1. продмууємо струкутуру стори
/**
 * {
 * courses: [{
 *  id: string,
 *  title: string,
 *  description: string,
 *  creationDate: string,
 *  duration: number
 *  authors: [string, string]
 * }, {}, {}]
 * }
 */

//2. продумуємо екшени
/**
 * Додавання курсу courses/added
 * Видалення курсу courses/deleted
 */

// 3. Створюємо редюсер
// 4. створюємо стору(store)

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { coursesReducer } from './courses/reducer';
import { authorReducer } from './authors/slice';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		courses: coursesReducer,
		authors: authorReducer,
	})
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);
