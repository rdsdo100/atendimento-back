import { createQueryBuilder } from "typeorm";



const buscarUsuarioLoginRepository = async (nomeUsuario: string) => {

    const  user = await createQueryBuilder('Usuarios')
         .leftJoinAndSelect('Usuarios.grupoUsuariosIdFK' , 'usuarios')
         .where('nome_usuario = :nome' , {nome : nomeUsuario})
         .getOne()
 
     return user
 
 
 };
 
 
