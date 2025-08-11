import {v2 as cloudinary}from'cloudinary'
import {config} from 'dotenv'
config()
cloudinary.config({
    cloud_name:process.env.CLOUDNAME,
    api_key:process.env.APIKEY,
    api_secret:process.env.APISECRET
})
export default cloudinary