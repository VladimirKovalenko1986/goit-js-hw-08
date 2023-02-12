const save = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.error(err.mesage);
  }
};

const load = key => {
  try {
    const serializedData = localStorage.getItem(key);

    // Робимо перевірку якщо не знайде ключ поверне undefined а в іншому разі буде null
    return serializedData === null ? undefined : JSON.parse(serializedData);
  } catch (err) {
    console.error(err.message);
  }
};

export { save, load };
