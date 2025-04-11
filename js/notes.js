import { getNotes, deleteNote } from './api.js';

const list = document.getElementById('notes-list');

const renderNotes = async () => {
  const notes = await getNotes();
  list.innerHTML = '';
  notes.forEach(note => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${note.title}</strong><br>
      ${note.content}<br>
      <a href="edit.html?id=${note.id}">Editar</a>
      <button onclick="handleDelete(${note.id})">Eliminar</button>
    `;
    list.appendChild(li);
  });
};

window.handleDelete = async (id) => {
  if (confirm('¿Eliminar esta nota?')) {
    await deleteNote(id);
    renderNotes();
  }
};

renderNotes();
