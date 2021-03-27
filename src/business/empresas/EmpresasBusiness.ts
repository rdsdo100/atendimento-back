
import { Empresas } from "../../entity/Empresas";
import UsuarioRepository from "../../repository/UsuarioRepository";
import { Usuarios } from "../../entity/Usuarios";
import { GrupoUsuarios } from "../../entity/GrupoUsuarios";
import EmpresasRepository from "../../repository/EmpresasRepository";

export default class EmpresasBusiness {

    readonly grupoUsuarioRepostory = new UsuarioRepository
    readonly empresasRepository = new EmpresasRepository


    async cadastrarEmpresas(empresa: Empresas): Promise<any> {


        const empresasSalvo = await this.empresasRepository.insertEmpresasRepository(empresa)
        return empresasSalvo
    }

    async listarEmpresas() {

        const retornoListEmpresas = await this.empresasRepository.listEmpresasRepository()
        return retornoListEmpresas
    }

    async updateEmpresa(empresa: Empresas): Promise<any> {

        const empresaUpdate = await this.empresasRepository.updateEmpresaRpository(empresa)
        return empresaUpdate

    }

    async deletarAtendimentos(idEmpresa: number, idUsuario: number) {
        const empresaDelete = new Empresas()
        const usuariosDelete = new Usuarios()
        const grupoUsuariosDelete = new GrupoUsuarios()
        const empresa: any = await this.empresasRepository.buscarEmpresaIdRepository(idEmpresa)
        const usuarios: any = await this.grupoUsuarioRepostory.buscarUsuarioGrupoUsuarioId(idUsuario)

        empresaDelete.id = empresa.id
        usuariosDelete.id = usuarios.id
        grupoUsuariosDelete.id = usuarios.grupoUsuariosIdFK.id
        usuariosDelete.grupoUsuariosIdFK = grupoUsuariosDelete

        if (grupoUsuariosDelete.id <= 2) {

            if (empresaDelete.id === idEmpresa) {
               
                await this.empresasRepository.deleteIdEmpresaRpository(idEmpresa)

                return 'Empresa Deletada!'
            } else {
                return `Empresa ${idEmpresa}, não deletada!`
            }
        } else {

            return "Não permitido!"

        }

    }
}