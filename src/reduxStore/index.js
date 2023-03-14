// 1 продумати струкутур сховища
// 2 продумаємо екшени
// 3 пишемо редюсер
import { legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';

const store = createStore(reducer);
