import { Component, OnInit } from '@angular/core';
import {KeycloakManagerService} from "../../Services/keycloak-manager.service";

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  username:string = ""
  constructor(private _keycloakManagerService : KeycloakManagerService) {
    this.username = _keycloakManagerService.getUserName()
  }

  ngOnInit(): void {
  }

  signOut(){
    this._keycloakManagerService.signOut().then()
  }

}
