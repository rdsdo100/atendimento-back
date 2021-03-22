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

const updateAtendimentosRepository = async (atendimento : Atendimentos) => {
    const atendimentoRepositoy = getManager();
    const updateAtendimento = atendimentoRepositoy.update( Atendimentos , atendimento.id, atendimento)
    return updateAtendimento
};

const deleteIdAtendimentoRepository = async (idAtendimento: number) => {
    const atendimentoRepository = getManager();
   await atendimentoRepository.delete(Atendimentos , {id: idAtendimento})


};

const buscaEmpresaAtendimentos = async ()=>{


    const atendimentoRepository = getManager();
    let retornoAtendimento: any
    
    try{
    // retornoAtendimento = await createQueryBuilder("Atendimentos" )
    // .leftJoinAndSelect('Atendimentos.empresasIdFK' , 'empresaId')
    // .groupBy('Atendimentos.empresasIdFK')
    // .getMany()

    retornoAtendimento= await atendimentoRepository.query(`
    select e.codigo_empresa, count(e.codigo_empresa)  from  atendimentos as a
    left join empresas e on e.id = a.empresas_id_fk 
    group by e.codigo_empresa ;`)

   

   
    return retornoAtendimento

    }catch(e){

        return e
    }
    
    
}


export {
    buscaEmpresaAtendimentos,

    insertAtendimentoRepository,
    buscarAtendimentoUsuarioRepository,
    buscarAtendimentoIdRepository,
    updateAtendimentosRepository,
    deleteIdAtendimentoRepository

};
