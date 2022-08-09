const Movie = require('../models/Movie')

class CreateFilm{
    async createfilm(req, res){
        try {
            const createdfilm = new Movie({
                name:req.body.name,
                duration:req.body.duration,
                status:req.body.status,
                premiere:req.body.premiere,
                age:req.body.age,
                country:req.body.country,
                ganres:req.body.ganres,
                translate:req.body.translate,
                voiceActing:req.body.voiceActing,
                director:req.body.director,
                actors:req.body.actors,
                watchUrl:req.body.watchUrl,
                description:req.body.description,
                imgUrl:req.body.imgUrl,
            })
            await createdfilm.save()
            res.json('film create')
        } catch (error) {
            console.log(error)   
            res.status(400).json({message: 'Error film'})
        }
    }
}

module.exports = new CreateFilm()