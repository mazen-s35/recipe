import { createStore } from 'vuex'

export default createStore({
    state: {
        recipes: [{
                slug: 'mazen-ashraf',
                title: 'Mazen Ashraf',
                description: 'A description curry made with chicken',
                ingredients: [
                    '1 tablespoon olive oil',
                    '1 tablespoon olive oil',
                    '2 tablespoon olive oil',
                    '1 tablespoon curry oil',
                ],
                method: [
                    'heat oil in a large skillet over medium heat',
                    'add onion and garlic and cook, stirring',
                    'add onion and garlic and cook, stirring',
                    'add onion and garlic and cook, stirring',
                ]
            },
            {
                slug: 'marwan',
                title: 'Marwan',
                description: 'A description curry made with chicken',
                ingredients: [
                    '1 tablespoon olive oil',
                    '1 tablespoon olive oil',
                    '2 tablespoon olive oil',
                    '1 tablespoon curry oil',
                ],
                method: [
                    'heat oil in a large skillet over medium heat',
                    'add onion and garlic and cook, stirring',
                    'add onion and garlic and cook, stirring',
                    'add onion and garlic and cook, stirring',
                ]
            }
        ]
    },
    mutations: {
        ADD_RECIPE(state, recipe) {
            state.recipes.push(recipe)
        }
    }
})