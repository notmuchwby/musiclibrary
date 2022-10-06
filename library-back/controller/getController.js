const db = require('../db/database')

class getController {     
    async get(req, res) {
        try {   
            const get = await db.query(`SELECT * from public.music_library`)
            if(get.rows.length !== 0) {
                return res.status(200).json(get.rows)
            }
            return res.status(404).json({message: "Ошибка при получении данных."})

        } catch(err) {
            console.log(err)
            return res.status(400).json({message: "Ошибка при получении данных."})
        }
    } 
}

module.exports = new getController()