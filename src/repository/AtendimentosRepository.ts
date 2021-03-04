import {createQueryBuilder, getManager} from 'typeorm';
import { Usuarios } from '../entity/Usuarios';
import {Atendimentos} from "../entity/Atendimentos";




const buscarAtendimentoUsuarioRepository = async (idUsuario: number): Promise<any> => {

    let retornoAtendimento : any

    retornoAtendimento = await createQueryBuilder("Atendimentos" )
        .leftJoinAndSelect('Atendimentos.empresasIdFK' , 'empresaId')
        .leftJoinAndSelect('Atendimentos.usuariosIdFK' , 'usuarioId')
        .where('usuarioId.id = :id and Atendimentos.dataAtendimento = :data' , {id: idUsuario, data: new Date()} )
        .getMany()

    return retornoAtendimento


};

const insertAtendimentoRepository = async (atendimento: Atendimentos)=>{

    const insertAtendimento = getManager()

    const atendimentosalvo = await insertAtendimento.save(Atendimentos , atendimento)
    return atendimentosalvo

}

const listAtendimentosRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Usuarios);
};

const updateAtendimentosRepository = async () => {
    const usuarioRepository = getManager();
};

const deleteIdRepository = async (idAtendimento: number) => {};




export {

    insertAtendimentoRepository,
    buscarAtendimentoUsuarioRepository,
    listAtendimentosRepository,
    updateAtendimentosRepository,
    deleteIdRepository

};
