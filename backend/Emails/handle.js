import { resendclient,sender } from "../Lib/Resend.js"
import { createWelcomeEmailTemplate } from "./template.js"

export const sendemail = async(email,name,clientUrl)=>{
  const {data,error}=await resendclient.emails.send({
    from:`${sender.name} <${sender.email}>`,
    to:email,
    subject:"welcome to chatify",
    html:createWelcomeEmailTemplate(name,clientUrl)
  })
  if(error){
    console.log(error.message)
    throw new Error("failed toa send email")
  }
  console.log("sent successfully")
}