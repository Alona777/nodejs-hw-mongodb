import { Router } from 'express';
import { getContactsController } from '../controllers/contacts.js';
import { getContactByIdControlller } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';


const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdControlller));

export default router;
