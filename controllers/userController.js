
export const userController = () => {
    const register = async (request, response, next) => {
        const newUser = request.body

        try {
            response.status(201).json({ data: newUser, success: true, message: 'User created' })
        } catch (error) {
            next(error)
        }

    }
    const login = async (request, response, next) => {
        const { email, password } = request.body

        try {

        } catch (error) {
            next(error)
        }
    }
    const profile = async (request, response, next) => {
        const { id } = request.params
        const userId = Number(id)
        try {
            const user = await user.findbyId(userId)
            response.status(200).json({ data: user, success: true, message: 'User profile' })
        } catch (error) {
            next(error)
        }
    }
    return {
        register,
        login,
        profile
    }
}  