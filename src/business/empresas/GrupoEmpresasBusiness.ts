
import GrupoEmpresasRepository from "../../repositoryDb/GrupoEmpresasRepository"

export default class GrupoEmpresasBusiness {

    readonly grupoEmpresasRepository = new GrupoEmpresasRepository

    async listarGrupoEmpresas() {
    
    const retornoListEmpresas = await this.grupoEmpresasRepository.listGruoEmpresasRepository()
        return retornoListEmpresas
    }

}