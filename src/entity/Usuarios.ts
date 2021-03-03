import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity, ManyToOne, JoinColumn, OneToMany
} from "typeorm";
import {GrupoUsuarios} from "./GrupoUsuarios";
import {Atendimentos} from "./Atendimentos";

@Entity()
export class Usuarios extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nome_usuario', length: 50 })
    nomeUsuario: string;

    @Column({ length: 90, unique: true })
    email: string;

    @Column({ length: 30 })
    senha: string;

    @Column({ length: 30 })
    matricula: string;

    @Column()
    ativo: boolean;

    @Column()
    bloqueado: boolean;

    @ManyToOne(() => GrupoUsuarios, (grupoUsuarios) => grupoUsuarios.usuarios )
    @JoinColumn([{ name: 'grupo_usuarios_id_fk', referencedColumnName: 'id' }])
    grupoUsuariosIdFK: GrupoUsuarios;

    @OneToMany(() => Atendimentos, (atendimentos) => atendimentos.usuariosIdFK)
    atendimentos: Atendimentos[];
    
}
