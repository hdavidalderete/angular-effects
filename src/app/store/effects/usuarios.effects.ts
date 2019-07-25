import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromAction from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions, public usuarioService: UsuarioService) {

    }

    // @Effect({ dispatch: false })
    // cargarUsuarios$ = this.actions$.ofTypes(fromAction.CARGAR_USUARIOS)
    //     .pipe(
    //         map(action => {
    //             console.log(action);
    //             return action;
    //         })
    //     );
    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType(fromAction.CARGAR_USUARIOS),
        // swichMap retorna un observable
        switchMap(() => {
            return this.usuarioService.getUsers()
                .pipe(
                    map(user => new fromAction.CargarUsuariosSucces(user)),
                    // catchError espera un observable y lo casteamos con of
                    catchError(err =>  of(new fromAction.CargarUsuariosFail(err)) )
                );
        })
    );

}
