import prisma from '../config/db.js'

const add = async (req, res) => {

    const result = await prisma.packaging.create({
        data: {
            nom: req.body.nom,
            item: req.body.item,
            X: req.body.X,
            Y: req.body.Y,
            Z: req.body.Z,
        }
    })

    res.json(result)
}

const getAll = async (_req, res) => {

    const result = await prisma.packaging.findMany()

    res.json(result)
}

const getById = async (req, res) => {

    const targetId = parseInt(req.params.packagingId)

    const result = await prisma.packaging.findFirst({
        where: {
            id: targetId
        }
    })

    res.json(result)
}

const edit = async (req, res) => {

    const targetId = parseInt(req.params.packagingId)

    const result = await prisma.packaging.update({
        where: {
            id: targetId
        },
        data: {
            nom: req.body.nom,
            item: req.body.item,
            X: req.body.X,
            Y: req.body.Y,
            Z: req.body.Z,
        },
    })

    res.json(result)
}

const remove = async (req, res) => {

    const targetId = parseInt(req.params.packagingId)

    const result = await prisma.packaging.delete({
        where: {
            id: targetId
        }
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
