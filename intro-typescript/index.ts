interface Usuario{
  id: string;
  email: string;
}

interface Admnistrador extends Usuario{
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: Usuario | Admnistrador){
  if ('cargo' in  usuario){
    //redirecionar para a área de adm
  }
    //redirecionar para a area de usuário
}


