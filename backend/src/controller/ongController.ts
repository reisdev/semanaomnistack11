import { Request, Response } from "express";
import crypto from "crypto";
import DB from "../database";

export default {
    async index(req: Request, res: Response) {
        const ongs = await DB("ongs").select("*")
        return res.json(ongs);
    },
    async create(req: Request, res: Response) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString("HEX");

        const ong = await DB("ongs").insert({
            id, name, email, whatsapp, city, uf
        })

        return res.json({ id });
    }
}