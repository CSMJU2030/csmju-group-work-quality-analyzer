import { apiRequest } from "./client";

export function getMembers() {
  return apiRequest("/members");
}

export function getMember(id) {
  return apiRequest(`/members/${id}`);
}

export function createMember(data) {
  return apiRequest("/members", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateMember(id, data) {
  return apiRequest(`/members/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export function deleteMember(id) {
  return apiRequest(`/members/${id}`, {
    method: "DELETE",
  });
}