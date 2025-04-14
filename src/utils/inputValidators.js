export const isEmpty = (value) => {
  return value.length === 0 ? "Por favor, ingrese un valor" : "";
};

export const isEmail = (value) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return !emailRegex.test(value) ? "el formato del email es invalido" : "";
};
