import { Router } from 'express';
import {
  getContactsController,
  getContactByIdControlller,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';

import {
  createContactsSchema,
  updateContactsSchema,
} from '../validation/contacts.js';

import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);


router.get('/', ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdControlller),
);

router.post(
  '/contacts',
  validateBody(createContactsSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactsSchema),
  ctrlWrapper(patchContactController),
);

router.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default router;
