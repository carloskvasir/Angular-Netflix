import { OnInit, Component } from "@angular/core";

@Component({
  selector: "app-nav-bar", // <app-nav-bar/>
  templateUrl: "./nav-bar.compont.html", // Onde esta o html
  styleUrls: ["./nav-bar.compont.scss"] // Estilo desse component
})
export class NavBarComponent implements OnInit {
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toogle() {
    this.opened = !this.opened;
  }
}
