const head = { "Content-Type": "application/json", Accept: "application/json" };

const baseUrl = "http://54.147.179.12:8080/api";

export function headers() {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export { baseUrl, head };
