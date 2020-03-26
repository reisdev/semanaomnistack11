import { Request, Response } from 'express'

import DB from "../database";

export default {
    async create(req: Request, res: Response) {
        const { id } = req.body;

        const ong = await DB("ongs").where("id", id).select("name").first();

        if (!ong) {
            return res.status(400).json({ error: "No ONG found with this ID" })
        }

        return res.json(ong)
    }
}