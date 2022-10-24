/* About CSS file
Name: Rushelle Phillips
Student Number: 300508161
Date: Oct 22th, 2022 */

import { Router } from "express";

import { DisplayContactsList, 
    DisplayContactsAddPage, 
    ProcessContactsAddPage, 
    DisplayContactsUpdatePage, 
    ProcessContactsUpdatePage, 
    ProcessContactsDelete } from "../controllers/contacts.controller.server.js";
import { AuthGuard } from "../utils/index.js";

const router = Router();

//The AuthGuard function allows only authorized users to view the below pages, otherwise they will be redirected back to the Login View 
router.get('/contacts-list', AuthGuard, DisplayContactsList);
router.get('/contacts-add', AuthGuard, DisplayContactsAddPage);
router.post('/contacts-add', AuthGuard, ProcessContactsAddPage);
router.post('/contacts-update/:id', AuthGuard, ProcessContactsUpdatePage);
router.get('/contacts-update/:id', AuthGuard, DisplayContactsUpdatePage);
router.get('/contacts-delete/:id', AuthGuard, ProcessContactsDelete);

export default router;