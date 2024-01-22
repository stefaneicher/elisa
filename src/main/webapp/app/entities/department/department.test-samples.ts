import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 9511,
  departmentName: 'circa yahoo',
};

export const sampleWithPartialData: IDepartment = {
  id: 20069,
  departmentName: 'dope amidst whenever',
};

export const sampleWithFullData: IDepartment = {
  id: 28703,
  departmentName: 'farrow upward well',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'modify honored',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
