import { Component} from "@angular/core";

const VALUES = [ 
    "Hello World", 
    "Привет Мир",
    "Привіт Світ", 
    "Hola Mundo", 
    "Bonjour le monde", 
    "Hallo Welt", 
    "Ciao mondo", 
    "Witaj świecie", 
    "Hej världen", 
    "Pozdravljen, svet", 
    "Прывітанне Сусвет"
]; 

@Component({
    selector: "my-app",
    styleUrls: ["app/app.component.css"]
    templateUrl: "app/app.component.html",
})
export class AppComponent {
    Values = VALUES;
    selectedPhrase: string;

    onSelect(selected: string) {
        this.selectedPhrase = selected;
    }
}