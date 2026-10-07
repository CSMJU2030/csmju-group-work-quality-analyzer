import { apiRequest } from "./client";

export function getWorkLogs() {
  return apiRequest("/work-logs");
}

export function getWorkLog(id) {
  return apiRequest(`/work-logs/${id}`);
}

export function createWorkLog(data) {
  return apiRequest("/work-logs", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateWorkLog(id, data) {
  return apiRequest(`/work-logs/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export function deleteWorkLog(id) {
  return apiRequest(`/work-logs/${id}`, {
    method: "DELETE",
  });
}