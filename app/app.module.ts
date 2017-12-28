import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule } from '@angular/forms';


import { GroceriesComponent } from "./Groceries/Groceries";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        GroceriesComponent
    ],
    bootstrap:[
        AppComponent,
        GroceriesComponent
    ]
})

export class AppModule{

}