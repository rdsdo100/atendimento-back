import { buscarEmpresaIdRepository, insertEmpresasRepository, listEmpresasRepository, updateEmpresaRpository } from "../../repository/empresasRepository";
import { Empresas } from "../../entity/Empresas";
import { buscarAtendimentoIdRepository } from "../../repository/atendimentosRepository";

export default class EmpresasBusiness {


    async cadastrarEmpresas(empresa: Empresas): Promise<any> {


        const empresasSalvo = await insertEmpresasRepository(empresa)
        return empresasSalvo
    }


    async listarEmpresas() {

        const retornoListEmpresas = await listEmpresasRepository()
        return retornoListEmpresas
    }




    async updateEmpresa(empresa: Empresas): Promise<any> {

        const empresaUpdate = await updateEmpresaRpository(empresa)
        return empresaUpdate
    }



    async deletarAtendimentos(idEmpresa: number, idUsuario: number) {
        const empresa = await buscarEmpresaIdRepository(idEmpresa)
        

        





    }
}