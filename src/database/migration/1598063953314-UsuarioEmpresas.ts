import {MigrationInterface, QueryRunner} from "typeorm";

export class UsuarioEmpresas1598063953314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      
      create table usuario_empresa (
                                 id serial  not null primary key,
                                 nome varchar not null,
                                 empresa_id_fk integer,
                                 constraint usuario_empresa_empresas foreign key (empresa_id_fk) references empresas(id)

);

      
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        ALTER TABLE usuario_empresa DROP CONSTRAINT usuario_empresa_empresas foreign key`
        );
        await queryRunner.query(
            `DROP TABLE usuario_empresa`
        );


    }

}
