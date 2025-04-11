import { getNote, updateNote } from './api.js';

const params = new URLSearchParams(window.location.search);
const noteId = params.get('id');

const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const form = document.getElementById('edit-form');
const messageDiv = document.getElementById('message');

const loadNote = async () => {
  try {
    const note = await getNote(noteId);
    titleInput.value = note.title || '';
    contentInput.value = note.content || '';
  } catch (err) {
    messageDiv.textContent = 'Error al cargar la nota.';
  }
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const updated = {
    title: titleInput.value,
    content: contentInput.value,
  };
  try {
    await updateNote(noteId, updated);
    window.location.href = 'index.html';
  } catch (err) {
    messageDiv.textContent = 'Error al actualizar la nota.';
  }
});

loadNote();
