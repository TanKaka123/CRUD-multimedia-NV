import multer from "multer";
import {GridFsStorage} from "multer-gridfs-storage";



const storage = new GridFsStorage({
    url: "mongodb+srv://van:123@cluster0.7p95hpt.mongodb.net/?retryWrites=true&w=majority",
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    },
});

export default multer({ storage });
