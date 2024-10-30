// src/server/middlewares/multer.js
const multer = require('multer');
const path = require('path');

// Configuração do multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './frontend/public/uploads/');
    },
    filename: function (req, file, cb) {
        const fileName = req.body.fileName || file.fieldname;
        const extension = path.extname(file.originalname);
        const finalFileName = `${fileName}${extension}`;
        req.savedFilePath = `/uploads/${finalFileName}`; 
        cb(null, finalFileName);    
    }
});
const upload = multer({ storage });

module.exports = upload;

