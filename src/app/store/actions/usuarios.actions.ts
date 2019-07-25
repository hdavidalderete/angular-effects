import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';


export const CARGAR_USUARIOS = '[Usuarios] Cargar Usuarios';

export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar Usuarios FAIL';

export const CARGAR_USUARIOS_SUCCES = '[Usuarios] Cargar Usuarios Succes';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;
    constructor(public payload: any ) {
    }
}

export class CargarUsuariosSucces implements Action {
    readonly type = CARGAR_USUARIOS_SUCCES;
    constructor(public usuarios: User[] ) {
    }
}

export type usuariosAcciones = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSucces;
