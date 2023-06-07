const alunoValidator = {
    nome: {
        required: 'Campo obrigatório!',
        minLength: {
            value: 3,
            message: 'O minimo de caracteres é 3'
        },
        maxLength: {
            value: 10,
            message: 'O máximo caracteres é 10'
        },
    },

    cpf: {
        required: 'Campo obrigatório!',
        minLength: {
            value: 11,
            message: 'O minimo de caracteres é 11'
        },
        maxLength: {
            value: 14,
            message: 'O máximo caracteres é 14'
        },
        pattern: {
            value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            message:"CPF inválido"
        },
    },

    salario: {
        required: 'Campo obrigatório!',
        min: {
            value: 100,
            message: 'O valor minimo é 1000'
        },
        max: {
            value: 10000,
            message: 'O valor máximo é 10000'
        },

        pattern: {
            value: /^\d{1,3}(?:\.\d{3})*(?:,\d{1,2})?$/,
            message:"Salario inválido"
        },

        validate: (value) => {
            if (value >= 1000) {
              return true; // Salário válido
            } else {
              return 'O valor do salário deve ser igual ou maior que 1000'; // Mensagem de erro
            }
          },
    },

    email:{
        required: 'Campo obrigatório!',
        minLength: {
            value: 3,
            message: 'O minimo de caracteres é 3'
        },
        maxLength: {
            value: 256,
            message: 'O máximo caracteres é 256'
        },
        pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message:"Email inválido"
        },
    },

    telefone:{
        required: 'Campo obrigatório!',
        minLength: {
            value: 9,
            message: 'O minimo de caracteres é 9'
        },
        maxLength: {
            value: 15,
            message: 'O máximo caracteres é 15'
        },
        
        pattern: {
            value: /^(\(61\)\s)?[9]?(\d{4})[-.]?(\d{4})$/,
            message:"Telefone inválido"
            //deixando aqui claro que é um padrao para o df
        },
    },

    cep:{
        required: 'Campo obrigatório!',
        minLength: {
            value: 8,
            message: 'O minimo de caracteres é 8'
        },
        maxLength: {
            value: 10,
            message: 'O máximo caracteres é 10'
        },
        
        pattern: {
            value: /^\d{5}-\d{3}$/,
            message:"CEP inválido"
            //deixando aqui claro que é um padrao para o df
        },
    },

    logradouro:{
        required: 'Campo obrigatório!',
        minLength: {
            value: 5,
            message: 'O minimo de caracteres é 5'
        },
        maxLength: {
            value: 100,
            message: 'O máximo caracteres é 100'
        },
        
        pattern: {
            value: /^[A-Za-z0-9\s]+$/,
            message:"CEP inválido"
            
        },
    },

    complemento:{
        required: 'Campo obrigatório!',
        minLength: {
            value: 5,
            message: 'O minimo de caracteres é 5'
        },
        maxLength: {
            value: 150,
            message: 'O máximo caracteres é 150'
        },
        
        pattern: {
            value: /^[A-Za-z0-9\s.,_-]+$/,
            message:"Comlemento inválido"
            
        },
    },

    numero:{
        required: 'Campo obrigatório!',
        minLength: {
            value: 2,
            message: 'O minimo de caracteres é 2'
        },
        maxLength: {
            value: 5,
            message: 'O máximo caracteres é 5'
        },
        
        pattern: {
            value: /^(0|[1-9][0-9]*)$/,
            message:"Numero inválido"
            
        },
    },

    bairro: {
        required: 'Campo obrigatório!',
        minLength: {
          value: 5,
          message: 'O mínimo de caracteres é 5'
        },
        maxLength: {
          value: 50,
          message: 'O máximo de caracteres é 50'
        },
        validate: {
          customValidation: (value) => {
            const pattern = /^[A-Za-z0-9\s.,_-]+$/;
            if (!pattern.test(value)) {
              return 'Número inválido';
            }
            return true; // Retorna true se a validação passar
          }
        },
      },
}
export default alunoValidator