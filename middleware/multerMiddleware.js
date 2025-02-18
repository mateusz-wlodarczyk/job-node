import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/upload");
//   },
//   filename: (req, file, cb) => {
//     const filename = file.originalname;
//     cb(null, filename);
//   },
// });

const storage = multer.memoryStorage();

const upload = multer({ storage });

const parser = new DataParser();
export const formatImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};

export default upload;
