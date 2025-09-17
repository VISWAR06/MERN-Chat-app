import {Resend}from'resend'
import {ENV} from './env.js'
export const client=new Resend(ENV.API_KEY)
export const sender={
    email:ENV.EMAIL,
    name:ENV.EMAIL_NAME
}