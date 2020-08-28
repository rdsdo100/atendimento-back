import {MigrationInterface, QueryRunner} from "typeorm";

export class Inserts1598098413249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        
        insert into tipo_usuarios (id, tipo_usuario) values
                                                         (1 , 'Adminstrador'),
                                                         (2 , 'Suporte'),
                                                         (3 , 'Convidado');
                                                         
        insert into usuarios (id, nome_usuario, matricula_usuario, email, senha, bloqueio_usuario, tipo_usuarios_id_fk) values 
    (1 ,   'root' , '1' , 'root@hotmail.com' , 'toor' , false , 1) ;
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
