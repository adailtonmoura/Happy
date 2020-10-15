import { Router } from "express";
import multer from "multer";

import uploadConfig from './config/upload'
import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();

const upload = multer(uploadConfig);

routes.post("/orphanages", upload.array('images'), OrphanagesController.create);
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id",OrphanagesController.show);

export default routes;


// {
// 	"name": "Lar das Meninas",
// 	"latitude": -10.893912,
// 	"longitude": -37.093448,
// 	"about": "Sobre o orfanato2",
// 	"instructions": "Venha visistar",
// 	"opening_hours": "Das 8h às 18h",
// 	"open_on_weekends": true
// }