import { apiRequest } from "./client";


export function getTasks() {
  return apiRequest("/tasks");
}

export function getTask(id) {
  return apiRequest(`/tasks/${id}`);
}

export function createTask(data) {
  return apiRequest("/tasks", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateTask(id, data) {
  return apiRequest(`/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export function deleteTask(id) {
  return apiRequest(`/tasks/${id}`, {
    method: "DELETE",
  });
}