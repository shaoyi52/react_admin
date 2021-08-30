import { AUTH_CHANGE, PERMISSION_CHANGE,CURRENT_CHANGE } from './actionTypes'
import { handleActions } from 'redux-actions' //简化redux的使用

const defaultState={
	authed:false,
	permissionList:[
		{
            path: '/user/oneTen/one',
            pathName:'oneTen',
            name:'1到10',
            component:One,
            icon:'pie-chart'
        }
	],
	currentList:[],
    avatar:'',
    name:''
}

export const statusReducer=handleActions(

)

export default statusReducer


// export default (state = defaultState, action) => {
//     if(action.type === AUTH_CHANGE){
//         const newState = JSON.parse(JSON.stringify(state))
//         newState.authed = action.authStatus
//         return newState;
//     }

//     return state;
// };