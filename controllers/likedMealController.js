export const likedMealController = () => {
    const markAsLiked = async (request, response, next) => {
        const { body } = request
        const mealId = Number(body.mealId)
        const userId = Number(body.userId)

        try {
            const likedMeal = await likedMeal.create({ mealId, userId })
            response.status(201).json({ data: likedMeal, success: true, message: 'Meal liked' })
        } catch (error) {
            next(error)
        }
    }

    const getLikedMeals = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const likedMeals = await likedMeal.findMany({ userId })
            response.status(200).json({ data: likedMeals, success: true, message: 'Liked meals found' })
        } catch (error) {
            next(error)
        }
    }

    return {
        markAsLiked,
        getLikedMeals
    }
}