import {Reducer} from 'redux';
import AdminConfig from '../../config.tsx';
import {LocalStore} from '@utils';
const SETTINGS_KEY='React-ant-Admin-Settings';

const localSettings=LocalStore.getValue(SETTINGS_KEY)||{}

const defaults={
    fixedHeader:true,

    layout:AdminConfig.layout,

    theme: AdminConfig.theme,

    contentWidth: AdminConfig.contentWidth,

    colorWeak: AdminConfig.colorWeak,

    ...localSettings,
}

const UPDATE_SETTINGS='UPDATE_SETTINGS';

export const updateLayoutSettings=(settings)=>({
    type: UPDATE_SETTINGS,
    payload: settings,
})

const settingsReducer=(
    state=defaults,
    action
    )=>{
        const {type,payload}=action;

        switch(type){
            case UPDATE_SETTINGS:
                LocalStore.setValue(SETTINGS_KEY, payload);
                return {
                    ...payload,
                };
            default:
                return {
                    ...state,
                }                
        }
        
    }

export default settingsReducer;