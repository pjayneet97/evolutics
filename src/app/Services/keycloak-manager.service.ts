import {Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class KeycloakManagerService {

  constructor(private _keycloakService: KeycloakService) {
  }

  getUserName(): string {
    return this._keycloakService.getUsername()
  }

  signOut() {
    return this._keycloakService.logout()
  }
}
