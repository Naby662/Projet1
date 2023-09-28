import {getMatieres, getMatiereById, createMatiere, updateMatiere, deleteMatiere} from '../controllers/matiere.js';

import express from 'express';
const router = express.Router();

router.get('/', getMatieres);
router.get('/:id', getMatiereById);
router.post('/', createMatiere);
router.patch('/:id', updateMatiere);
router.delete('/:id', deleteMatiere);

export default router;