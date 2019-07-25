import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromAction from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(private actions$: Actions, public usuarioService: UsuarioService) {

    }

    @Effect()
    cargarUsuario$ = this.actions$.pipe(
        ofType(fromAction.CARGAR_USUARIO),
        // swichMap retorna un observable
        switchMap((accion) => {
            const id = accion['id'];
            return this.usuarioService.getUser(id)
                .pipe(
                    map(user => new fromAction.CargarUsuarioSucces(user)),
                    // catchError espera un observable y lo casteamos con of
                    catchError(err => of(new fromAction.CargarUsuarioFail(err)))
                );
        })
    );

}
