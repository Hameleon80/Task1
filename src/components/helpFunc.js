import { deleteNoteFunc, showModalWin, editNote, viewArchivedNotes } from './modal';
import{ IDEA, RANDOM_THOUGHT, TASK } from './categories'
import {archiveHead} from '../data/archiveHead'

let categories = [IDEA, RANDOM_THOUGHT, TASK];

// create table of notes
export const createNotesTable = (table, notes) => {
    let tbody = document.createElement('tbody');
    tbody.id = 'noteBody'

    table.appendChild(tbody);

    //fills table from array notes
    for (let i = 0; i < notes.length; i++) {
        let row = document.createElement('tr');
        for (const value of notes[i]) {
            let row_data = document.createElement('td');
            if (i === 0) {
                row_data = document.createElement('th');
            }
            let div_data = document.createElement('div');
            div_data.classList.add('hidRow');
            div_data.innerHTML = value;
            row_data.appendChild(div_data);
            row.appendChild(row_data);
        }

        //pictograms edit
        let picEdit = document.createElement('th');
        if (i !== 0) {
            picEdit = document.createElement('td');
            picEdit.classList.add('width32');
            const a = document.createElement('a');
            a.href = '';
            a.id = i;
            a.onclick = () => {
                editNote(a.id);
                return false;
            }

            let edit = document.createElement('img');
            edit.width = '25';
            edit.height = '20';
            edit.src = '/public/images/edit.png';

            a.appendChild(edit);
            picEdit.appendChild(a);
        }
        row.appendChild(picEdit);

        //pictograms arhive
        let picArch = document.createElement('th');
        if (i !== 0) {
            picArch = document.createElement('td');
            picArch.classList.add('width32');
            const aArch = document.createElement('a');
            aArch.href = '';
            aArch.id = i;
            aArch.onclick = () => {
                archiveNoteFunc(+aArch.id);
                return false;
            }
            let archNote = document.createElement('img');
            archNote.width = '25';
            archNote.height = '20';
            archNote.src = '/public/images/archive.png';

            aArch.appendChild(archNote);
            picArch.appendChild(aArch);
        }
        row.appendChild(picArch);
        
        //pictograms delete
        let picDel = document.createElement('th');
        if (i !== 0) {
            picDel = document.createElement('td');
            picDel.classList.add('width32');
            const aDel = document.createElement('a');
            aDel.href = '';
            aDel.id = i;
            aDel.onclick = () => {
                deleteNoteFunc(+aDel.id);
                return false;
            }
            let deleteNote = document.createElement('img');
            deleteNote.width = '25';
            deleteNote.height = '20';
            deleteNote.src = '/public/images/delete.png';

            aDel.appendChild(deleteNote);
            picDel.appendChild(aDel);
        }
        row.appendChild(picDel);

        tbody.appendChild(row);
    }
}
/**
 * create notes button and event handling
 * 
 * @param {*} divButton 
 */

export const createNotesButton = (divButton) => {
    //create button
    let createNoteButton = document.createElement('button');
    createNoteButton.textContent = 'Create Note';
    divButton.classList.add('craeteNoteButton');

    //click event
    createNoteButton.addEventListener('click', () => {
        showModalWin();
    })

    //add button in div
    divButton.appendChild(createNoteButton);
}

/**
 * finds dates in string
 * 
 * @param {string} inner
 * @returns {string}
 */
export const findDatesInString = (inner) => {
    const regex = /\d+\/\d+\/\d+/g;
    const array = Array.from(inner.matchAll(regex));
    let result = '';

    for (let i = 0; i < array.length; i++) {
        i === 0 ? result += array[i] : result += ', ' + array[i];
    }

    return result;
}

/**
 * Create archive table
 * 
 * @param {*} table 
 * @param {string[]} archiveHead 
 * @param {archive[]} notes 
 */
export const createArchiveTable = (table, archiveHead) => {
    let tbody = document.createElement('tbody');
    tbody.id = 'archTbody';

    table.appendChild(tbody);

    //create head of archive table
    let header = document.createElement('tr');
    for(let i = 0; i < archiveHead.length; i++){
        let header_data = document.createElement('th');
        header_data.textContent = archiveHead[i];
        header.appendChild(header_data);
    }
    tbody.appendChild(header);

    //create body of archive table
    for(let i = 0; i < 3; i++){
        let count = 0;
        let rowArch = document.createElement('tr');
        rowArch.id = i;
        let tdCtegoryName = document.createElement('td');
        tdCtegoryName.classList.add('hidRow');
        tdCtegoryName.innerHTML = categories[i];
        rowArch.appendChild(tdCtegoryName);

        let tdActiveNotes = document.createElement('td');
        tdActiveNotes.classList.add('alignCenter');
        window.notesTemp.map((note) => {
            if(note[2] === categories[i]){
                count++;
            }
        });
        tdActiveNotes.innerHTML = count;
        rowArch.appendChild(tdActiveNotes)

        let tdArchNotes = document.createElement('td');
        tdArchNotes.classList.add('alignCenter');
        count = 0;
        window.archiveNotes.map((note) => {
            if(note[2] === categories[i]){
                count++;
            }
        });
        tdArchNotes.innerHTML = count;
        rowArch.appendChild(tdArchNotes);

        let tdViewArchive = document.createElement('td');
        tdViewArchive.classList.add('craeteNoteButton');
        let buttonViewArchive = document.createElement('button');
        buttonViewArchive.textContent = 'View';
        buttonViewArchive.addEventListener('click', ()=>{
            viewArchivedNotes(rowArch.id, categories[i]);
        })

        tdViewArchive.appendChild(buttonViewArchive);
        
        rowArch.appendChild(tdViewArchive);

        tbody.appendChild(rowArch);
    }
}
/**
 * Add note to archive
 * 
 * @param {number} id 
 */
export function archiveNoteFunc(id) {
    try{
        let note = window.notesTemp[id];
        window.archiveNotes.push(note);
        deleteNoteFunc(id);
    }catch(e){
        console.error(e);
    }
    
    //reload archive table
    let archTable = document.querySelector('#archive');
    let archTbody = document.querySelector('#archTbody')
    archTable.removeChild(archTbody);
    createArchiveTable(archTable, archiveHead)
}