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

import { configureStore } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer';
import { authorReducer } from './authors/slice';

export const store = configureStore({
	reducer: {
		courses: coursesReducer,
		authors: authorReducer,
	},
});
