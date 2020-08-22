import {MigrationInterface, QueryRunner} from "typeorm";

export class TipoUsuarios1598063966680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      
      create table tipo_usuarios (
                              id serial not null primary key,
                              "tipo_usuario" varchar not null
);
      
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(
            `DROP TABLE tipo_usuario`
        );


    }

}
