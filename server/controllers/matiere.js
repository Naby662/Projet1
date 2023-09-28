import Matiere from "../models/tache.js";

export const getMatieres = async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;
  try {
    const matiers = await Matiere.find().skip(skip).limit(limit);
    const response = { page, limit, data: matiers };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMatiereById = async (req, res) => {
    const {id} = req.params
  try {
    const matiere = await Matiere.findById(id);
    res.status(200).json(matiere);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMatiere = async (req, res) => {
  const matiere = req.body;
  const newMatiere = new Matiere({ ...matiere });
  try {
    await newMatiere.save();
    res.status(201).json(newMatiere);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMatiere = async (req, res) => {
  const { id } = req.params;
  const matiere = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Matiere with that id");
  try {
    const updateMatiere = await Matiere.updateById(id, matiere, { new: true });
    res.status(200).json(updateMatiere);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMatiere = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No matiere with that id");
  try {
    await Matiere.findByIdAndDelete(id);
    res.status(200).json({ message: "Matiere deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
