const head = { "Content-Type": "application/json", Accept: "application/json" };

const baseUrl = "http://localhost:8080/api";

export function headers() {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export { baseUrl, head };
