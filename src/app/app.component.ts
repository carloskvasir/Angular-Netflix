import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  menuOpened: boolean = false;

  listTitles = [
    {
      trailerUrl: 'assets/videos/capitao_america_guerra_civil_1080p.mp4',
      coverUrl: 'assets/images/vingadores-era-de-ultron.jpg',
      coverAlt: 'Capitão America - Guerra Civil banner',
      name: 'Capitão America - Guerra Civil',
      relevance: 98,
      age: 0,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia'],
    },
    {
      trailerUrl: 'assets/videos/capitao_america_o_primeiro_vingador_trailer__360p.mp4',
      coverUrl: 'assets/images/capitao-america-o-primeiro-vingador.jpg',
      coverAlt: 'Capitão America - O primeiro vingador banner',
      name: 'Capitão America - O primeiro vingador',
      relevance: 80,
      age: 12,
      parts: 2,
      categories: ['Épico', 'viagem no espaço'],
    },
    /*
   {
      trailerUrl: 'assets/videos/homem_de_ferro_3_trailer_oficial_1080p.mp4',
      coverUrl: 'assets/images/homem-de-ferro.jpg',
      coverAlt: 'Homem de Ferro 3 banner',
      name: 'Homem de Ferro 3',
      relevance: 80,
      age: 14,
      parts: 2,
      categories: ['Filme de fantasia', 'viagem no espaço'],
    },
    {
      trailerUrl: 'assets/videos/Iron-Man_2_Official_Trailer.mp4',
      coverUrl: 'assets/images/homem-de-ferro-2.jpg',
      coverAlt: 'Homem de Ferro 2 banner',
      name: 'Homem de Ferro 2',
      relevance: 80,
      age: 14,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia'],
    },
    */
    {
      trailerUrl: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      coverUrl: 'assets/images/guardios-da-galaxia.jpg',
      coverAlt: 'Alt titulo 4',
      name: 'Guardiões da Galaxia 4',
      relevance: 55,
      age: 18,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'viagem no espaço'],
    }
  ];

  setMenuStage(state: boolean) {
    this.menuOpened = state;
  }

  closeMenu() {
    this.menuOpened = false;
  }
}
