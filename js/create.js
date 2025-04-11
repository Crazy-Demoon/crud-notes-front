import { createNote } from './api.js';

const form = document.getElementById('note-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newNote = {
    title: document.getElementById('title').value,
    content: document.getElementById('content').value,
  };

  try {
    await createNote(newNote);
    window.location.href = 'index.html';
  } catch (err) {
    messageDiv.textContent = 'Error al crear la nota.';
  }
});
