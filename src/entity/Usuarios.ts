import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Atendimentos} from "./Atendimentos";
import {JoinColumn, ManyToOne} from "typeorm/index";
import {TipoUsuario} from "./TipoUsuario";

@Entity({name: "usuarios"})
export class Usuarios {

    @PrimaryGeneratedColumn({type: "integer", name: "id"})
    id: number

    @Column({unique: true, name: "nome_usuario"})
    nomeUsuario: string

    @Column({unique: true, name: "matricula_usuario", nullable: true})
    matriculaUsuario: string

    @Column({unique: true})
    email: string

    @Column()
    senha: string

    @Column({name: "bloqueio_usuario", type: 'boolean', default: false})
    bloqueioUsuario: boolean

    @OneToMany(() => Atendimentos, (atendimentos) => atendimentos.usuariosIdFk)
    atendimentos: Atendimentos[];

    @ManyToOne(() => TipoUsuario, (tipoUsuarios) => tipoUsuarios.tipoUsuario )
    @JoinColumn([{name: "tipo_usuarios_id_fk", referencedColumnName: "id"}])
    tipoUsuarioIdFk: TipoUsuario

}

