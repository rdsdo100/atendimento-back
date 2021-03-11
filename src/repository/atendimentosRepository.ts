import {createQueryBuilder, getManager} from 'typeorm';
import {Atendimentos} from "../entity/Atendimentos";

const buscarAtendimentoUsuarioRepository = async (idUsuario: number): Promise<any> => {

    let retornoAtendimento : any

    retornoAtendimento = await createQueryBuilder("Atendimentos" )
        .leftJoinAndSelect('Atendimentos.empresasIdFK' , 'empresaId')
        .leftJoin('Atendimentos.usuariosIdFK' , 'usuarioId')
        .where('usuarioId.id = :id and Atendimentos.dataAtendimento = :data' , {id: idUsuario, data: new Date()} )
        .getMany()

    return retornoAtendimento


};



const buscarAtendimentoIdRepository = async (id: number): Promise<any> => {

    let retornoAtendimento: any
    
    retornoAtendimento = await createQueryBuilder("Atendimentos" )
    .leftJoin('Atendimentos.empresasIdFK' , 'empresaId')
    .leftJoinAndSelect('Atendimentos.usuariosIdFK' , 'usuarioId')
    .where('Atendimentos.id = :id' , {id: id} )
    .getOne()

   delete retornoAtendimento.usuariosIdFK.senha
 
    return retornoAtendimento

};

const insertAtendimentoRepository = async (atendimento: Atendimentos)=>{

    const insertAtendimento = getManager()

    const atendimentosalvo = await insertAtendimento.save(Atendimentos , atendimento)
    return atendimentosalvo

}



const updateAtendimentosRepository = async () => {
    const AtendimentoRepository = getManager();
};

const deleteIdAtendimentoRepository = async (idAtendimento: number) => {
    const AtendimentoRepository = getManager();
   await AtendimentoRepository.delete(Atendimentos , {id: idAtendimento})


};




export {

    insertAtendimentoRepository,
    buscarAtendimentoUsuarioRepository,
    buscarAtendimentoIdRepository,
    updateAtendimentosRepository,
    deleteIdAtendimentoRepository

};
