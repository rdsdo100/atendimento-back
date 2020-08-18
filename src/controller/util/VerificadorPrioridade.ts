

export default class VerificadorPrioridade{


    isUserAdm(tipoUsuario: number){

        if((tipoUsuario !== 1) && (tipoUsuario)){
            return true
        }else {
            return false
        }
    }
}