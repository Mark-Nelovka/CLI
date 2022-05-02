const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, 'db', 'contacts.json'); // Получаем путь к файлу
console.log(contactsPath)
// Вместо указания кодировки парсим дату
fs.readFile(contactsPath).then(data => console.log(JSON.parse(data)))