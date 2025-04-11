import { getNote, updateNote } from './api.js';

const params = new URLSearchParams(window.location.search);
const noteId = params.get('id');

const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

const form = document.getElementById('edit-form');

const loadNote = async () => {
  const note = await getNote(noteId);
  titleInput.value = note.title;
  contentInput.value = note.content;
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const updated = {
    title: titleInput.value,
    content: contentInput.value
  };
  await updateNote(noteId, updated);
  window.location.href = 'notes.html';
});

loadNote();
