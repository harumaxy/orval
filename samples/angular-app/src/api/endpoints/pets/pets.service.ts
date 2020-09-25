/*
 * Generated by orval v2.5.9 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPetsApiService } from './pets.definition';
import { ListPetsParams, Pet, Pets } from '../../model';

@Injectable()
export class PetsApiService implements IPetsApiService {
  constructor(private http: HttpClient) {}
  listPets(params?: ListPetsParams, version = 1): Observable<Pets> {
    type Mutator = <T>(url: string, config?: T) => [string, T | undefined];

    const mutator: Mutator = (url, config) => [
      url,
      { ...config, responseType: 'json' },
    ];

    return this.http.get<Pets>(
      ...mutator(`/v${version}/pets`, {
        params,
      }),
    );
  }
  createPets(version = 1): Observable<unknown> {
    return this.http.post<unknown>(`/v${version}/pets`, undefined);
  }
  showPetById(petId: string, testId: string, version = 1): Observable<Pet> {
    return this.http.get<Pet>(`/v${version}/pets/${petId}/test/${testId}`);
  }
}