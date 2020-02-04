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
      trailerUrl: './assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      coverUrl: 'assets/images/guardios-da-galaxia.jpg',
      coverAlt: 'Alt titulo 1',
      name: 'Guardiões da Galaxia 1',
      relevance: 98,
      age: 0,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'viagem no espaço'],
    },
    {
      trailerUrl: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      coverUrl: 'assets/images/guardios-da-galaxia.jpg',
      coverAlt: 'Alt titulo 2',
      name: 'Guardiões da Galaxia 2',
      relevance: 80,
      age: 12,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'viagem no espaço'],
    },
    {
      trailerUrl: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      coverUrl: 'assets/images/guardios-da-galaxia.jpg',
      coverAlt: 'Alt titulo 3',
      name: 'Guardiões da Galaxia 3',
      relevance: 80,
      age: 14,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'viagem no espaço'],
    },
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
