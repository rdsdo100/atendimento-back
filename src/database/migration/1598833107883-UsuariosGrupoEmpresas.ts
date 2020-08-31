import {MigrationInterface, QueryRunner} from "typeorm";

export class UsuariosGrupoEmpresas1598833107883 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`

create table usuarios_grupo_empresas (
    id serial primary key ,
    usuario_id_fk int not null ,
    grupo_empresa_id_fk int not null ,
    constraint usuarios_usuario_grupo_empresas foreign key (usuario_id_fk) references usuarios(id),
    constraint usuarios_grupo_empresas_usuario_grupo_empresas foreign key (grupo_empresa_id_fk) references grupo_empressas(id)
);
        
        `)




    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        ALTER TABLE usuarios_grupo_empresas DROP CONSTRAINT usuarios_usuario_grupo_empresas`
        );

        await queryRunner.query(`
        ALTER TABLE usuarios_grupo_empresas DROP CONSTRAINT usuarios_grupo_empresas_usuario_grupo_empresas`
        );

        await queryRunner.query(
            `DROP TABLE usuarios_grupo_empresas`
        );



    }

}
