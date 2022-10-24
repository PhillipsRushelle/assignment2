/* About CSS file
Name: Rushelle Phillips
Student Number: 300508161
Date: Oct 22th, 2022 */

import mongoose from "mongoose"

const Schema = mongoose.Schema;

const ContactsSchema = new Schema({//json object
    //parameters: properties
    name: String,
    phone: String,
    email: String,
}, {
    //parameters: options
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactsSchema);