import userModel from '../schemas/user.schema.js'

export const addFavorite = async (req, resp) => {
    const { id, name } = req.body
    const userID = req.user.id
    try {
        const exist = await userModel.find({ favorites: { id } })
        const dataAdded = await userModel.findByIdAndUpdate(userID, {
            $push: {
                favorites: {
                    id, name
                }
            }
        })
        return resp.json({ favorites: dataAdded.favorites })
    }
    catch (err) {
        console.log(err)
    }
}
export const deleteOneFavorite = async (req, resp) => {
    const userID = req.user.id
    try {
        const deletedUser = await userModel.findByIdAndUpdate(userID, {
            $pull: {
                favorites: { id: req.params.id }
            }
        })
        resp.json({ favoriteDeleted: deletedUser.favorites })
    } catch (err) {
        console.log(err)
    }
}
export const getFavotites = async (req, resp) => {
    const userID = req.user.id

    try {
        const data = await userModel.findById(userID)
        resp.json({ favorites: data.favorites })
    }
    catch (err) {
        console.log(err)
    }

}
