const mongoose = require ('mongoose');

const VouConstruirSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    }, 
   background:{
        type: String,
        required: true
    },
    rodape:{
        type: String
    }, 
    topicos:[
        {
            type:String,
            required: true
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('vouconstruir',  VouConstruirSchema);

const DepoimentoVouConstruirSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    }, 
    foto:{
        type: String,
        required: true
    }, 
    depoimento:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('depoimento',  DepoimentoVouConstruirSchema);

const CategoriaVouConstruirSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    prestadores:[
        {
            id:{
                type:String
            }
            
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('categoria', CategoriaVouConstruirSchema);


const PrestadorSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    categoria:[
        {
            id:{
                type: String
            },
            nota:{
                type: String
            }
            
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('prestador', PrestadorSchema);




const ServicoSchema = new mongoose.Schema({
    nome:{
        type: String,
        
    },
    email:{
        type: String,
        
    },
    telefone:{
        type: String,
        
    },
    endereco:{
        type: String,
        
    },
    data:[
        {
            dia:{
                type: String
            },
            turnos:[
                {
                    manha:{
                        type:Boolean,
                        default: false

                    },
                    tarde:{
                        type:Boolean,
                        default: false

                    },
                    noite:{
                        type:Boolean,
                        default: false

                    }
                    
                }
            ]
            
        }
    ],
    descricao:{
        type: String,
        
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('servico', ServicoSchema);