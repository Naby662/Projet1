import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: String,
      completed: {
        type: Boolean,
        default: false,
      },
    });
    
    // Schéma pour les listes de tâches
    const taskListSchema =  mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      tasks: [taskSchema], // Relation avec les tâches
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Référence à un modèle utilisateur (pour l'authentification)
        required: true,
      },
    });

    const TaskList = mongoose.model("TaskList",  taskListSchema)

export default TaskList;