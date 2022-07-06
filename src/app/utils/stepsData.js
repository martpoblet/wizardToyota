const stepsData = [
  {
    id: 1,
    question_id: 1,
    type: "question",
    title: "Seleccioná el Modelo *",
    subtitle: "",
    content: [
      {
        type: "radio-image",
        values: [
          {
            id: 1,
            image: "https://zento.tengouncero.com.ar/planes/src/yariscard.png",
            label: "Yaris"
          },
          {
            id: 2,
            image:
              "https://zento.tengouncero.com.ar/planes/src/corollacard.png",
            label: "Corolla"
          },
          {
            id: 3,
            image:
              "https://zento.tengouncero.com.ar/planes/src/corollacrosscard.png",
            label: "Corolla Cross"
          },
          {
            id: 4,
            image:
              "https://zento.tengouncero.com.ar/planes/src/hiluxcard44.png",
            label: "Hilux"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    type: "question",
    question_id: 2,
    title: "¿Cuál es tu nombre? *",
    content: [
      {
        type: "input",
        placeholder: "Mi nombre"
      }
    ]
  },
  {
    id: 3,
    question_id: 3,
    type: "question",
    title: "¿Te gustaría financiar el Total o una parte? *",
    subtitle: "",
    content: [
      {
        type: "checkbox",
        values: [
          {
            id: 1,
            label: "El total"
          },
          {
            id: 2,
            label: "Una parte"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    question_id: 4,
    type: "question",
    title: "¿En qué localidad vivís? *",
    subtitle: "Prueba",
    content: [
      {
        type: "input",
        placeholder: "Mi ciudad"
      }
    ]
  },
  {
    id: 5,
    question_id: 5,
    type: "question",
    title: "Ingresá tu Teléfono de Contacto *",
    subtitle: "",
    content: [
      {
        type: "input",
        placeholder: "Mi número",
        typeInput: "tel"
      }
    ]
  },
  {
    id: 6,
    question_id: 6,
    type: "question",
    title: "Ingresá tu email para recibir un detalle de tu cotización *",
    subtitle: "",
    content: [
      {
        type: "input",
        typeInput: "email",
        placeholder: "name@example.com"
      }
    ]
  },
  {
    id: 6,
    type: "section",
    should_save: true,
    hide_next_button: true,
    content: [
      {
        type: "text",
        value: "Your data has been saved :)"
      },
      {
        type: "text",
        value: "It's in your local storage"
      }
    ]
  }
];

export default stepsData;
