import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Usuarios1600782693568 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {



await queryRunner.createTable(
    new Table({


name: 'usuarios',
columns:[
    {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
    },
    {
        name: 'nome_usuario',
        type: 'varchar',
        length: '50',
        isNullable: false,
        isUnique: true,
    },
    {
        name: 'email',
        type: 'varchar',
        length: '90',
        isNullable: false,
        isUnique: true,
    },
    {
        name: 'senha',
        type: 'varchar',
        length: '30',
        isNullable: false,
    },
    
    {
        name: 'ativo',
        type: 'boolean',
        default: true,

    },
    {
        name: 'bloqueado',
        type: 'boolean',
        default: false,
    },  
    {
        name: 'grupo_usuarios_id_fk',
        type: 'int',
    },
    {
        name: 'tipo_equipe_id_fk',
        type: 'int',
    },
]

    })

    
)

await queryRunner.createForeignKey(
    'usuarios',
    new TableForeignKey({
        columnNames: ['grupo_usuarios_id_fk'],
        referencedColumnNames: ['id'],
        referencedTableName: 'grupo_usuarios',
        name: 'usuarios_grupos_usuarios',
    }),
);
await queryRunner.createForeignKey(
    'usuarios',
    new TableForeignKey({
        columnNames: ['tipo_equipe_id_fk'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tipo_equipe',
        name: 'usuarios_tipo_equipe',
    }),
);


     
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

     

    }

}
