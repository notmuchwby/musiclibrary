const db = require('../db/database')

class filterController {     

    async filterByArtist(req, res) {
        const artist = req.body.artist 
        console.log(artist)
        try {   
            const filteredArtists = await db.query(`SELECT * from public.music_library where artist = '${artist}'`)

            if(filteredArtists.rows.length !== 0 ) {
                return res.status(200).json(filteredArtists.rows)
            }          
            return res.status(404).json({message: `Исполнитель под именем ${artist} не найден.`})

        } catch(err) {
            console.log(err)
            return res.status(400).json({message: "Ошибка поиска по исполнителю."})
        }
    }

    async filterByGenre(req, res) {
        const genre = req.body.genre 
        console.log(genre)
        try {   
            const filteredGenre = await db.query(`SELECT * from public.music_library where genre = '${genre}'`)

            if(filteredGenre.rows.length !== 0) {
                return res.status(200).json(filteredGenre.rows)
            }
            return res.status(404).json({message: `Жанр ${genre} не был найден.`})

        } catch(err) {
            console.log(err)
            return res.status(400).json({message: "Ошибка поиска по жанру."})
        }
    }

    async filterByYear(req, res) {
        const year = req.body.year
        console.log(year)
        try {
            const filteredYear = await db.query(`SELECT * from public.music_library where year = '${year}'`)

            if(filteredYear.rows.length !== 0) {
                return res.status(200).json(filteredYear.rows)
            }
            return res.status(404).json({message: `Песня выпущенная в ${year} году отсутствует.`})

        } catch(err) {
            console.log(err)
            return res.status(400).json({message: "Ошибка поиска по году."})
        }
    }
    
}

module.exports = new filterController()