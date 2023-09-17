export const isProduction =
  process.env.NODE_ENV === "production" && typeof window !== "undefined";
