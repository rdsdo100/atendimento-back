import { getConnection } from 'typeorm';
import { ContatosPessoas } from '../entity/ContatosPessoas';
import { ContatosTelefones } from '../entity/ContatosTelefones';
import { Empresas } from '../entity/Empresas';
import { PessoasTelefones } from '../entity/PessoasTelefones';

export default class ContatosRepository {


    readonly pessoasTelefones = new PessoasTelefones

    async insertContatosRepository(contatosPessoas: ContatosPessoas,
        contatosTelefones: ContatosTelefones,


    ) {


        let retornoContatos
        let verificarContatosTelefones
        let verificarContatosPessoas

        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            verificarContatosTelefones = await queryRunner.manager.findOne(ContatosTelefones, { telefone: contatosTelefones.telefone });
            verificarContatosPessoas = await queryRunner.manager.findOne(ContatosPessoas, { nome: ContatosPessoas.name });
           
            if (!verificarContatosPessoas || !verificarContatosTelefones) {

                const salvarContatosPessoas = await queryRunner.manager.save(ContatosPessoas, contatosPessoas)
                const salvarContatosTelefones = await queryRunner.manager.save(ContatosTelefones, contatosTelefones)
                this.pessoasTelefones.contatosTelefonesIdFK = salvarContatosTelefones
                this.pessoasTelefones.contatosPessoasIdFK = salvarContatosPessoas
                const salverPessoasTelefones = await queryRunner.manager.save(PessoasTelefones, this.pessoasTelefones)
            
            }

            await queryRunner.commitTransaction();
        } catch (err) {
            console.log(err);
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }

        return;
    };

}

