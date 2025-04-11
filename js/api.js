const BASE_URL = 'http://localhost:8080/notes';

export const getNotes = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

export const getNote = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
};

export const createNote = async (note) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  return await res.json();
};

export const updateNote = async (id, note) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  return await res.json();
};

export const deleteNote = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.text();
};
