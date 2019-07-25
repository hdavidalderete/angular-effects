import { User } from 'src/app/models/user.model';
import * as fromUsuarios from '../actions/usuarios.actions';

export interface AsuariosState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: AsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export function usuariosReducer(state = estadoInicial, action: fromUsuarios.usuariosAcciones): AsuariosState {
    switch (action.type) {
        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true,
                error: null
            };
        case fromUsuarios.CARGAR_USUARIOS_SUCCES:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [...action.usuarios]
            };
        case fromUsuarios.CARGAR_USUARIOS_FAIL:
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
