import prisma from '../config/db.js'

const add = async (_req, res) => {

    const result = await prisma.ingredient.create({
        data: {
            nom: "TEST",
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

    const result = await prisma.ingredient.findFirst({
        where: {
            id: targetId
        }
    })

    res.json(result)
}

export {
    add,
    getAll,
    getById
}
