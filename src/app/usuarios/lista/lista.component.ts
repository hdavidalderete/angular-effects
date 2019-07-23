import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: User[] = [];
  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.usuarioService.getUsers().subscribe(
      data => {
        this.usuarios = data ;
      }
    );
  }

}
