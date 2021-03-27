import { createQueryBuilder } from "typeorm";

export default class LoginRepository{

async buscarUsuarioLoginRepository (nomeUsuario: string) {

    const  user = await createQueryBuilder('Usuarios')
         .leftJoinAndSelect('Usuarios.grupoUsuariosIdFK' , 'usuarios')
         .where('nome_usuario = :nome' , {nome : nomeUsuario})
         .getOne()
 
     return user
 
 
 };
 
 
}