
import { Empresas } from "../../entity/Empresas";

import { Usuarios } from "../../entity/Usuarios";
import { GrupoUsuarios } from "../../entity/GrupoUsuarios";
import EmpresasRepository from "../../repositoryDb/EmpresasRepository";
import UsuarioRepository from "../../repositoryDb/UsuarioRepository";


export default class EmpresasBusiness {

    
    


    async cadastrarEmpresas(empresa: Empresas): Promise<any> {

        const empresasRepository = new EmpresasRepository()
        const empresasSalvo = await empresasRepository.insertEmpresasRepository(empresa)
        return empresasSalvo
    }

    async listarEmpresas() {
        const empresasRepository = new EmpresasRepository()
        const retornoListEmpresas = await empresasRepository.listEmpresasRepository()
        return retornoListEmpresas
    }

    async updateEmpresa(empresa: Empresas): Promise<any> {

        const empresasRepository = new EmpresasRepository()
        const empresaUpdate = await empresasRepository.updateEmpresaRpository(empresa)
        return empresaUpdate

    }

    async deletarAtendimentos(idEmpresa: number, idUsuario: number) {
        const empresaDelete = new Empresas()
        const usuariosDelete = new Usuarios()
        const grupoUsuariosDelete = new GrupoUsuarios()
        const empresasRepository = new EmpresasRepository()
        const grupoUsuarioRepostory = new UsuarioRepository
        const empresa: any = await empresasRepository.buscarEmpresaIdRepository(idEmpresa)
        const usuarios: any = await grupoUsuarioRepostory.buscarUsuarioGrupoUsuarioId(idUsuario)

        empresaDelete.id = empresa.id
        usuariosDelete.id = usuarios.id
        grupoUsuariosDelete.id = usuarios.grupoUsuariosIdFK.id
        usuariosDelete.grupoUsuariosIdFK = grupoUsuariosDelete
      
        if (grupoUsuariosDelete.id <= 2) {

            if (empresaDelete.id === idEmpresa) {
               
                await empresasRepository.deleteIdEmpresaRpository(idEmpresa)

                return 'Empresa Deletada!'
            } else {
                return `Empresa ${idEmpresa}, não deletada!`
            }
        } else {

            return "Não permitido!"

        }

    }
}