import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';


export const CARGAR_USUARIO = '[Usuario] Cargar Usuarios';

export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar Usuarios FAIL';

export const CARGAR_USUARIO_SUCCES = '[Usuario] Cargar Usuarios Succes';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;
    constructor(public id: string) {
    }
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;
    constructor(public payload: any) {
    }
}

export class CargarUsuarioSucces implements Action {
    readonly type = CARGAR_USUARIO_SUCCES;
    constructor(public usuario: User) {
    }
}

export type usuarioAcciones = CargarUsuario | CargarUsuarioFail | CargarUsuarioSucces;
