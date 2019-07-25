import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromUser from '../../store/actions/usuario.action';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  user: User;
  error: any;
  loading: boolean;
  constructor(
    // obtenemos los datos de la ruta activa
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.router.params.subscribe(
      params => {
        const id = params.id;
        this.store.dispatch(new fromUser.CargarUsuario(id));
      }
    );
    this.store.select('usuario').subscribe(
      user => {
        this.user = user.user;
        this.loading = user.loading;
        this.error = user.error;
      }
    );
  }

}
