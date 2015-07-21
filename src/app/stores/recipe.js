import Reflux from 'reflux';

import recipeActions from 'actions/recipe';
import RecipeModel from 'models/recipe';

export default Reflux.createStore( {

    store: null,

    init() {
        this.store = new RecipeModel();

        this.listenTo( recipeActions.getRecipeById.completed, gotRecipe.bind( this ) );
    },

    getInitialState() {
        return this.store;
    }

    ///public methods

} );

//////////////////////////
//// Private

function gotRecipe( recipe ) {
    this.store.setRecipe( recipe );

    doTrigger.call( this );
}

function doTrigger() {
    this.trigger( this.store );
}