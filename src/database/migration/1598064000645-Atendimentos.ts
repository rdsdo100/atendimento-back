import {MigrationInterface, QueryRunner} from "typeorm";

export class Atendimentos1598064000645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      
      create table atendimentos (
                              id serial  not null primary key,
                              descricao_atendimento varchar not null,
                              pendente boolean default true not null,
                              data_cadastro date not null,
                              usuarios_id_fk integer,
                              empresas_id_fk integer,
                              constraint atendimentos_usuarios foreign key (usuarios_id_fk) references usuarios(id),
                              constraint atendimentos_empresas foreign key (empresas_id_fk) references empresas(id)
      );
      `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        ALTER TABLE "atendimentos" DROP CONSTRAINT atendimentos_usuarios`
        );
        await queryRunner.query(`
        ALTER TABLE "atendimentos" DROP CONSTRAINT atendimentos_empresas `
        );
        await queryRunner.query(
            `DROP TABLE "atendimentos"`
        );

    }
}
