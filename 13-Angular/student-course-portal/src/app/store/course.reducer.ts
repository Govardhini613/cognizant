import { createReducer, on } from '@ngrx/store';
import { loadCourses } from './course.actions';

export const initialState = {

  loaded: false

};

export const courseReducer = createReducer(

  initialState,

  on(loadCourses, state => ({

    ...state,

    loaded: true

  }))

);