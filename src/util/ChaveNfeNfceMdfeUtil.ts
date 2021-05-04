export default class ChaveNfeNfceMdfeUtil {

    private arrumar(chave: string): string[] {


        chave = chave.replace(/([^0-9])/g, '');
        chave = chave.trim()
        const chaveArray: string[] = chave.split('');

        return chaveArray

    }

    private calcularChave(chaveArray: string[]) {

        let somatorioDvMod: number = 0
        let dv: number = 4
        for (let i: number = 0; i < chaveArray.length - 1; i++) {

            somatorioDvMod = somatorioDvMod + (Number(chaveArray[i]) * dv)
            if (dv > 2) {
                dv = dv - 1
            } else {
                dv = 9
            }
        }

        somatorioDvMod = 11 - (somatorioDvMod % 11)

        if (somatorioDvMod > 9) {
            somatorioDvMod = 0
        }

        return somatorioDvMod

    }

    private validarChave(chaveArray: string[]) {

        let somatorioDvMod: number = this.calcularChave(chaveArray)

        if (somatorioDvMod === Number(chaveArray[43])) {

            return { validacao: true, somatorioDvMod, Chave: chaveArray.join("") }

        } else {
            return { validacao: false, somatorioDvMod }
        }

    }

    infoChave(chave: string) {

        chave = chave.replace(/([^0-9])/g, '');
        chave = chave.trim()

        let codigoEstado: string = chave.substring(0, 2)
        let dataChave: string = chave.substring(2, 6)
        let cnpjEmitente: string = chave.substring(6, 20)
        let modeloChave: string = chave.substring(20, 22)
        let serie: string = chave.substring(22, 25)
        let numeroChave: string = chave.substring(25, 34)
        let emissao: string = chave.substring(34, 35)
        let codigo: string = chave.substring(35, 43)
        let dv: string = chave.substring(43, 44)

        return {
            chave,
            codigoEstado,
            dataChave,
            cnpjEmitente,
            modeloChave,
            serie,
            numeroChave,
            emissao,
            codigo,
            dv
        }

    }

    criarChave(chave: string) {
        let arrumar = this.arrumar(chave)

        if (arrumar.length === 43) {
            arrumar.push("0")
            let calcularChave: number = this.calcularChave(arrumar)
            arrumar[43] = String(calcularChave)
            const validado: string = arrumar.join("")
            return validado
        }else{
            return "Erro A gerar DiGito Vetificador!"
        }


    }



    validar(chave: string) {

        let arrumar = this.arrumar(chave)
let validarChave = this.validarChave(arrumar)
return validarChave

    }


}