/* About CSS file
Name: Rushelle Phillips
Student Number: 300508161
Date: Oct 22th, 2022 */

//Index Routes
import { Router } from 'express';
import { displayHomePage, 
         displayAboutPage,
         displayProjectsPage,
         displayServicesPage,
         displayContactPage } from '../controllers/index.controller.server.js'

//Instatiate the router
const router = Router();

//add middleware to connect application
router.get('/',displayHomePage);
router.get('/home',displayHomePage);
router.get('/about',displayAboutPage);
router.get('/projects',displayProjectsPage);
router.get('/services',displayServicesPage);
router.get('/contact',displayContactPage);

export default router;