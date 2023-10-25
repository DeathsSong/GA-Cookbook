const express = require('express')
const router = express.Router()

//Input models
const Recipe = require('../models/recipe')

//input links from controllers pages 
const {
    showAllRecipes, 
    getRecipeById, 
    createRecipe, 
    deleteRecipeById, 
    updateRecipe,
    sendNewRecipeForm,
    sendEditRecipeForm
} = require('../controllers/recipesController')
const checkAuth = require('../middleware/checkauth')

//-----Routes
router.get('/display', showAllRecipes)
router.get('/createrecipe', sendNewRecipeForm)
router.get('/:id', getRecipeById)
//router.get('/users/:id) to show all recipes by user id?
//Authorization checkpoint
router.use(checkAuth)
router.post('/createrecipe', createRecipe)
router.get('/:id/editrecipe', sendEditRecipeForm)
router.put('/:id/editrecipe', updateRecipe)
router.delete('/:id', deleteRecipeById)

module.exports = router