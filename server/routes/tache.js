import {readTacheAll, readTache, createTache, updateTache, deleteTache, listTask} from '../controllers/tache.js';

import express from 'express';
const router = express.Router();

router.get('/', readTache);
router.get('/:id', readTacheAll);
router.post('/', createTache);
router.patch('/:id', updateTache);
router.delete('/:id', deleteTache);
router.post('/:id', listTask);

export default router;