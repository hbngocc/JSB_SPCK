function Register()
{
let get_username = document.getElementById("inputus").value;
let get_email = document.getElementById("inpute").value;
let get_telephone = document.getElementById("inputp").value;
//let get_text= document.getElementById("inpute").value;


if(get_username == "" || get_email == ""|| get_telephone == "" )
{
    alert("Mời bạn nhập đầy đủ thông tin ");
}
else{
    alert("Gửi thành công");
}
}