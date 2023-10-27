import prisma from '../config/db.js'

const add = async (req, res) => {

    const result = await prisma.format.create({
        data: {
            nom: req.body.nom,
            torro: req.body.torro,
            gramsXcaixo: req.body.gramsXcaixo,
            barresXcaixo: req.body.barresXcaixo,
            barresXcaixa: req.body.barresXcaixa,

            ingredients: {
                create: req.body.ingredients.map(ingredient => ({ nom: ingredient.nom, quantitat: ingredient.quantitat, merme: ingredient.merme }))
            },

            packagings: {
                connect: req.body.packagings.map(nomPackaging => ({ nom: nomPackaging.nom }))
            },

            temporada: req.body.temporada,
        },
        include: {
            ingredients: true,
            packagings: true
        }
    })

    res.json(result)
}

const getAll = async (_req, res) => {

    const result = await prisma.format.findMany({
        include: {
            packagings: true
        }
    })

    res.json(result)
}

const getById = async (req, res) => {

    const targetId = parseInt(req.params.formatId)

    const result = await prisma.format.findFirst({
        where: {
            id: targetId
        }
    })

    res.json(result)
}

const getByName = async (req, res) => {

    const targetNom = req.params.formatNom

    const result = await prisma.format.findMany({
        where: {
            nom: targetNom
        }
    })

    res.json(result)
}

const getByNameAndSeason = async (req, res) => {

    const targetTorro = req.params.formatTorro
    const targetSeason = parseInt(req.params.formatTemporada)
    console.log(targetSeason, targetTorro)

    const result = await prisma.format.findMany({
        where: {
            torro: targetTorro,
            temporada: targetSeason
        },
        include: {
            packagings: true,
            ingredients: true
        }
    })

    console.log(result)

    res.json(result)
}

const edit = async (req, res) => {

    const targetId = parseInt(req.params.formatId)

    const result = await prisma.format.update({
        where: {
            id: targetId
        },
        data: {
            nom: req.body.nom,
            torro: req.body.torro,
            gramsXcaixo: req.body.gramsXcaixo,
            barresXcaixo: req.body.barresXcaixo,
            barresXcaixa: req.body.barresXcaixa,
            packagings: {
                connect: req.body.packagings.map(itemId => ({ id: itemId }))
            },
            ingredients: {
                connect: req.body.ingredients.map(itemId => ({ id: itemId }))
            },
            temporada: req.body.temporada,
        },
    })

    res.json(result)
}

const remove = async (req, res) => {

    const targetId = parseInt(req.params.formatId)

    const result = await prisma.format.delete({
        where: {
            id: targetId
        },
    })

    res.json(result)
}

export {
    add,
    getAll,
    getById,
    getByName,
    getByNameAndSeason,
    edit,
    remove
}
