// export const listTask= async (req, res) => {
//     try {
//       const listId = req.params.id;
//       const taskData = req.body;
  
//       // Find the TaskList by ID
//       const list = await TaskList.findById(listId);
  
//       if (!list) {
//         return res.status(404).json({ error: 'List not found' });
//       }
  
//       // Create a new task
//       const newTask = { ...taskData };
  
//       // Add the new task to the TaskList
//       list.tasks.push(newTask);
  
//       // Save the updated TaskList
//       const updatedList = await list.save();
  
//       res.status(201).json(updatedList);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
// }