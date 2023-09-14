import prisma from '../config/db.js'

const add = async (_req, res) => {

    const result = await prisma.torro.create({
        data: {
            nom: "TEST",
            ingredients: {
                create: {
                    nom: "ingredient1"
                }
            }
        },
        include: {
            ingredients: true
        }
    })

    res.json(result)
}

const getAll = async (_req, res) => {

    const result = await prisma.torro.findMany({
        include: {
            ingredients: true
        }
    })

    res.json(result)
}

const getById = async (req, res) => {

    const targetId = parseInt(req.params.torroId)

    const result = await prisma.torro.findFirst({
        where: {
            id: targetId
        }
    })

    res.json(result)
}

const addIngredient = async (req, res) => {

    const targetId = parseInt(req.params.torroId)
    const targetIngredientId = parseInt(req.query.ingredientId)

    const result = await prisma.torro.update({
        where: { id: targetId },
        data: {
            ingredients: {
                connect: {
                    id: targetIngredientId
                }
            }
        },
        include: {
            ingredients: true
        }
    })

    res.json(result)
}

const addNewIngredient = async (req, res) => {

    const targetId = parseInt(req.params.torroId)

    const result = await prisma.torro.update({
        where: { id: targetId },
        data: {
            ingredients: {
                create: {
                    nom: "ingredient1"
                }
            }
        },
        include: {
            ingredients: true
        }
    })

    res.json(result)
}


export {
    add,
    getAll,
    getById,
    addIngredient,
    addNewIngredient
}
