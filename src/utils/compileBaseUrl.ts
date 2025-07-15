export const compileBaseUrl = () => {
  const isProd = process.env.NODE_ENV === "production";
  console.log("IS ENV :", process.env.NODE_ENV);

  return isProd ? "/web-app-mb" : "";
};
