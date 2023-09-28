import TaskList from "../models/tache.js"
  // Route pour créer une nouvelle liste de tâches
  export const createTache = async (req, res) => {
    try {
      const newList = new TaskList(req.body);
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Route pour récupérer toutes les listes de tâches
  export const readTache = async (req, res) => {
    try {
      const lists = await TaskList.find();
      res.json(lists);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Route pour récupérer une liste de tâches par son ID
  export const readTacheAll = async (req, res) => {
    try {
      const list = await TaskList.findById(req.params.id);
      if (!list) {
        return res.status(404).json({ error: 'List not found' });
      }
      res.json(list);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Route pour mettre à jour une liste de tâches par son ID
  export const updateTache = async (req, res) => {
    try {
      const updatedList = await TaskList.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedList) {
        return res.status(404).json({ error: 'List not found' });
      }
      res.json(updatedList);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Route pour supprimer une liste de tâches par son ID
  export const deleteTache = async (req, res) => {
    try {
      const deletedList = await TaskList.findByIdAndRemove(req.params.id);
      if (!deletedList) {
        return res.status(404).json({ error: 'List not found' });
      }
      res.json(deletedList);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const listTask = async (req, res) => {
    try {
      const listId = req.params.id;
      const taskData = req.body;
  
      // Find the TaskList by ID
      const list = await TaskList.findById(listId);
  
      if (!list) {
        return res.status(404).json({ error: 'List not found' });
      }
  
      // Create a new task
      const newTask = { ...taskData };
  
      // Add the new task to the TaskList
      list.tasks.push(newTask);
  
      // Save the updated TaskList
      const updatedList = await list.save();
  
      res.status(201).json(updatedList);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}
  
