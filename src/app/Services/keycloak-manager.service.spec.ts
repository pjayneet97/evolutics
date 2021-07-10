import { TestBed } from '@angular/core/testing';

import { KeycloakManagerService } from './keycloak-manager.service';

describe('KeycloakManagerService', () => {
  let service: KeycloakManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloakManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
