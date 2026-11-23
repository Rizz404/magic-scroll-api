const allowedOrigins = [
  ...(process.env.FRONTEND_ORIGIN ? [process.env.FRONTEND_ORIGIN] : []),
  "http://localhost:5000",
  "http://localhost:5173",
  "http://localhost:5500",
  "http://localhost:8000",
  "http://localhost:8080",
];

export default allowedOrigins;
