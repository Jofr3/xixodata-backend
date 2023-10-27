import prisma from '../config/db.js'

const add = async (req, res) => {

    const result = await prisma.ingredient.create({
        data: {
            nom: req.body.nom,
            quantitat: req.body.quantitat,
            merme: req.body.merme,
            format: formatId && { connect: { id: req.body.formatId } },
        }
    })

    res.json(result)
}

const getAll = async (_req, res) => {

    const result = await prisma.ingredient.findMany()

    res.json(result)
}

const getById = async (req, res) => {

    const targetId = parseInt(req.params.ingredientId)

    const result = await prisma.ingredient.findUnique({
        where: {
            id: targetId
        }
    })

    res.json(result)
}

const edit = async (req, res) => {

    const targetId = parseInt(req.params.ingredientId)

    const result = await prisma.ingredient.update({
        where: {
            id: targetId
        },
        data: {
            nom: req.body.nom,
            quantitat: req.body.quantitat,
            merme: req.body.merme,
            format: formatId && { connect: { id: req.body.formatId } },
        },
    })

    res.json(result)
}

const remove = async (req, res) => {

    const targetId = parseInt(req.params.ingredientId)

    const result = await prisma.ingredient.delete({
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
    edit,
    remove
}
