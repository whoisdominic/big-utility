function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return {result: true, msg: "Email format is valid!"}
  }
    alert()
    return {result: false, msg: "You have entered an invalid email address!"}
}
