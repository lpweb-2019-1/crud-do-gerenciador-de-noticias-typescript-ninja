import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ListaDeNoticiasComponent } from "./lista-de-noticias/lista-de-noticias.component";

@NgModule({
  declarations: [AppComponent, ListaDeNoticiasComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
