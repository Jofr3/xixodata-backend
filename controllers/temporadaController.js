import prisma from '../config/db.js'

const add = async (req, res) => {

    const result = await prisma.temporada.create({
        data: {
            any: req.body.any
        },
        include: {
            items: true
        }
    })

    res.json(result)
}

const getAll = async (_req, res) => {

    const result = await prisma.temporada.findMany({
        include: {
            items: {
                include: {
                    torro: true,
                    format: true
                }
            }
        }
    })

    res.json(result)
}

const getById = async (req, res) => {

    const targetId = parseInt(req.params.temporadaId)

    const result = await prisma.temporadaId.findFirst({
        where: {
            id: targetId
        }
    })

    res.json(result)
}

const edit = async (req, res) => {

    const targetId = parseInt(req.params.temporadaId)

    const result = await prisma.temporada.update({
        where: {
            id: targetId
        },
        data: {
            any: req.body.any
        }
    })

    res.json(result)
}

const remove = async (req, res) => {

    const targetId = parseInt(req.params.temporadaId)

    const result = await prisma.temporada.delete({
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
