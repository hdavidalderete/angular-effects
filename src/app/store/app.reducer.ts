import * as reducers from './reducers';
import {  ActionReducerMap } from '@ngrx/store';
export interface AppState {
    usuarios: reducers.AsuariosState;
    usuario: reducers.AsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer,
    usuario: reducers.usuarioReducer
};

