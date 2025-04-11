import { createNote } from './api.js';

document.getElementById('create-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const note = {
    title: document.getElementById('title').value,
    content: document.getElementById('content').value
  };
  await createNote(note);
  window.location.href = 'notes.html';
});
