import {getManager} from 'typeorm';
import { Usuarios } from '../entity/Usuarios';
import {Atendimentos} from "../entity/Atendimentos";




const buscarAtendimentoUsuarioRepository = async (idUsuario: number) => {

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

const updateAtendimentosRepository = async (usuarios: Usuarios) => {
    const usuarioRepository = getManager();
};

const deleteIdRepository = async (idUsuario: number) => {};




export {

    insertAtendimentoRepository
};
