import {createQueryBuilder, getManager} from 'typeorm';
import { Usuarios } from '../entity/Usuarios';


const insertUsuarioRpository = async(usuario: Usuarios) => {

    const usuarioRepository = getManager();
    return usuarioRepository.save(Usuarios, usuario);

}

const buscarUsuarioRepository = async (nomeUsuario: string) => {

   const  user = await createQueryBuilder('Usuarios')
        .leftJoinAndSelect('Usuarios.grupoUsuariosIdFK' , 'usuarios')
        .where('nome_usuario = :nome' , {nome : nomeUsuario})
        .getOne()

    return user


};


const buscarUsuarioRepositoryAll = async () => {

    const  user = await createQueryBuilder('Usuarios')
         .leftJoinAndSelect('Usuarios.grupoUsuariosIdFK' , 'usuarios')
         .getMany()
 
     return user
 
 
 };

const buscarUsuarioIdRepository = async (idUsuario: number) => {
   
    const usuarioRepository = getManager();
    return usuarioRepository.findOne(Usuarios, idUsuario);
};


const buscarUsuarioGrupoUsuarioId = async (idUsuario: number) =>{
    
    const  user = await createQueryBuilder('Usuarios')
    .leftJoinAndSelect('Usuarios.grupoUsuariosIdFK' , 'grupoUsuarios')
    .where('Usuarios.id = :id' , {id : idUsuario })
    .getOne()

return user
}

const listUsuarioRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Usuarios);
};

const updateUsuarioRepository = async (usuarios: Usuarios) => {
    const usuarioRepository = getManager();
    return await usuarioRepository.update(Usuarios ,usuarios.id , usuarios)
};

const deleteUsuarioIdRepository = async (idUsuario: number) => {
   
    const usuarioRepository = getManager();

    try{

const atendimentoUsuario:any = await createQueryBuilder("Atendimentos" )
.leftJoin('Atendimentos.empresasIdFK' , 'empresaId')
.leftJoin('Atendimentos.usuariosIdFK' , 'usuarioId')
.where('usuarioId.id = :id' , {id: idUsuario} )
.getOne()

if(!atendimentoUsuario.id){
    return await usuarioRepository.delete(Usuarios , idUsuario);
}else{
    return "Já existe Atendimentos para esse usuario!"
}

       
    }catch(e){

    }


};

const buscarUsuariosRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Usuarios);
};



export {
    buscarUsuarioRepository,
    buscarUsuarioIdRepository,
    listUsuarioRepository,
    updateUsuarioRepository,
    deleteUsuarioIdRepository,
    buscarUsuariosRepository,
    insertUsuarioRpository,
    buscarUsuarioRepositoryAll,
    buscarUsuarioGrupoUsuarioId
};
