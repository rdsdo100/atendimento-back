export default class ValidacaoCpfCnpjUtil {

    arrumar(chave: string): string[] {


        chave = chave.replace(/([^0-9])/g, '');
        chave = chave.trim()
        const chaveArray: string[] = chave.split('');

        return chaveArray

    }

    validarChave(chaveArray: string[]) {

        let dv: number = 4
      
        let somatorioDvMod: number = 0
 
        for (let i: number = 0; i < chaveArray.length; i++) {

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
       
        if (somatorioDvMod === Number(chaveArray[43])) {
           
                return {validacao : true , tipo: "Cnpj" , somatorioDvMod }
            
        } else {
            return {validacao : false , tipo: "Cnpj" ,somatorioDvMod }
        }

    }

    infoChave(){}

    criarChave(){

    }
    getarDv(){}


    validar(cpfCnpj: string) {

        let arrumar = this.arrumar(cpfCnpj)
        
    }


}