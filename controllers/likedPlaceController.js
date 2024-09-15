export const likedPlaceController = () => {
    const markAsLiked = async (request, response, next) => {
        const { body } = request
        const placeId = Number(body.placeId)
        const userId = Number(body.userId)

        try {
            const likedPlace = await likedPlace.create({ placeId, userId })
            response.status(201).json({ data: likedPlace, success: true, message: 'Place liked' })
        } catch (error) {
            next(error)
        }
    }

    const getLikedPlaces = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const likedPlaces = await likedPlace.findMany({ userId })
            response.status(200).json({ data: likedPlaces, success: true, message: 'Liked places found' })
        } catch (error) {
            next(error)
        }
    }

    return {
        markAsLiked,
        getLikedPlaces
    }
}