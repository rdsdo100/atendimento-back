import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "tipo_equipe"})
export class TipoEquipe {
    @PrimaryGeneratedColumn()
    id: number




   @Column( { name: "nome_equipe" ,type: "varchar" , length: "50" , nullable: false , unique: true })
    nomeEquipe: string

}
