import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProject = (post) => async (dispatch) => {
  try {
    const { data } = await api.createProject(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProject = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeProject = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeProject(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
