/* About CSS file
Name: Rushelle Phillips
Student Number: 300508161
Date: Oct 22th, 2022 */

//import models object from db
import contactsModel from '../models/contacts.js';
//import utility functions
import { UserDisplayName } from '../utils/index.js';

//BC list (sorted by name)
export function DisplayContactsList(req, res, next){
    contactsModel.find(function(err, contactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Business Contact List', page: 'contacts/list', contacts: contactsCollection, displayName: UserDisplayName(req)});
    }).sort({"name":1})//Sort list by name
}

//Add button redirects to Add page (contacts there's no collection(empty)
export function DisplayContactsAddPage(req, res, next){
    res.render('index', { title: 'Add Contact', page: 'contacts/update', contacts: {}, displayName: UserDisplayName(req) });
}

//Add page (using user input and adding them to contacts collection after using Submit button)
export function ProcessContactsAddPage(req, res, next){
    
    let newContacts = contactsModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    contactsModel.create(newContacts, (err, Contacts) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contacts-list')//redirect to BC list page
    } )
}

//Update button redirects to Update page (display contacts object)
export function DisplayContactsUpdatePage(req, res, next){
    let id = req.params.id;

    contactsModel.findById(id, (err, contacts) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Update Contact', page: 'contacts/update', contacts: contacts, displayName: UserDisplayName(req) });
    });    
}

//Update page (edit all parameters after clicking the Submit button)
export function ProcessContactsUpdatePage(req, res, next){

    let id = req.params.id;
    
    //request and edit new object
    let newContacts = contactsModel({
        _id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    //update mongodb
    contactsModel.updateOne({_id: id }, newContacts, (err, Contacts) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contacts-list')//redirect to BC list page
    } )
}

//Delete button using remove function
export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactsModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contacts-list');
    })
}