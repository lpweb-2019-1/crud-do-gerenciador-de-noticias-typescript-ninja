export default class Noticia {
  id: number;
  titulo: string;
  conteudo: string;

  categoria: string;
  tags: string;
  editoria: string;

  data_atual: any;
  visivel: boolean;
  data?: any;
  publicado?: string;
  constructor(
    id: number,
    titulo: string,
    conteudo: string,
    data_atual: any,
    visivel: boolean,
    categoria: string,
    tags: string,
    editoria: string,
    data?: any,
    publicado?: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.data_atual = data_atual;
    this.visivel = visivel;
    this.categoria = categoria;
    this.tags = tags;
    this.editoria = editoria;
    this.data = data;
    this.publicado = publicado;
  }
  public getTitulo = (): string => this.titulo;
  public setTitulo = (titulo: string): string => (this.titulo = titulo);

  public getConteudo = (): string => this.conteudo;
  public setConteudo = (conteudo: string): string => (this.conteudo = conteudo);

  public getCategoria = (): string => this.categoria;
  public setCategoria = (categoria: string): string =>
    (this.categoria = categoria);
}
