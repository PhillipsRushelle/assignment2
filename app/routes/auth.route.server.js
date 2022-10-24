/* About CSS file
Name: Rushelle Phillips
Student Number: 300508161
Date: Oct 22th, 2022 */

import { Router } from "express";
import { DisplayLoginPage, 
    ProcessLoginPage,
    ProcessLogoutPage} 
    from "../controllers/auth.controller.server.js";

const router = Router();

// Display Login Router
router.get('/login', DisplayLoginPage);

// Process Login Page
router.post('/login', ProcessLoginPage);

// Process lougout 
router.get('/logout', ProcessLogoutPage);

export default router;