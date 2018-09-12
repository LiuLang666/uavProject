import {CHANGE_LOGIN ,CHANGE_ROUTERASS} from './types';
export default {
    CHANGE_LOGIN(state){
        state.login = true;
    },
    CHANGE_ROUTERASS(state){
        state.routerAss= true
    }
}
