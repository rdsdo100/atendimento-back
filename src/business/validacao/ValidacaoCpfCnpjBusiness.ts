import ValidacaoCpfCnpjUtil from "../../util/ValidacaoCpfCnpjUtil"

export default class ValidacaoCpfCnpjBusiness {

    readonly validacaoCpfCnpjUtil = new ValidacaoCpfCnpjUtil()




    validarCpfCnpj(cpfCnpj : string){

const  retorno  = this.validacaoCpfCnpjUtil.validar(cpfCnpj)

return retorno

    }
}