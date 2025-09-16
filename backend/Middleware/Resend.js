import {Resend}from'resend'

export const client=new Resend(ENV.API_KEY)
export const sender={
    email:ENV.EMAIL,
    name:ENV.EMAIL_NAME
}