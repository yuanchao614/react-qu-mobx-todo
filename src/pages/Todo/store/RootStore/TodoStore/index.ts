
import {
  createContainer,
  useLocalObservable,
} from '@quarkunlimit/qu-mobx';

import { RootStore } from '../';

import { ITodoStore } from './interface';

import { Logic } from './Logic';
import { Computed } from './Computed';


export class TodoStore implements ITodoStore {
  logic: Logic;
  computed: Computed;
  constructor(rootStore:RootStore) {
    this.logic = new Logic(rootStore);
    this.computed = new Computed(rootStore);
  }
}
  
  