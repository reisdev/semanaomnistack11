import { Response, Request, response } from "express";

import DB from "../database";

export default {
    async index(req: Request, res: Response) {
        const ong_id = req.headers.authorization;

        if (!ong_id) return res.status(401).send("Missing Authorization Header")

        const incidents = await DB("incidents").where("ong_id", ong_id).select("*")

        return res.json(incidents)
    }
}