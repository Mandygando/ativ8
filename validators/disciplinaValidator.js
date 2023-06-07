const disciplinaValidator = {
    nome: {
        required: 'Campo obrigatório!',
        minLength: {
          value: 3,
          message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
          value: 20,
          message: 'O máximo de caracteres é 20'
        },
        validate: (value) => {
          const pattern = /^[\w\s.,-]+$/;
          if (!pattern.test(value)) {
            return 'Nome inválido';
          }
          return true; 
        },

        modalidade:{
            required: 'Campo obrigatório!',
            minLength: {
                value: 2,
                message: 'O minimo de caracteres é 2'
            },
            maxLength: {
                value: 20,
                message: 'O máximo caracteres é 20'
            },
           
        },

        duracao: {
            required: 'Campo obrigatório!',
            maxLength: {
                value: 3,
                message: 'O máximo de caracteres é 3'
            },
            min: {
                value: 2,
                message: 'O valor minimo é 2'
            },
            max: {
                value: 23,
                message: 'O valor máximo é 23'
            },
        },
    },
}
export default disciplinaValidator