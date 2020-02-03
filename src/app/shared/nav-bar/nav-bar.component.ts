import { OnInit, Component } from "@angular/core";

@Component({
  selector: "app-nav-bar", // <app-nav-bar/>
  templateUrl: "./nav-bar.compont.html", // Onde esta o html
  styleUrls: ["./nav-bar.compont.scss"] // Estilo desse component
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
