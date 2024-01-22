import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 17752,
};

export const sampleWithPartialData: ILocation = {
  id: 27481,
  streetAddress: 'nor',
  postalCode: 'petty across bonding',
  city: 'New Stanton',
};

export const sampleWithFullData: ILocation = {
  id: 18940,
  streetAddress: 'until supposing workplace',
  postalCode: 'SUV placode',
  city: 'West Krystinaside',
  stateProvince: 'shrilly rethink',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
