import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';//中间件可以帮助在 Redux 应用中实现异步性,dispatch() 方法的封装器
import reducer from './reducer';

