const cursoValidator = {
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

    duracao: {
        required: 'Campo obrigatório!',
        maxLength: {
            value: 3,
            message: 'O máximo de caracteres é 3'
        },
        min: {
            value: 2.5,
            message: 'O valor minimo é 2.5'
        },
        max: {
            value: 10,
            message: 'O valor máximo é 10'
        },
    },

    modalidade:  {
        required: 'Campo obrigatório!',
        maxLength:{
          value: 10,
          message: 'O máximo é 10'
        },
      }
      

}
export default cursoValidator