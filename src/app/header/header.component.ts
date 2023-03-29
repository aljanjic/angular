import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    @Output() recipesEmitter = new EventEmitter<any>();
    @Output() shoppingListEmitter = new EventEmitter<any>();



    onRecipes(){
        this.recipesEmitter.emit();
    }

    onShoppingList(){
        this.shoppingListEmitter.emit();
    }

}