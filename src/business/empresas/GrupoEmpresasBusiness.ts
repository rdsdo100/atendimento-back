import { listGruoEmpresasRepository } from "../../repository/grupoEmpresasRepository"

export default class GrupoEmpresasBusiness {


 /*   async cadastrarEmpresas(empresa: Empresas): Promise<any> {


        const empresasSalvo = await insertEmpresasRepository(empresa)
        return empresasSalvo
    }*/

    async listarGrupoEmpresas() {

        const retornoListEmpresas = await listGruoEmpresasRepository()
        return retornoListEmpresas
    }

   /* async updateEmpresa(empresa: Empresas): Promise<any> {

        const empresaUpdate = await updateEmpresaRpository(empresa)
        return empresaUpdate

    }

    async deletarAtendimentos(idEmpresa: number, idUsuario: number) {
        const empresaDelete = new Empresas()
        const usuariosDelete = new Usuarios()
        const grupoUsuariosDelete = new GrupoUsuarios()
        const empresa: any = await buscarEmpresaIdRepository(idEmpresa)
        const usuarios: any = await buscarUsuarioGrupoUsuarioId(idUsuario)

        empresaDelete.id = empresa.id
        usuariosDelete.id = usuarios.id
        grupoUsuariosDelete.id = usuarios.grupoUsuariosIdFK.id
        usuariosDelete.grupoUsuariosIdFK = grupoUsuariosDelete

        if (grupoUsuariosDelete.id <= 2) {

            if (empresaDelete.id === idEmpresa) {
               
                await deleteIdEmpresaRpository(idEmpresa)

                return 'Empresa Deletada!'
            } else {
                return `Empresa ${idEmpresa}, não deletada!`
            }
        } else {

            return "Não permitido!"

        }

    }*/
}