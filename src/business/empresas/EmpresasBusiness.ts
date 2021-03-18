import { buscarEmpresaIdRepository, insertEmpresasRepository, listEmpresasRepository, updateEmpresaRpository } from "../../repository/empresasRepository";
import { Empresas } from "../../entity/Empresas";
import { buscarUsuarioIdRepository, buscarUsuarioRepository, deleteUsuarioIdRepository } from "../../repository/usuarioRepository";

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
        const empresa: any = await buscarEmpresaIdRepository(idEmpresa)
       // const usuarios: any = await buscarUsuarioIdRepository(idUsuario)



     // if(usuarios?.grupoUsuariosIdFK.id <= 2){
       
     //   if(empresa.id == idEmpresa){
         //  await deleteUsuarioIdRepository(idEmpresa)
          console.log(empresa)
            return 'Empresa Deletada!'
       // }else{
       //     return `Empresa ${idEmpresa}, não deletada!`
       // }
   // }else{
  //      return "Não permitido!"
  //  }
        
    }
}