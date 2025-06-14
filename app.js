document.write(" We Gonna To add 5 Emails And Password Will Check Them They Are  Correct Not");
let email=[];
let password=[];
for(let i = 0; i<5; i++){
Em = prompt("Enter Your Eamil ");
email.push(Em);
Pa = prompt("Enter Your Emails_Password")
password.push(Pa);
}
alert("You Have Entered 5 Emails And Passwords Successfully");
document.write("Your Emails And Password Entered Successfully");
alert("You Can Check Your Email And Password Now");
let inputEmail = prompt(" Enter Your Email   ");
let inputPassword = prompt("Enter Your  Password")
let index= email.indexOf(inputEmail);


if(index!==-1 && password[index]===inputPassword)
{
document.write( "You Have enter right Email and Password")
} else{
    document.write("Email Or Password Are In-Correct")
}
document.write( "Your Email is: " + "<b>" + inputEmail + "<br> </b>" );
document.write( "Your Password is: " + "<b>"+ inputPassword + "<br> </b>");

document.write("Your Emails Are: " + "<b>" + email + "<br> </b>");

document.write("Your Passwords Are: " + "<b>" + password + "<br> </b>");