import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity, ManyToOne, JoinColumn, OneToMany
} from "typeorm";
import {GrupoUsuarios} from "./GrupoUsuarios";
import {Atendimentos} from "./Atendimentos";
import { TipoEquipe } from "./TipoEquipe";

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

    @Column()
    ativo: boolean;

    @Column()
    bloqueado: boolean;

    @ManyToOne(() => GrupoUsuarios, (grupoUsuarios) => grupoUsuarios.usuarios )
    @JoinColumn([{ name: 'grupo_usuarios_id_fk', referencedColumnName: 'id' }])
    grupoUsuariosIdFK: GrupoUsuarios;

    
    @ManyToOne(() => TipoEquipe, (tipoEquipe) => tipoEquipe.usuarios )
    @JoinColumn([{ name: 'tipo_equipe_id_fk', referencedColumnName: 'id' }])
    tipoEquipeIdFK: TipoEquipe;

    @OneToMany(() => Atendimentos, (atendimentos) => atendimentos.usuariosIdFK)
    atendimentos: Atendimentos[];
    
}
