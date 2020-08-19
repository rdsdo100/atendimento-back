import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTable1597449485726 implements MigrationInterface {
    name = 'CreateTable1597449485726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tipo-usuario" ("id" SERIAL NOT NULL, "tipo-usuario" character varying NOT NULL, CONSTRAINT "PK_73169ce6e96dddf6172cdaa1e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nome_usuario" character varying NOT NULL, "matricula_usuario" character varying, "email" character varying NOT NULL, "senha" character varying NOT NULL, "bloqueio_usuario" boolean NOT NULL DEFAULT false, "tipo_usuarios_id_fk" integer, CONSTRAINT "UQ_c13685952e5dbfc1db3713449d9" UNIQUE ("nome_usuario"), CONSTRAINT "UQ_d543cd17611a1361dcde8fec940" UNIQUE ("matricula_usuario"), CONSTRAINT "UQ_446adfc18b35418aac32ae0b7b5" UNIQUE ("email"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuario-empresa" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "empresa_id_fk" integer, CONSTRAINT "PK_af22bec2e30f5ec0d7b9dd35428" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "empresas" ("id" SERIAL NOT NULL, "cod_empresa" character varying NOT NULL, "razao_empresa" character varying NOT NULL, "fantasia-empresa" character varying NOT NULL, CONSTRAINT "UQ_8badb4b28afd7868ffe7f9327d1" UNIQUE ("cod_empresa"), CONSTRAINT "PK_ce7b122b37c6499bfd6520873e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
        CREATE TABLE "atendimentos" ("id" SERIAL NOT NULL,
         "descricao_atendimento" character varying NOT NULL,
          "data_cadastro" TIMESTAMP NOT NULL,
          pendente              boolean default true not null,
           "usuarios_id_fk" integer, 
           "empresas_id_fk" integer,
            CONSTRAINT "PK_80a70d057e68924b970871d9089" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_631ea46167dafea39a8da2a1877" FOREIGN KEY ("tipo_usuarios_id_fk") REFERENCES "tipo-usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuario-empresa" ADD CONSTRAINT "FK_be07dab87037808997a5902ded4" FOREIGN KEY ("empresa_id_fk") REFERENCES "empresas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "atendimentos" ADD CONSTRAINT "FK_ebce9436d308bd6c70d870e09dc" FOREIGN KEY ("usuarios_id_fk") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "atendimentos" ADD CONSTRAINT "FK_a79ae763df76c577e801bd50572" FOREIGN KEY ("empresas_id_fk") REFERENCES "empresas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "atendimentos" DROP CONSTRAINT "FK_a79ae763df76c577e801bd50572"`);
        await queryRunner.query(`ALTER TABLE "atendimentos" DROP CONSTRAINT "FK_ebce9436d308bd6c70d870e09dc"`);
        await queryRunner.query(`ALTER TABLE "usuario-empresa" DROP CONSTRAINT "FK_be07dab87037808997a5902ded4"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_631ea46167dafea39a8da2a1877"`);
        await queryRunner.query(`DROP TABLE "atendimentos"`);
        await queryRunner.query(`DROP TABLE "empresas"`);
        await queryRunner.query(`DROP TABLE "usuario-empresa"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "tipo-usuario"`);
    }

}
