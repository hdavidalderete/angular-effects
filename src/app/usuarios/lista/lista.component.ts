import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as userAction from '../../store/actions';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: User[] = [];
  loading: boolean;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.obtenerUsuario();
    this.store.dispatch(new userAction.CargarUsuarios());
    this.store.select('usuarios').subscribe(
      user => {
        this.usuarios = user.users;
        this.loading = user.loading;
        this.error = user.error;
      }
    );
  }




}
