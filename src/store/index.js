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

import { legacy_createStore as createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { coursesReducer } from './courses/reducer';
import { authorReducer } from './authors/reducer';

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorReducer,
});

export const store = createStore(rootReducer, enhancer);
