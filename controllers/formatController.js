import prisma from '../config/db.js'

const add = async (req, res) => {

    const result = await prisma.format.create({
        data: {
            nom: req.body.nom,
            torro: req.body.torro,
            barres: parseInt(req.body.barres),
            cuita: parseFloat(req.body.cuita),
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

const getAllBySeason = async (req, res) => {

    const targetSeason = parseInt(req.params.formatTemporada)

    const result = await prisma.format.findMany({
        where: {
            temporada: targetSeason
        },
        include: {
            packagings: true,
            ingredients: true
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

const getAllBySeasonAndName = async (req, res) => {

    const targetTorro = req.params.formatTorro
    const targetSeason = parseInt(req.params.formatTemporada)

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

    let formats = []
    result.forEach(function(format) {
        let newIngredients = []
        format.ingredients.forEach(function(ingredient) {
            newIngredients.push({
                nom: ingredient.nom,
                quantitat: ingredient.quantitat,
                merme: ingredient.merme,
                pesReal: ingredient.quantitat - ingredient.merme,
                pesTotal: ingredient.quantitat * (format.barres / format.cuita),
                mermeReal: (ingredient.quantitat * (format.barres / format.cuita)) / 100 * 5,
                pesRealReal: (ingredient.quantitat * (format.barres / format.cuita)) - ((ingredient.quantitat * (format.barres / format.cuita)) / 100 * 5)
            })
        })

        newIngredients.push({
            nom: "Total",
            quantitat: newIngredients.reduce((accumulator, currentObject) => { return accumulator + currentObject.quantitat; }, 0),
            merme: newIngredients.reduce((accumulator, currentObject) => { return accumulator + currentObject.merme; }, 0),
            pesReal: newIngredients.reduce((accumulator, currentObject) => { return accumulator + currentObject.pesReal; }, 0),
            pesTotal: newIngredients.reduce((accumulator, currentObject) => { return accumulator + currentObject.pesTotal; }, 0),
            mermeReal: newIngredients.reduce((accumulator, currentObject) => { return accumulator + currentObject.mermeReal; }, 0),
            pesRealReal: newIngredients.reduce((accumulator, currentObject) => { return accumulator + currentObject.pesRealReal; }, 0),
        })

        let newFormats = [
            { format: "Encaixat a", quantitat: format.gramsXcaixo, mesura: "gr/caixo" },
            { format: "Tallat a", quantitat: format.barresXcaixo, mesura: "barres/caixo" },
            { format: "Envasat a", quantitat: format.barresXcaixa, mesura: "gr/caixa" },
            { format: "Caixons", quantitat: newIngredients[newIngredients.length - 1].pesRealReal / format.gramsXcaixo, mesura: "num caixons" },
            { format: "Barres", quantitat: (newIngredients[newIngredients.length - 1].pesRealReal / format.gramsXcaixo) * format.barresXcaixo, mesura: "num barres" },
            { format: "Caixes", quantitat: ((newIngredients[newIngredients.length - 1].pesRealReal / format.gramsXcaixo) * format.barresXcaixo) / format.barresXcaixa, mesura: "num caixes" },
        ]

        let newPackagings = []

        let newFormat = {
            id: format.id,
            nom: format.nom,
            barres: format.barres,
            cuita: format.cuita,
            ingredients: newIngredients,
            formats: newFormats,
            packagings: newPackagings
        }

        formats.push(newFormat)
    })

    res.json(formats)
}

const clean = async (req, res) => {
    const targetId = parseInt(req.params.formatId)

    const result = await prisma.format.update({
        where: {
            id: targetId
        },
        data: {
            ingredients: {
                set: []
            }
        }
    })

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
            barres: parseInt(req.body.barres),
            cuita: parseFloat(req.body.cuita),
            gramsXcaixo: req.body.gramsXcaixo,
            barresXcaixo: req.body.barresXcaixo,
            barresXcaixa: req.body.barresXcaixa,
            packagings: {
                connect: req.body.packagings.map(itemId => ({ id: itemId }))
            },
            ingredients: {
                create: req.body.ingredients.map(ingredient => ({ nom: ingredient.nom, quantitat: ingredient.quantitat, merme: ingredient.merme }))
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
    getAllBySeason,
    getAllBySeasonAndName,
    clean,
    edit,
    remove
}
