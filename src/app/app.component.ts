import { Component } from "@angular/core";
import Noticia from "./noticia.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  selecionado: any = null;

  id: number = 0;
  titulo: string;
  conteudo: string;
  visivel: boolean = false;
  publicado: string;
  alterando: any = null;
  data_atual: any = new Date().toDateString();
  data: any;
  categoria: string;
  tags: string = null;
  editoria: string = null;

  noticias = JSON.parse(localStorage.getItem("Noticias")) || [];

  constructor() {
    this.noticias.map(
      (noticia: any): void | object =>
        noticia.visivel == true ? this.fechar(noticia) : null
    );
  }

  selecionar(noticia: object) {
    this.selecionado = noticia;
  }

  mostrar = (noticia: any): boolean => (noticia.visivel = true);

  fechar = (noticia: any): any => {
    noticia.visivel = false;
    noticia.excluido == true ? (noticia.excluido = false) : noticia.excluido;
    return this.limpar();
  };

  salvar(): void {
    if (this.alterando) {
      this.alterando.titulo = this.titulo;
      this.alterando.conteudo = this.conteudo;
    } else {
      const noticia = new Noticia(
        (this.id = Math.random()),
        this.titulo,
        this.conteudo,
        this.data_atual,
        this.visivel,
        this.categoria,
        this.tags,
        this.editoria,
        this.isData(),
        this.publica()
      );
      this.noticias.push(noticia);
      this.isSalvar();
    }
    this.limpar();
  }

  excluir(id: number) {
    this.noticias = this.noticias.filter(
      (noticia: any): any => noticia.id != id
    );
    return this.limpar();
  }
  isExcluir = (noticia: any): void => {
    if (
      confirm(
        'Tem certeza que deseja excluir a noticia "' + noticia.titulo + '" ?'
      )
    )
      this.noticias = this.noticias.filter(
        (item: any): any => item.id != noticia.id
      );
    this.isSalvar();
    this.limpar();
  };
  alterar(noticia): void {
    this.titulo = noticia.titulo;
    this.conteudo = noticia.conteudo;
    this.alterando = noticia;
  }
  limpar(): void | boolean {
    if (this.alterando) {
      this.titulo = null;
      this.conteudo = null;
      this.alterando = null;
    } else {
      this.titulo = null;
      this.conteudo = null;
    }
    this.visivel ? (this.visivel = false) : null;
  }
  isData = (): string => {
    const nova_data = new Date(this.data);
    return `${nova_data.getDate() + 1} ${nova_data.toLocaleDateString("Data", {
      month: "short",
      year: "numeric"
    })}`;
  };
  publica = (): string => {
    let is_data = new Date(this.data).toDateString();
    return this.data_atual >= is_data ? "Sim" : "Não";
  };

  isSalvar = (): void =>
    localStorage.setItem("Noticias", JSON.stringify(this.noticias));
}
