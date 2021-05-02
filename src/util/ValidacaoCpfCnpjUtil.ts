import e from "express";

export default class ValidacaoCpfCnpjUtil {



    arrumar(cpfCnpj: string): string[] {


        cpfCnpj = cpfCnpj.replace(/([^0-9])/g, '');
        cpfCnpj = cpfCnpj.trim()

        switch (cpfCnpj.length) {
            case 12: {
                cpfCnpj = "00" + cpfCnpj
                break
            }
            case 13: {
                cpfCnpj = "0" + cpfCnpj
                break
            }
            case 9: {
                cpfCnpj = "00" + cpfCnpj
                break
            }
            case 10: {
                cpfCnpj = "0" + cpfCnpj
                break
            }
            default: {
                break
            }

        }

        const cpfCnpjArray: string[] = cpfCnpj.split('');

        return cpfCnpjArray

    }

    separar(cpfCnpjArray: string[]) {

        let resposta
        if (cpfCnpjArray.length === 14) {
            resposta = this.validarCnpj(cpfCnpjArray)
        } else if (cpfCnpjArray.length === 11) {
            resposta = this.validarCpf(cpfCnpjArray)
        } else {

        }

        return resposta
    }

    validarCnpj(cpfCnpjArray: string[]) {

        let dv1: number = 5
        let dv2: number = 6
        let somatorioDv1Mod: number = 0
        let somatorioDv2Mod: number = 0
        let dvFinal: String[]



        for (let i: number = 0; i < cpfCnpjArray.length; i++) {


            if (i <= 11) {

                somatorioDv1Mod = somatorioDv1Mod + (Number(cpfCnpjArray[i]) * dv1)

                if (dv1 > 2) {
                    dv1 = dv1 - 1
                } else {
                    dv1 = 9
                }
            }

            
            if (i <= 12) {
             
                somatorioDv2Mod = somatorioDv2Mod + (Number(cpfCnpjArray[i]) * dv2)

                if (dv2 > 2) {
                    dv2 = dv2 - 1
                } else {
                    dv2 = 9
                }
            }



        }



        somatorioDv1Mod = 11- (somatorioDv1Mod%11) 
        somatorioDv2Mod = 11- (somatorioDv2Mod%11) 

        if(somatorioDv1Mod > 9){
            somatorioDv1Mod = 0
        }
        if(somatorioDv2Mod > 9){
            somatorioDv2Mod = 0
        }





console.log(somatorioDv1Mod , somatorioDv2Mod )















        return "Cnpj"

    }

    validarCpf(cpfCnpjArray: string[]) {
        return "Cpf"
    }

    validar(cpfCnpj: string) {

        let arrumar = this.arrumar(cpfCnpj)
        let separar = this.separar(arrumar)

        return separar

    }


}