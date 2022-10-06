const db = require('../db/database')

class sortController { 

    async sort(req, res) {
        const sort = req.body.sort
        try {
            const sortByParam = await db.query(`SELECT * FROM public.music_library ORDER BY ${sort}`)
            console.log(sortByParam.rows)
            res.status(200).json(sortByParam.rows)
        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = new sortController()