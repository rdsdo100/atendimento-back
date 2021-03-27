import { getConnection} from 'typeorm';
import { ContatosPessoas } from '../../entity/ContatosPessoas';
import { ContatosTelefones } from '../../entity/ContatosTelefones';
import { Empresas } from '../../entity/Empresas';
import { PessoasTelefones } from '../../entity/PessoasTelefones';

export default class ContatosRepository{

async insertContatosRepository  (contatosPessoas : ContatosPessoas,
    contatosTelefones:   ContatosTelefones,
    pessoasTelefones: PessoasTelefones,
    empresas: Empresas
    ) {

        let retornoUsuarios;
        let usuarioRetorno;
        let retornoPessoas;
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        try {
         //   usuarioRetorno = await queryRunner.manager.findOne();
    
          //  const buscarPessoas = await queryRunner.manager.findOne();
    
           
              
               // retornoPessoas = await queryRunner.manager.save();
    
              //
               // usuarioRetorno = await queryRunner.manager.save();
    
                //retornoUsuarios = await queryRunner.manager.save(Usuarios, { pessoasIdFK: retornoPessoas });
          
            await queryRunner.commitTransaction();
        } catch (err) {
            console.log(err);
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }
    
        return usuarioRetorno;
    };
    
}

