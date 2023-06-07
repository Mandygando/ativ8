const semestreValidator = {

    nome: {
        required: 'Campo obrigatório!',
        minLength: {
            value: 1,
            message: 'O minimo de caracteres é 1'
        },
        maxLength: {
            value: 15,
            message: 'O máximo caracteres é 13'
        },
    },

    dtInicio: {
        required: 'Campo obrigatório!',
        min: {
          value: '2010-01-01',
          message: 'A data mínima é 01/01/2023'
        },
        max: {
          value: '2023-12-31',
          message: 'A data máxima é 31/12/2025'
        },
      },

      dtFim: {
        required: 'Campo obrigatório!',
        min: {
          value: '2010-01-01',
          message: 'A data mínima é 01/01/2010'
        },
        max: {
          value: '2025-12-31',
          message: 'A data máxima é 31/12/2025'
        },
        
        validate: (value) => {
          const currentDate = new Date();
          const endDate = new Date(value);
      
          if (endDate > currentDate) {
            return 'O aluno ainda não concluiu o semestre';
          }
      
          return true; // Data de fim válida
        },
      },
}
export default semestreValidator