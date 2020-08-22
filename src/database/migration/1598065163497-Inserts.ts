import {MigrationInterface, QueryRunner} from "typeorm";

export class Inserts1598065163497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        insert into tipo_usuario (id , tipo_usuario) VALUES
                                                      (1 , 'Administrador'),
                                                      (2 , 'Suporte'),
                                                      (3 , 'consvidado');
        
        `                                                      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
