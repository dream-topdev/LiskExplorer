interface iConfig {
  API_URL: string;
  SOCKET_URL: string;
  TEST_LISK_ADDRESS: string;
}

export const configuration: iConfig = {
  API_URL: process.env.EXPO_PUBLIC_API_URL ?? "",
  SOCKET_URL: process.env.EXPO_PUBLIC_SOCKET_URL ?? "",
  TEST_LISK_ADDRESS: "lsk6u3fwtbbcauvaupgdq5q9v6h4bvjp86sq7aesu",
};
