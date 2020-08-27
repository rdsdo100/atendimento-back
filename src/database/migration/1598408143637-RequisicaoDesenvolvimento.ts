import {MigrationInterface, QueryRunner} from "typeorm";

export class RequisicaoDesenvolvimento1598408143637 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        create table requisicao_desenvolvimento (
  id serial primary key ,
  descricao varchar not null ,
  data_cadastro date not null ,
  pendente boolean not null  default true,
  data_encerramento: date,
  data_previsao: date,
  atenimento_id_fk int,
  constraint atendimentos_requisicao_desenvolvimento foreign key (atenimento_id_fk)
                                        references atendimentos(id)

);


        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        ALTER TABLE "requisicao_desenvolvimento" DROP CONSTRAINT atendimentos_requisicao_desenvolvimento`
        );

        await queryRunner.query(
            `DROP TABLE "requisicao_desenvolvimento"`
        );



    }

}
