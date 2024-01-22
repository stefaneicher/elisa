import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 31084,
};

export const sampleWithPartialData: IRegion = {
  id: 6527,
  regionName: 'beneath especially globalize',
};

export const sampleWithFullData: IRegion = {
  id: 220,
  regionName: 'huzzah coolly',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
