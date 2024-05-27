"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// const PUBLIC_DIR = path.join(__dirname, "../public");
// const UPLOADS_DIR = path.join(PUBLIC_DIR, "uploads");
const UPLOADS_DIR = path_1.default.join(process.cwd(), "public/uploads");
// Pastikan direktori uploads ada
if (!fs_1.default.existsSync(UPLOADS_DIR)) {
    fs_1.default.mkdirSync(UPLOADS_DIR, { recursive: true });
}
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOADS_DIR);
    },
    filename: function (req, file, cb) {
        const id = Math.random();
        cb(null, id + path_1.default.extname(file.originalname));
    },
});
const upload = (0, multer_1.default)({ storage });
exports.default = upload;
