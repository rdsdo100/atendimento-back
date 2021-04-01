import { createQueryBuilder, getConnection } from 'typeorm';
import { ContatosPessoas } from '../entity/ContatosPessoas';
import { ContatosTelefones } from '../entity/ContatosTelefones';
import { PessoasTelefones } from '../entity/PessoasTelefones';

export default class ContatosRepository {

    readonly pessoasTelefones = new PessoasTelefones
    readonly contatoPessoas = new ContatosPessoas()
    readonly contatosTeletones = new ContatosTelefones()

    async insertContatosRepository(contatosPessoas: ContatosPessoas,
        contatosTelefones: ContatosTelefones,

    ) {

        let salverPessoasTelefones
        let verificarContatosTelefones
        let verificarContatosPessoas

        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            verificarContatosTelefones = await queryRunner.manager.findOne(ContatosTelefones, { telefone: contatosTelefones.telefone });
            verificarContatosPessoas = await queryRunner.manager.findOne(ContatosPessoas, { nome: ContatosPessoas.name });

            if (!verificarContatosPessoas && !verificarContatosTelefones) {

                const salvarContatosPessoas = await queryRunner.manager.save(ContatosPessoas, contatosPessoas)
                const salvarContatosTelefones = await queryRunner.manager.save(ContatosTelefones, contatosTelefones)
                this.pessoasTelefones.contatosTelefonesIdFK = salvarContatosTelefones
                this.pessoasTelefones.contatosPessoasIdFK = salvarContatosPessoas
                salverPessoasTelefones = await queryRunner.manager.save(PessoasTelefones, this.pessoasTelefones)

            }

            await queryRunner.commitTransaction();
        } catch (err) {
            console.log(err);
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }

        return salverPessoasTelefones
    };



    async insertContatosTelefoneRepository(contatosPessoas: ContatosPessoas,
        contatosTelefones: ContatosTelefones,

    ) {

        let salverPessoasTelefones
        let verificarContatosTelefones
        let verificarContatosPessoas

        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            verificarContatosTelefones = await queryRunner.manager.findOne(ContatosTelefones, { telefone: contatosTelefones.telefone });
            verificarContatosPessoas = await queryRunner.manager.findOne(ContatosPessoas, { nome: ContatosPessoas.name });

            if (verificarContatosPessoas && !verificarContatosTelefones) {

                
                const salvarContatosTelefones = await queryRunner.manager.save(ContatosTelefones, contatosTelefones)
                this.pessoasTelefones.contatosTelefonesIdFK = salvarContatosTelefones
                this.pessoasTelefones.contatosPessoasIdFK = contatosPessoas
                salverPessoasTelefones = await queryRunner.manager.save(PessoasTelefones, this.pessoasTelefones)

            }

            await queryRunner.commitTransaction();
        } catch (err) {
            console.log(err);
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }

        return salverPessoasTelefones
    };

    async buscarAllContatos(){

        let retornoAtendimento: any

        try {
           /* retornoAtendimento = await createQueryBuilder("PessoasTelefones")
            .leftJoinAndSelect('PessoasTelefones.contatosTelefonesIdFK', 'ct')
                .leftJoinAndSelect('PessoasTelefones.contatosPessoasIdFK', 'cp')
            
              //  .leftJoinAndSelect('PessoasTelefones', 'usuarioId')
             // .getQuery() 
              .getMany()
             */   
            

              retornoAtendimento = await createQueryBuilder("ContatosPessoas" , "cp")
            .leftJoinAndSelect('', 'ct')
               // .leftJoinAndSelect('PessoasTelefones.contatosPessoasIdFK', 'cp')
            
              //  .leftJoinAndSelect('PessoasTelefones', 'usuarioId')
             // .getQuery() 
              .getMany()



            return retornoAtendimento
        } catch (e) {
            return e
        }

    }



}

