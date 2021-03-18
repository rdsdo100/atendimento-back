
import {insertEmpresasRepository, listEmpresasRepository} from "../../repository/empresasRepository";
import {Empresas} from "../../entity/Empresas";

export default  class EmpresasBusiness {


    async cadastrarEmpresas(empresa: Empresas) : Promise<any>{

       
        const empresasSalvo = await insertEmpresasRepository(empresa)
        return empresasSalvo
    }


    async listarEmpresas(){

        const retornoListEmpresas = await listEmpresasRepository()
        return retornoListEmpresas
    }
}