import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 26736,
};

export const sampleWithPartialData: IJob = {
  id: 20679,
  minSalary: 23689,
};

export const sampleWithFullData: IJob = {
  id: 31404,
  jobTitle: 'Investor Web Technician',
  minSalary: 5832,
  maxSalary: 3877,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
