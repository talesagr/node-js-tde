"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./routes/user/userRoutes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/users', userRoutes_1.default);
const MONGO_DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING;
if (!MONGO_DB_CONNECTION_STRING) {
    console.error('Variável de ambiente MONGO_DB_CONNECTION_STRING não definida.');
    process.exit(1);
}
mongoose_1.default.connect(MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => console.log(err));
