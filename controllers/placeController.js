export const placeController = () => {
    const getPlaces = async (request, response, next) => {
        const { query } = request;
        try {
            response.status(200).json({ success: true, message: 'Places found' });
        } catch (error) {
            next(error);
        }
    };

    const createPlace = async (request, response, next) => {
        const newPlace = request.body;
        try {
            response.status(201).json({ data: newPlace, success: true, message: 'Place created' });
        } catch (error) {
            next(error);
        }
    };

    const getPlaceById = async (request, response, next) => {
        const { id } = request.params;
        const placeId = Number(id);
        try {
            const place = await Place.findById(placeId);
            response.status(200).json({ data: placeId, success: true, message: 'Place found' });
        } catch (error) {
            next(error);
        }
    };

    const deletePlaceById = async (request, response, next) => {
        const { id } = request.params;
        const placeId = Number(id);
        try {
            const place = await Place.findByIdAndDelete(placeId);
            response.status(200).json({ data: placeId, success: true, message: 'Place deleted' });
        } catch (error) {
            next(error);
        }
    };

    const updatePlaceById = async (request, response, next) => {
        const { id } = request.params;
        const placeId = Number(id);
        const newPlace = request.body;
        try {
            const place = await Place.findByIdAndUpdate(placeId, newPlace);
            response.status(200).json({ data: newPlace, success: true, message: 'Place updated' });
        } catch (error) {
            next(error);
        }
    };

    return {
        getPlaces,
        createPlace,
        getPlaceById,
        deletePlaceById,
        updatePlaceById
    };
};
