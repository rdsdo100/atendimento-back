import {Joi} from "celebrate";


export  const  atendimentoVerification =
    {
        body: Joi.object().keys({
            id: Joi.number().required(),
        })
    }

export const paramsVerification ={abortEarly:false}





