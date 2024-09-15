import httpStatus from '../helpers/httpStatus.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const movieController = (movies) => {
  const getMovies = async (request, response, next) => {
    const { query } = request

    try {
      const movies = await prisma.movie.findMany({
        where: {
          title: {
            contains: query?.title ?? ''
          }
        }
      })

      return response.status(httpStatus.OK).json(movies)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const getMovieById = async (request, response, next) => {
    const { id } = request.params
    const movieId = Number(id)

    try {
      const movie = await prisma.movie.findUnique({
        where: {
          id: movieId
        }
      })
      const responseFormat = {
        data: movie,
      }
      return response.status(httpStatus.OK).json(responseFormat)

    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const createMovie = async (request, response, next) => {
    const newMovie = request.body

    try {
      const createdMovie = await prisma.movie.create({
        data: newMovie
      })

      const responseFormat = {
        data: createdMovie,
        message: 'Movie created successfully'
      }

      return response.status(httpStatus.CREATED).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const deleteMovieById = async (request, response, next) => {
    const { id } = request.params
    const movieId = Number(id)

    try {
      const movie = await prisma.movie.delete({
        where: {
          id: movieId
        }
      })
      const responseFormat = {
        data: movie,
        message: 'Movie deleted successfully'
      }
      return response.status(httpStatus.OK).json(responseFormat)

    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const updateMovieById = async (request, response, next) => {
    const { id } = request.params
    const movieId = Number(id)
    const newMovieData = request.body
    try {
      const movie = await prisma.movie.update({
        where: {
          id: movieId
        },
        data: newMovieData
      })

      return response.status(httpStatus.OK).json(movie)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  return {
    getMovies,
    getMovieById,
    createMovie,
    deleteMovieById,
    updateMovieById
  }
}