import { notes } from './data/notes';
import { archiveHead } from './data/archiveHead'
import {createNotesTable, createNotesButton, createArchiveTable} from './components/helpFunc'

window.notesTemp = notes;
window.archiveNotes = [];
window.archiveNotesHead = ['Name', 'Created', 'Category', 'Contenet', 'Dates', ''];

//Creates table
let notesTable = document.querySelector('#notes');
createNotesTable(notesTable, notes);

//creates button
let divButton = document.querySelector('#createNoteButton');
createNotesButton(divButton);

//create archive table
let archiveTable = document.querySelector('#archive');
createArchiveTable(archiveTable, archiveHead);