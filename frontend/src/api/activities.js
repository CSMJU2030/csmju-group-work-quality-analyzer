import { apiRequest } from "./client";

export function getActivities() {
  return apiRequest("/activities");
}

export function getActivity(id) {
  return apiRequest(`/activities/${id}`);
}

export function createActivity(data) {
  return apiRequest("/activities", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateActivity(id, data) {
  return apiRequest(`/activities/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export function deleteActivity(id) {
  return apiRequest(`/activities/${id}`, {
    method: "DELETE",
  });
}