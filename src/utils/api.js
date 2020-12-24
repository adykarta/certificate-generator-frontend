const head = { "Content-Type": "application/json", Accept: "application/json" };

const baseUrl = "http://chulsan-api.herokuapp.com/api";

export function headers() {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export { baseUrl, head };
