import express from "express";
import KPI from "../models/KPI.js";
// using mongoose to fetch data from the database
const kpirouter = express.Router();

kpirouter.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}); 

export default kpirouter;