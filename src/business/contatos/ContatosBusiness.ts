
import { Atendimentos } from "../../entity/Atendimentos";
import { ContatosPessoas } from "../../entity/ContatosPessoas";
import { ContatosTelefones } from "../../entity/ContatosTelefones";
import { PessoasTelefones } from "../../entity/PessoasTelefones";
import ContatosRepository from "../../repositoryDb/ContatosRepository";




export default class ContatosBusiness {

    readonly contatosTelefones = new ContatosTelefones
    readonly contatosPessoas = new ContatosPessoas
    readonly pessoasTelefones = new PessoasTelefones
    readonly contatosRepository = new ContatosRepository

    async cadastrarContatos(atendimento: Atendimentos): Promise<any> { }

    async updateContatos(atendimento: Atendimentos): Promise<any> { }

    async deletarContatos(idAtendimento: number, idUsuario: number) { }

    

}