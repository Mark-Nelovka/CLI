const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, 'db', 'contacts.json') ;
console.log(contactsPath)

fs.readFile(contactsPath, 'utf-8').then(data => console.log(data))

// TODO: задокументировать каждую функцию
// function listContacts() {
// }

// function getContactById(contactId) {
// }

// function removeContact(contactId) {
// }

// function addContact(name, email, phone) {
// }