import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 28585,
};

export const sampleWithPartialData: ITask = {
  id: 26208,
  title: 'plus enormously',
  description: 'recklessly',
};

export const sampleWithFullData: ITask = {
  id: 28242,
  title: 'owlishly wan limited',
  description: 'but jibe',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
