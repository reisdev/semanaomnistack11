import { Request, Response } from "express";
import DB from "../database";

export default {
    async index(req: Request, res: Response) {
        const { page = 1 } = req.query;

        const [count] = await DB("incidents").count()

        res.header("X-Total-Count", count["count(*)"])
        res.header("X-Total-Pages", Math.ceil(Number(count["count(*)"]) / 5).toString())

        const incidents = await DB("incidents")
            .join("ongs", "ongs.id", "=", "incidents.ong_id")
            .limit(5)
            .offset((page - 1) * 5)
            .select(["incidents.*", "ongs.name", "ongs.name", "ongs.city", "ongs.uf"]);

        return res.json(incidents);
    },
    async create(req: Request, res: Response) {
        const { title, description, value } = req.body;

        const ong_id = req.headers.authorization;

        if (!ong_id)
            return res.status(401).send("Missing Authorization Header")

        const [ong] = await DB("ongs").select("*").where({
            id: ong_id
        });

        if (!ong) {
            return res.status(400).send("ONG not found")
        }

        const [id] = await DB("incidents").insert({
            title, description, value, ong_id
        })

        return res.json({ id });
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        if (!ong_id)
            return res.status(401).send("Missing Authorization Header")

        const [ong] = await DB("ongs").select("*").where({
            id: ong_id
        });

        if (!ong) {
            return res.status(400).send("ONG not found")
        }

        const incident = await DB("incidents").where("id", id).select("ong_id").first();

        if (!incident) {
            return res.status(404).send("Incident not found")
        }

        if (incident.ong_id !== ong_id) {
            return res.status(401).json({ error: "Operation not permitted" })
        }

        await DB("incidents").where("id", id).delete();

        return res.status(204).send();
    }
}
