import express from "express";
import OngController from "./controller/ongController"
import IncidentController from "./controller/incidentController";
import ProfileController from "./controller/profileController"
import SessionController from "./controller/sessionController";

var routes = express.Router();

// ONG routes
routes.get("/ongs", OngController.index)
routes.post("/ongs", OngController.create);

// Incident routes
routes.get("/incidents", IncidentController.index)
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete)

// Profile routes
routes.get("/profile", ProfileController.index)

// Session routes
routes.post("/sessions", SessionController.create)

export default routes;