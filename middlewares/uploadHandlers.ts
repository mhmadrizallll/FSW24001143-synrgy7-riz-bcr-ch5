import fs from "fs";
import multer from "multer";
import path from "path";

// const PUBLIC_DIR = path.join(__dirname, "../public");
// const UPLOADS_DIR = path.join(PUBLIC_DIR, "uploads");
const UPLOADS_DIR = path.join(process.cwd(), "public/uploads");

// Pastikan direktori uploads ada
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_DIR);
  },
  filename: function (req, file, cb) {
    const id = Math.random();
    cb(null, id + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;
