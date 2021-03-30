
import { ContatosPessoas } from "../../entity/ContatosPessoas";
import { ContatosTelefones } from "../../entity/ContatosTelefones";
import ContatosRepository from "../../repositoryDb/ContatosRepository";

export default class ContatosBusiness {

    readonly contatosTelefones = new ContatosTelefones
    readonly contatosPessoas = new ContatosPessoas

    readonly contatosRepository = new ContatosRepository

    async cadastrarContatos(contatosPessoas: ContatosPessoas, contatosTelefones: ContatosTelefones): Promise<any> {

        const resposta = await this.contatosRepository.insertContatosRepository(contatosPessoas, contatosTelefones)
        return resposta

    }

    async updateContatos(): Promise<any> { }

    async deletarContatos() { }



}