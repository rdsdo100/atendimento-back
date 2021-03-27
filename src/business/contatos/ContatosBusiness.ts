
import { Atendimentos } from "../../entity/Atendimentos";
import { ContatosPessoas } from "../../entity/ContatosPessoas";
import { ContatosTelefones } from "../../entity/ContatosTelefones";
import { PessoasTelefones } from "../../entity/PessoasTelefones";
import ContatosRepository from "../../repository/ContatosRepository";


export default class ContatosBusiness {

    readonly contatosTelefones = new ContatosTelefones
    readonly contatosPessoas = new ContatosPessoas
    readonly pessoasTelefones = new PessoasTelefones
    readonly contatosRepository = new ContatosRepository

    async cadastrarAtendimentos(atendimento: Atendimentos): Promise<any> { }

    async updateAtendimentos(atendimento: Atendimentos): Promise<any> { }

    async buscarAtendimentosUsuarios(idUsuario: number) { }

    async deletarAtendimentos(idAtendimento: number, idUsuario: number) { }

    async buscarAtendimentosEmpresas() { }

}