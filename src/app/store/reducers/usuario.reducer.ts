import { User } from 'src/app/models/user.model';
import * as fromUsuario from '../actions/usuario.action';

export interface AsuarioState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: AsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};


export function usuarioReducer(state = estadoInicial, action: fromUsuario.usuarioAcciones): AsuarioState {
    switch (action.type) {
        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };
        case fromUsuario.CARGAR_USUARIO_SUCCES:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: {...action.usuario}
            };
        case fromUsuario.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url:  action.payload.url
                }
            };
        default: return state;
    }
}
