import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload");
  },
  filename: (req, file, cb) => {
    const filename = file.originalname;
    cb(null, filename);
  },
});

// const storage = multer.memoryStorage();

const upload = multer({ storage });

// export const formatImage = (file)=>{}
export default upload;
