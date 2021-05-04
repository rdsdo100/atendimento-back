import ChaveNfeNfceMdfeUtil from "../../util/ChaveNfeNfceMdfeUtil"

export default class ValidacaoChaveBusiness {

    readonly chaveNfeNfceMdfeUtil = new ChaveNfeNfceMdfeUtil()

    validarChave(chave : string){

const  retorno  = this.chaveNfeNfceMdfeUtil.validar(chave)

return retorno

    }
}