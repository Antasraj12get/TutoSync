import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadCloudinary = async (localpath) => {
    try {
        if (!localpath) return null;
        // upload file on cl

        const response = await cloudinary.uploader.upload(localpath, {
            resource_type: "auto"
        })

        // file uploded successfully
        console.log("file is uploded on cloudinary ", response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localpath);
        return null
    }
}



cloudinary.v2.uploader
    .upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
        public_id: 'shoes',
    }, function (error, result) { console.log(result) }
    )
// 7:25