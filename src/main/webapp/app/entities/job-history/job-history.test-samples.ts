import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 25628,
};

export const sampleWithPartialData: IJobHistory = {
  id: 27706,
  endDate: dayjs('2024-01-22T01:32'),
  language: 'SPANISH',
};

export const sampleWithFullData: IJobHistory = {
  id: 14979,
  startDate: dayjs('2024-01-21T20:02'),
  endDate: dayjs('2024-01-21T16:51'),
  language: 'SPANISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
