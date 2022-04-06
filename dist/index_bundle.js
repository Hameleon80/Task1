/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/notes */ \"./src/data/notes.js\");\n/* harmony import */ var _data_archiveHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/archiveHead */ \"./src/data/archiveHead.js\");\n/* harmony import */ var _components_helpFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/helpFunc */ \"./src/components/helpFunc.js\");\n\n\n\nwindow.notesTemp = _data_notes__WEBPACK_IMPORTED_MODULE_0__.notes;\nwindow.archiveNotes = [];\nwindow.archiveNotesHead = ['Name', 'Created', 'Category', 'Contenet', 'Dates', '']; //Creates table\n\nlet notesTable = document.querySelector('#notes');\n(0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_2__.createNotesTable)(notesTable, _data_notes__WEBPACK_IMPORTED_MODULE_0__.notes); //creates button\n\nlet divButton = document.querySelector('#createNoteButton');\n(0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_2__.createNotesButton)(divButton); //create archive table\n\nlet archiveTable = document.querySelector('#archive');\n(0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_2__.createArchiveTable)(archiveTable, _data_archiveHead__WEBPACK_IMPORTED_MODULE_1__.archiveHead);\n\n//# sourceURL=webpack://task1/./src/app.js?");

/***/ }),

/***/ "./src/components/categories.js":
/*!**************************************!*\
  !*** ./src/components/categories.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IDEA\": () => (/* binding */ IDEA),\n/* harmony export */   \"RANDOM_THOUGHT\": () => (/* binding */ RANDOM_THOUGHT),\n/* harmony export */   \"TASK\": () => (/* binding */ TASK)\n/* harmony export */ });\nconst TASK = 'Task';\nconst RANDOM_THOUGHT = 'Random Thought';\nconst IDEA = 'Idea';\n\n//# sourceURL=webpack://task1/./src/components/categories.js?");

/***/ }),

/***/ "./src/components/helpFunc.js":
/*!************************************!*\
  !*** ./src/components/helpFunc.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"archiveNoteFunc\": () => (/* binding */ archiveNoteFunc),\n/* harmony export */   \"createArchiveTable\": () => (/* binding */ createArchiveTable),\n/* harmony export */   \"createNotesButton\": () => (/* binding */ createNotesButton),\n/* harmony export */   \"createNotesTable\": () => (/* binding */ createNotesTable),\n/* harmony export */   \"findDatesInString\": () => (/* binding */ findDatesInString)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories */ \"./src/components/categories.js\");\n/* harmony import */ var _data_archiveHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/archiveHead */ \"./src/data/archiveHead.js\");\n\n\n\nlet categories = [_categories__WEBPACK_IMPORTED_MODULE_1__.IDEA, _categories__WEBPACK_IMPORTED_MODULE_1__.RANDOM_THOUGHT, _categories__WEBPACK_IMPORTED_MODULE_1__.TASK]; // create table of notes\n\nconst createNotesTable = (table, notes) => {\n  let tbody = document.createElement('tbody');\n  tbody.id = 'noteBody';\n  table.appendChild(tbody); //fills table from array notes\n\n  for (let i = 0; i < notes.length; i++) {\n    let row = document.createElement('tr');\n\n    for (const value of notes[i]) {\n      let row_data = document.createElement('td');\n\n      if (i === 0) {\n        row_data = document.createElement('th');\n      }\n\n      let div_data = document.createElement('div');\n      div_data.classList.add('hidRow');\n      div_data.innerHTML = value;\n      row_data.appendChild(div_data);\n      row.appendChild(row_data);\n    } //pictograms edit\n\n\n    let picEdit = document.createElement('th');\n\n    if (i !== 0) {\n      picEdit = document.createElement('td');\n      picEdit.classList.add('width32');\n      const a = document.createElement('a');\n      a.href = '';\n      a.id = i;\n\n      a.onclick = () => {\n        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.editNote)(a.id);\n        return false;\n      };\n\n      let edit = document.createElement('img');\n      edit.width = '25';\n      edit.height = '20';\n      edit.src = '/public/images/edit.png';\n      a.appendChild(edit);\n      picEdit.appendChild(a);\n    }\n\n    row.appendChild(picEdit); //pictograms arhive\n\n    let picArch = document.createElement('th');\n\n    if (i !== 0) {\n      picArch = document.createElement('td');\n      picArch.classList.add('width32');\n      const aArch = document.createElement('a');\n      aArch.href = '';\n      aArch.id = i;\n\n      aArch.onclick = () => {\n        archiveNoteFunc(+aArch.id);\n        return false;\n      };\n\n      let archNote = document.createElement('img');\n      archNote.width = '25';\n      archNote.height = '20';\n      archNote.src = '/public/images/archive.png';\n      aArch.appendChild(archNote);\n      picArch.appendChild(aArch);\n    }\n\n    row.appendChild(picArch); //pictograms delete\n\n    let picDel = document.createElement('th');\n\n    if (i !== 0) {\n      picDel = document.createElement('td');\n      picDel.classList.add('width32');\n      const aDel = document.createElement('a');\n      aDel.href = '';\n      aDel.id = i;\n\n      aDel.onclick = () => {\n        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.deleteNoteFunc)(+aDel.id);\n        return false;\n      };\n\n      let deleteNote = document.createElement('img');\n      deleteNote.width = '25';\n      deleteNote.height = '20';\n      deleteNote.src = '/public/images/delete.png';\n      aDel.appendChild(deleteNote);\n      picDel.appendChild(aDel);\n    }\n\n    row.appendChild(picDel);\n    tbody.appendChild(row);\n  }\n};\n/**\r\n * create notes button and event handling\r\n * \r\n * @param {*} divButton \r\n */\n\nconst createNotesButton = divButton => {\n  //create button\n  let createNoteButton = document.createElement('button');\n  createNoteButton.textContent = 'Create Note';\n  divButton.classList.add('craeteNoteButton'); //click event\n\n  createNoteButton.addEventListener('click', () => {\n    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showModalWin)();\n  }); //add button in div\n\n  divButton.appendChild(createNoteButton);\n};\n/**\r\n * finds dates in string\r\n * \r\n * @param {string} inner\r\n * @returns {string}\r\n */\n\nconst findDatesInString = inner => {\n  const regex = /\\d+\\/\\d+\\/\\d+/g;\n  const array = Array.from(inner.matchAll(regex));\n  let result = '';\n\n  for (let i = 0; i < array.length; i++) {\n    i === 0 ? result += array[i] : result += ', ' + array[i];\n  }\n\n  return result;\n};\n/**\r\n * \r\n * @param {*} table \r\n * @param {string[]} archiveHead \r\n * @param {archive[]} notes \r\n */\n\nconst createArchiveTable = (table, archiveHead) => {\n  let tbody = document.createElement('tbody');\n  tbody.id = 'archTbody';\n  table.appendChild(tbody); //create head of archive table\n\n  let header = document.createElement('tr');\n\n  for (let i = 0; i < archiveHead.length; i++) {\n    let header_data = document.createElement('th');\n    header_data.textContent = archiveHead[i];\n    header.appendChild(header_data);\n  }\n\n  tbody.appendChild(header); //create body of archive table\n\n  for (let i = 0; i < 3; i++) {\n    let count = 0;\n    let rowArch = document.createElement('tr');\n    rowArch.id = i;\n    let tdCtegoryName = document.createElement('td');\n    tdCtegoryName.classList.add('hidRow');\n    tdCtegoryName.innerHTML = categories[i];\n    rowArch.appendChild(tdCtegoryName);\n    let tdActiveNotes = document.createElement('td');\n    tdActiveNotes.classList.add('alignCenter');\n    window.notesTemp.map(note => {\n      if (note[2] === categories[i]) {\n        count++;\n      }\n    });\n    tdActiveNotes.innerHTML = count;\n    rowArch.appendChild(tdActiveNotes);\n    let tdArchNotes = document.createElement('td');\n    tdArchNotes.classList.add('alignCenter');\n    count = 0;\n    window.archiveNotes.map(note => {\n      if (note[2] === categories[i]) {\n        count++;\n      }\n    });\n    tdArchNotes.innerHTML = count;\n    rowArch.appendChild(tdArchNotes);\n    let tdViewArchive = document.createElement('td');\n    tdViewArchive.classList.add('craeteNoteButton');\n    let buttonViewArchive = document.createElement('button');\n    buttonViewArchive.textContent = 'View';\n    buttonViewArchive.addEventListener('click', () => {\n      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.viewArchivedNotes)(rowArch.id, categories[i]);\n    });\n    tdViewArchive.appendChild(buttonViewArchive);\n    rowArch.appendChild(tdViewArchive);\n    tbody.appendChild(rowArch);\n  }\n};\n/**\r\n * \r\n * @param {number} id \r\n */\n\nfunction archiveNoteFunc(id) {\n  try {\n    let note = window.notesTemp[id];\n    window.archiveNotes.push(note);\n    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.deleteNoteFunc)(id);\n  } catch (e) {\n    console.error(e);\n  } //reload archive table\n\n\n  let archTable = document.querySelector('#archive');\n  let archTbody = document.querySelector('#archTbody');\n  archTable.removeChild(archTbody);\n  createArchiveTable(archTable, _data_archiveHead__WEBPACK_IMPORTED_MODULE_2__.archiveHead);\n}\n\n//# sourceURL=webpack://task1/./src/components/helpFunc.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteNoteFunc\": () => (/* binding */ deleteNoteFunc),\n/* harmony export */   \"editNote\": () => (/* binding */ editNote),\n/* harmony export */   \"showModalWin\": () => (/* binding */ showModalWin),\n/* harmony export */   \"viewArchivedNotes\": () => (/* binding */ viewArchivedNotes)\n/* harmony export */ });\n/* harmony import */ var _data_notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/notes */ \"./src/data/notes.js\");\n/* harmony import */ var _components_helpFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/helpFunc */ \"./src/components/helpFunc.js\");\n/* harmony import */ var _data_archiveHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/archiveHead */ \"./src/data/archiveHead.js\");\n\n\n\nlet months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];\nlet resultRow = [];\nfunction showModalWin() {\n  //clear form\n  let name = document.querySelector('input[name=name]');\n  name.value = '';\n  let content = document.querySelector('textarea[name=content]');\n  content.value = ''; //Create modal mindow\n\n  let modalWin = document.getElementById('modalWin');\n  modalWin.style.display = 'block';\n  let closeButton = document.querySelector('svg');\n  let createButton = document.getElementById('create'); //close window\n\n  closeButton.addEventListener('click', function (e) {\n    modalWin.style.display = 'none';\n  }); //create note\n\n  createButton.onclick = () => {\n    resultRow = [];\n    const form = document.forms.createNoteForm;\n    resultRow.push(form.elements.name.value);\n    let now = new Date();\n    resultRow.push(months[now.getMonth()] + ' ' + (now.getDate() < 10 ? '0' + now.getDate() : now.getDate()) + ', ' + now.getFullYear());\n    resultRow.push(form.elements.category.value);\n    resultRow.push(form.elements.content.value);\n    resultRow.push((0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_1__.findDatesInString)(form.elements.content.value));\n    window.notesTemp.push(resultRow); // close window\n\n    modalWin.style.display = 'none'; //let links to tables notes and archives\n\n    let noteTable = document.querySelector('#notes');\n    let archTable = document.querySelector('table[id=archive]'); //clear tables\n\n    noteTable.innerHTML = '';\n    archTable.innerHTML = ''; //create new tables\n\n    (0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_1__.createNotesTable)(noteTable, notesTemp);\n    (0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_1__.createArchiveTable)(archTable, _data_archiveHead__WEBPACK_IMPORTED_MODULE_2__.archiveHead);\n  };\n}\n/**\r\n * Function for edit note\r\n * \r\n * @param {number} id - number of line\r\n */\n\nfunction editNote(id) {\n  const note = _data_notes__WEBPACK_IMPORTED_MODULE_0__.notes[id]; //Create modal mindow\n\n  let modalWin = document.getElementById('editModalWin');\n  modalWin.style.display = 'block';\n  let closeButtonEdit = document.querySelector('svg[id=editClose]');\n  let editButton = document.getElementById('edit'); //close window\n\n  closeButtonEdit.addEventListener('click', function (e) {\n    modalWin.style.display = 'none';\n  }); //fill form for old values\n\n  let name = document.querySelector('input[name=editName]');\n  name.value = note[0];\n  let select = document.querySelector('select[name=editCategory]');\n  select.value = note[2];\n  let content = document.querySelector('textarea[name=editContent]');\n  content.textContent = note[3]; //change note\n\n  editButton.onclick = () => {\n    let newNote = [];\n    newNote.push(name.value);\n    let now = new Date();\n    newNote.push(months[now.getMonth()] + ' ' + (now.getDate() < 10 ? '0' + now.getDate() : now.getDate()) + ', ' + now.getFullYear());\n    newNote.push(select.value);\n    newNote.push(content.value);\n    newNote.push((0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_1__.findDatesInString)(content.value));\n    window.notesTemp[id] = newNote;\n\n    for (const value of notesTemp) {\n      console.log(value);\n    } //close modal window\n\n\n    modalWin.style.display = 'none'; //lets link on the tables notes and archives\n\n    let noteTable = document.querySelector('#notes');\n    let archTable = document.querySelector('table[id=viewArchTable]'); //delete old table\n\n    noteTable.innerHTML = '';\n    archTable.innerHTML = ''; //create new tables\n\n    (0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_1__.createNotesTable)(noteTable, notesTemp);\n    (0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_1__.createArchiveTable)(archTable, _data_archiveHead__WEBPACK_IMPORTED_MODULE_2__.archiveHead);\n  };\n}\n/**\r\n * Function for delete note\r\n * \r\n * @param {number} id - number of line\r\n */\n\nfunction deleteNoteFunc(id) {\n  if (id === 0) {\n    window.notesTemp = window.notesTemp.slice(1, window.notesTemp.length);\n  } else if (id === window.notesTemp.length - 1) {\n    window.notesTemp.pop();\n  } else {\n    window.notesTemp = window.notesTemp.slice(0, id).concat(window.notesTemp.slice(id + 1, window.notesTemp.length));\n  } //lets links on the table notes and archive\n\n\n  let noteTable = document.querySelector('#notes');\n  let tbody = document.querySelector('#noteBody');\n  let archTable = document.querySelector('table[id=archive]');\n  let archBody = document.querySelector('tbody[id=archTbody]'); //delete old tables\n\n  noteTable.removeChild(tbody);\n  archTable.removeChild(archBody); //create new tables\n\n  (0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_1__.createNotesTable)(noteTable, window.notesTemp);\n  (0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_1__.createArchiveTable)(archTable, _data_archiveHead__WEBPACK_IMPORTED_MODULE_2__.archiveHead);\n}\n/**\r\n * Function call modal window for view archived notes\r\n * \r\n * @param {number} id\r\n * @param {string} category\r\n */\n\nfunction viewArchivedNotes(id, category) {\n  //let modal window\n  let viewNotesWindow = document.querySelector('div[id=viewArchNotes]');\n  viewNotesWindow.style.display = 'block'; //close window button\n\n  let closeButtonViewArchNotes = document.querySelector('svg[id=viewArchClose]');\n  closeButtonViewArchNotes.addEventListener('click', function (e) {\n    viewNotesWindow.style.display = 'none';\n  }); //create table for view arhived nodes\n\n  let tableViewArch = document.querySelector('table[id=viewArchTable]');\n  tableViewArch.innerHTML = ''; //fills head table\n\n  let rowHead = document.createElement('tr');\n  archiveNotesHead.map(note => {\n    let th = document.createElement('th');\n    th.textContent = note;\n    rowHead.appendChild(th);\n  });\n  tableViewArch.appendChild(rowHead); //fills table\n\n  for (let i = 0; i < archiveNotes.length; i++) {\n    if (archiveNotes[i][2] === category) {\n      let row = document.createElement('tr');\n      archiveNotes[i].map(value => {\n        let td = document.createElement('td');\n        let div_data = document.createElement('div');\n\n        if (value.length > 50) {\n          div_data.classList.add('dataModalView');\n        }\n\n        div_data.innerHTML = value;\n        td.appendChild(div_data);\n        row.appendChild(td);\n      });\n      let tdButton = document.createElement('td');\n      let unarchiveButton = document.createElement('button');\n      unarchiveButton.textContent = 'unarchive';\n      unarchiveButton.addEventListener('click', () => {\n        notesTemp.push(archiveNotes[i]);\n\n        if (i === 0) {\n          archiveNotes.shift();\n        } else if (i === archiveNotes.length - 1) {\n          archiveNotes.pop();\n        } else {\n          archiveNotes.slice(0, i).concat(archiveNotes.slice(i + 1, archiveNotes.length));\n        }\n\n        viewNotesWindow.style.display = 'none'; //reload notes table\n\n        let noteTable = document.querySelector('#notes');\n        noteTable.innerHTML = '';\n        (0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_1__.createNotesTable)(noteTable, notesTemp); //reload archive table\n\n        let archTable = document.querySelector('#archive');\n        archTable.innerHTML = '';\n        (0,_components_helpFunc__WEBPACK_IMPORTED_MODULE_1__.createArchiveTable)(archTable, _data_archiveHead__WEBPACK_IMPORTED_MODULE_2__.archiveHead);\n      });\n      tdButton.appendChild(unarchiveButton);\n      row.appendChild(tdButton);\n      tableViewArch.appendChild(row);\n    }\n  }\n}\n\n//# sourceURL=webpack://task1/./src/components/modal.js?");

/***/ }),

/***/ "./src/data/archiveHead.js":
/*!*********************************!*\
  !*** ./src/data/archiveHead.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"archiveHead\": () => (/* binding */ archiveHead)\n/* harmony export */ });\nlet archiveHead = ['Note Category', 'Active', 'Archived', ''];\n\n//# sourceURL=webpack://task1/./src/data/archiveHead.js?");

/***/ }),

/***/ "./src/data/notes.js":
/*!***************************!*\
  !*** ./src/data/notes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notes\": () => (/* binding */ notes)\n/* harmony export */ });\n/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/categories */ \"./src/components/categories.js\");\n\nlet notes = [['Name', 'Created', 'Category', 'Contenet', 'Dates'], ['Shopping list', 'April 20, 2021', _components_categories__WEBPACK_IMPORTED_MODULE_0__.TASK, 'Tomatoes, bread, butter, milk', ''], ['The theory of evolution', 'April 27, 2021', _components_categories__WEBPACK_IMPORTED_MODULE_0__.RANDOM_THOUGHT, 'The theory of evolution is a shortened form of the term “theory of evolution by natural selection,” which was proposed by Charles Darwin and Alfred Russel Wallace in the nineteenth century.', ''], ['New Feature', 'May 05, 2021', _components_categories__WEBPACK_IMPORTED_MODULE_0__.IDEA, 'Implement new feature 3/5/2021. Dont forget say this to boss 5/5/2021', '3/5/2021 , 5/5/2021'], ['Shopping list 2', 'June 16, 2021', _components_categories__WEBPACK_IMPORTED_MODULE_0__.TASK, 'Bread, eggs, cucumber, sour cream, onion, tomatoes', ''], ['Don\\'t forget', 'Jule 09, 2021', _components_categories__WEBPACK_IMPORTED_MODULE_0__.RANDOM_THOUGHT, 'Don\\'t forget to wish Tom a happy birthday', ''], ['How improve engine', 'Jule 29, 2021', _components_categories__WEBPACK_IMPORTED_MODULE_0__.IDEA, 'Change valve travel', '']];\n\n//# sourceURL=webpack://task1/./src/data/notes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;