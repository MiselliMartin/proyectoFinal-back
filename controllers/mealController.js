export const mealController = () => {
    const getMeals = async (request, response, next) => {
        const { query } = request;
        try {
            response.status(200).json({ success: true, message: 'Meals found' });
        } catch (error) {
            next(error);
        }
    };

    const createMeal = async (request, response, next) => {
        const newMeal = request.body;
        try {
            response.status(201).json({ data: newMeal, success: true, message: 'Meal created' });
        } catch (error) {
            next(error);
        }
    };

    const getMealById = async (request, response, next) => {
        const { id } = request.params;
        const mealId = Number(id);
        try {
            const meal = await meal.findById(mealId);
            response.status(200).json({ data: mealId, success: true, message: 'Meal found' });
        } catch (error) {
            next(error);
        }
    };

    const deleteMealById = async (request, response, next) => {
        const { id } = request.params;
        const mealId = Number(id);
        try {
            const meal = await meal.findByIdAndDelete(mealId);
            response.status(200).json({ data: mealId, success: true, message: 'Meal deleted' });
        } catch (error) {
            next(error);
        }
    };

    const updateMealById = async (request, response, next) => {
        const { id } = request.params;
        const mealId = Number(id);
        const newMeal = request.body;
        try {
            const meal = await meal.findByIdAndUpdate(mealId, newMeal);
            response.status(200).json({ data: newMeal, success: true, message: 'Meal updated' });
        } catch (error) {
            next(error);
        }
    };

    return {
        getMeals,
        createMeal,
        getMealById,
        deleteMealById,
        updateMealById
    };
};
