import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 11151,
};

export const sampleWithPartialData: ICountry = {
  id: 25330,
  countryName: 'while',
};

export const sampleWithFullData: ICountry = {
  id: 11236,
  countryName: 'spoon',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
