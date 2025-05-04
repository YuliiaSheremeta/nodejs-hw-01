import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {

let data = [];
    try {
        const fileContent = await fs.readFile(PATH_DB, 'utf-8');
        data = JSON.parse(fileContent);

    } catch (error) {
        console.log(error);
        return;
    }
    const newContacts = [];
    for (let i = 0; i < number; i++){
        const contact = createFakeContact();
        newContacts.push(contact);
    }

    const updatedData = [...data, ...newContacts];

    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2), 'utf-8');
    } catch (error) {
        console.error(error);
    }
};



generateContacts(5);
