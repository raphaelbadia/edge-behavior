const data = new Map();

export const add = (id) => {
  data.set(id, true);
};

export const del = (id) => {
  data.delete(id);
};

export const getAll = () => {
  return Object.fromEntries(data.entries());
};
