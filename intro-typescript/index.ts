interface Usuario{
  id: string;
  email: string;
  cargo?: 'funcionario' |'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: Usuario){
  if(usuario.cargo){
    //redirecionar(usuario.cargo);
  }
  //redirecionar para a area do usuario
}


