import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes/index";
import responseMiddleware from "./middleware/response.mw";
import loggerMiddleware from "./middleware/logger.mw";

const app = express();

app.use(helmet());
app.use(cors());
app.use(responseMiddleware);
app.use(express.json());
app.use(loggerMiddleware);

app.use("/api", router);

export default app;
