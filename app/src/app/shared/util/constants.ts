export const LOGIN = {
    login: Boolean
}

export const MODEL = {
  food: {
    firstname: {
      type: "text",
      value: "",
      label: "FirstName",
    },
    lastname: {
      type: "text",
      value: "",
      label: "LastName",
    },
    address: {
      type: "text",
      value: "",
      label: "Address",
    },
  },
  room: {
    age: {
      type: "number",
      value: "",
      label: "age",
    },
    birthDay: {
      type: "date",
      value: "",
      label: "Birthday",
    },
    newsletterIn: {
      label: "Suscribe to newsletter",
      value: "email",
      type: "checkbox"
    },
    typeBussines: {
      label: "Bussines Type",
      value: "premium",
      type: "radio",
      options: [
        {
          label: "Enterprise",
          value: "1500",
        },
        {
          label: "Home",
          value: "6",
        },
        {
          label: "Personal",
          value: "1",
        },
      ],
    },
  }

};
