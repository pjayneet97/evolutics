import {KeycloakService} from "keycloak-angular";
import {environment} from "../../environments/environment";

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloakBaseUrl,
        realm: environment.keycloakRealm,
        clientId: environment.keycloakClientId
      }
      ,
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
        checkLoginIframe: false,
      },

      loadUserProfileAtStartUp: true,

      bearerExcludedUrls: ['/assets', '/clients/public'],
    });
}
