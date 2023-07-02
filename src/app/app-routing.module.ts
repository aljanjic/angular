import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesResolverSerice } from "./recipes/recipes-resolver.service";


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children:[
    { path:'', component: SelectRecipeComponent},
    { path:'new', component: RecipeEditComponent },
    { path:':id', component: RecipeDetailComponent, resolve: [RecipesResolverSerice] },
    { path:':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverSerice]}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports:[
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)

    ],
    exports:[RouterModule]
})

export class AppRoutingModule {}