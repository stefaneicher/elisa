import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 455,
};

export const sampleWithPartialData: IEmployee = {
  id: 2417,
  commissionPct: 6402,
};

export const sampleWithFullData: IEmployee = {
  id: 18855,
  firstName: 'Norma',
  lastName: 'Lakin',
  email: 'Melyssa73@gmail.com',
  phoneNumber: 'continually',
  hireDate: dayjs('2024-01-21T21:50'),
  salary: 11322,
  commissionPct: 26212,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
