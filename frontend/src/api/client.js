const API_BASE_URL = "/api/v1";

export async function apiRequest(endpoint, options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
  } catch {
    throw new Error(
      "ไม่สามารถเชื่อมต่อ Backend ได้ กรุณาตรวจสอบว่า Backend กำลังทำงานอยู่"
    );
  }

  const contentType = response.headers.get("content-type") || "";

  const data = contentType.includes("application/json")
    ? await response.json().catch(() => null)
    : await response.text().catch(() => "");

  if (!response.ok) {
    const message =
      typeof data === "object" && data !== null
        ? Array.isArray(data.message)
          ? data.message.join(", ")
          : data.message
        : data;

    throw new Error(
  `${message || `API request failed: ${response.status}`} [${response.status}] ${endpoint}`
);
  }

  if (response.status === 204) {
    return null;
  }

  if (
    data &&
    typeof data === "object" &&
    !Array.isArray(data) &&
    "success" in data &&
    "data" in data
  ) {
    return data.data;
  }

  return data;
}