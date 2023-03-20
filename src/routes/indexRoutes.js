import { Router } from "express";
import { createCelulares, deleteCelulares, editCelulares, renderCelulares, statusCelulares, updateCelulares } from "../controllers/celularController";

const router = Router();


//IMPORTACIONES PARA COLECCION CELULAR
router.get("/", renderCelulares);
router.post("/celulares/agregar",createCelulares );
router.get("/updateCelular/:id", editCelulares);
router.post("/updateCelular/:id", updateCelulares);
router.get("/deleteCelular/:id", deleteCelulares);
router.get("/statusCelular/:id", statusCelulares);


export default router;
