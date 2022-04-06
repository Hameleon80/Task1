import { notes } from "../data/notes";
import { createNotesTable, findDatesInString, createArchiveTable } from '../components/helpFunc';
import { archiveHead } from '../data/archiveHead'

let months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'
];

let resultRow = [];

export function showModalWin() {
    //clear form
    let name = document.querySelector('input[name=name]');
    name.value = '';
    let content = document.querySelector('textarea[name=content]');
    content.value = '';

    //Create modal mindow
    let modalWin = document.getElementById('modalWin');
    modalWin.style.display = 'block';
    let closeButton = document.querySelector('svg');
    let createButton = document.getElementById('create');

    //close window
    closeButton.addEventListener('click', function (e) {
        modalWin.style.display = 'none';
    });

    //create note
    createButton.onclick = () => {
        resultRow = [];
        const form = document.forms.createNoteForm;
        resultRow.push(form.elements.name.value);
        let now = new Date();
        resultRow.push(months[now.getMonth()] + ' ' +
            (now.getDate() < 10 ? '0' + now.getDate() : now.getDate()) + ', ' +
            now.getFullYear());
        resultRow.push(form.elements.category.value);
        resultRow.push(form.elements.content.value);
        resultRow.push(findDatesInString(form.elements.content.value));

        window.notesTemp.push(resultRow);
        // close window
        modalWin.style.display = 'none';

        //let links to tables notes and archives
        let noteTable = document.querySelector('#notes');
        let archTable = document.querySelector('table[id=archive]');

        //clear tables
        noteTable.innerHTML = '';
        archTable.innerHTML = '';

        //create new tables
        createNotesTable(noteTable, notesTemp);
        createArchiveTable(archTable, archiveHead)
    }
}

/**
 * Function for edit note
 * 
 * @param {number} id - number of line
 */
export function editNote(id) {
    const note = notes[id];
    //Create modal mindow
    let modalWin = document.getElementById('editModalWin');
    modalWin.style.display = 'block';
    let closeButtonEdit = document.querySelector('svg[id=editClose]');
    let editButton = document.getElementById('edit');

    //close window
    closeButtonEdit.addEventListener('click', function (e) {
        modalWin.style.display = 'none';
    });

    //fill form for old values
    let name = document.querySelector('input[name=editName]');
    name.value = note[0];
    let select = document.querySelector('select[name=editCategory]');
    select.value = note[2];
    let content = document.querySelector('textarea[name=editContent]');
    content.textContent = note[3];

    //change note
    editButton.onclick = () => {
        let newNote = []
        newNote.push(name.value);
        let now = new Date();
        newNote.push(months[now.getMonth()] + ' ' +
            (now.getDate() < 10 ? '0' + now.getDate() : now.getDate()) + ', ' +
            now.getFullYear());
        newNote.push(select.value);
        newNote.push(content.value);
        newNote.push(findDatesInString(content.value));
        window.notesTemp[id] = newNote;

        for (const value of notesTemp) {
            console.log(value);
        }

        //close modal window
        modalWin.style.display = 'none';

        //lets link on the tables notes and archives
        let noteTable = document.querySelector('#notes');
        let archTable = document.querySelector('table[id=viewArchTable]')

        //delete old table
        noteTable.innerHTML = '';
        archTable.innerHTML = '';

        //create new tables
        createNotesTable(noteTable, notesTemp);
        createArchiveTable(archTable, archiveHead);
    };
}

/**
 * Function for delete note
 * 
 * @param {number} id - number of line
 */
export function deleteNoteFunc(id) {
    if (id === 0) {
        window.notesTemp = window.notesTemp.slice(1, window.notesTemp.length);
    } else if (id === window.notesTemp.length - 1) {
        window.notesTemp.pop();
    } else {
        window.notesTemp = window.notesTemp.slice(0, id).concat(window.notesTemp.slice(id + 1, window.notesTemp.length));
    }

    //lets links on the table notes and archive
    let noteTable = document.querySelector('#notes');
    let tbody = document.querySelector('#noteBody');
    let archTable = document.querySelector('table[id=archive]');
    let archBody = document.querySelector('tbody[id=archTbody]');

    //delete old tables
    noteTable.removeChild(tbody);
    archTable.removeChild(archBody);

    //create new tables
    createNotesTable(noteTable, window.notesTemp);
    createArchiveTable(archTable, archiveHead);

}

/**
 * Function call modal window for view archived notes
 * 
 * @param {number} id
 * @param {string} category
 */
export function viewArchivedNotes(id, category) {
    //let modal window
    let viewNotesWindow = document.querySelector('div[id=viewArchNotes]');
    viewNotesWindow.style.display = 'block';

    //close window button
    let closeButtonViewArchNotes = document.querySelector('svg[id=viewArchClose]');
    closeButtonViewArchNotes.addEventListener('click', function (e) {
        viewNotesWindow.style.display = 'none';
    });

    //create table for view arhived nodes
    let tableViewArch = document.querySelector('table[id=viewArchTable]');
    tableViewArch.innerHTML = '';

    //fills head table
    let rowHead = document.createElement('tr');
    archiveNotesHead.map((note) => {
        let th = document.createElement('th');
        th.textContent = note;
        rowHead.appendChild(th);
    });
    tableViewArch.appendChild(rowHead);

    //fills table
    for (let i = 0; i < archiveNotes.length; i++) {
        if (archiveNotes[i][2] === category) {
            let row = document.createElement('tr');
            archiveNotes[i].map((value) => {
                let td = document.createElement('td');
                let div_data = document.createElement('div');
                if (value.length > 50) {
                    div_data.classList.add('dataModalView');
                }
                div_data.innerHTML = value;
                td.appendChild(div_data);
                row.appendChild(td);
            });
            let tdButton = document.createElement('td');
            let unarchiveButton = document.createElement('button');
            unarchiveButton.textContent = 'unarchive';
            unarchiveButton.addEventListener('click', () => {
                notesTemp.push(archiveNotes[i]);
                if (i === 0) {
                    archiveNotes.shift();
                } else if (i === archiveNotes.length - 1) {
                    archiveNotes.pop();
                } else {
                    archiveNotes.slice(0, i).concat(archiveNotes.slice(i + 1, archiveNotes.length));
                }
                viewNotesWindow.style.display = 'none';

                //reload notes table
                let noteTable = document.querySelector('#notes');
                noteTable.innerHTML = '';
                createNotesTable(noteTable, notesTemp);

                //reload archive table
                let archTable = document.querySelector('#archive');
                archTable.innerHTML = '';
                createArchiveTable(archTable, archiveHead);
            })

            tdButton.appendChild(unarchiveButton);
            row.appendChild(tdButton);
            tableViewArch.appendChild(row);
        }
    }

}