import { MigrationInterface, QueryRunner } from "typeorm";

export class Inserts1717131433453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.query(`
insert  into grupo_empresas (id , grupo_empresa) values 
(1 , 'all');
`)

        await queryRunner.query(`
insert  into tipo_equipe (id , nome_equipe ) values 
(1 , 'all');
`)

        await queryRunner.query(`
insert  into grupo_usuarios (id , nome ) values 
(1 , 'root');
`)

        await queryRunner.query(`
insert  into usuarios (id, nome_usuario , email , senha , grupo_usuarios_id_fk , tipo_equipe_id_fk) values 
(1 , 'root' , 'email.gmail.com' , '123456' , 1, 1);
`)



    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
