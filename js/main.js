import { getNotes, deleteNote } from './api.js';

const notesList = document.getElementById('notes-list');
const messageDiv = document.getElementById('message');

const loadNotes = async () => {
  const notes = await getNotes();
  notesList.innerHTML = '';

  notes.forEach(note => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${note.title}</td>
      <td>${note.content}</td>
      <td>
        <a href="edit.html?id=${note.id}">Editar</a>
        <button onclick="handleDelete(${note.id})">Eliminar</button>
      </td>
    `;
    notesList.appendChild(row);
  });
};

window.handleDelete = async (id) => {
  const confirmDelete = confirm("¿Estás seguro de eliminar esta nota?");
  if (!confirmDelete) return;

  const result = await deleteNote(id);
  messageDiv.textContent = result;
  loadNotes();
};

loadNotes();
