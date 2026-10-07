import { apiRequest } from "./client";

export function getProjects() {
  return apiRequest("/projects");
}

export function getProject(id) {
  return apiRequest(`/projects/${id}`);
}

export function createProject(data) {
  return apiRequest("/projects", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateProject(id, data) {
  return apiRequest(`/projects/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export function deleteProject(id) {
  return apiRequest(`/projects/${id}`, {
    method: "DELETE",
  });
}