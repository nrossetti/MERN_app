import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchProjects = () => axios.get(url);
export const createProject = (newPost) => axios.post(url, newPost);
export const likeProject = (id) => axios.patch(`${url}/${id}/likeProject`);
export const updateProject = (id, updatedProject) => axios.patch(`${url}/${id}`, updatedProject);
export const deleteProject = (id) => axios.delete(`${url}/${id}`);
