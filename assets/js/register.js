 $(document).ready(function () {
        let res=true
          document.getElementById('register').addEventListener('click',()=>{
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var middleName = document.getElementById('middleName').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var password = document.getElementById('password').value;
        var prePassword=document.getElementById('prePassword').value;
        var obj = {
             firstName: firstName,
             lastName: lastName,
             middleName: middleName,
             phoneNumber: phoneNumber,
             password: password,
             prePassword: prePassword
         };
      
        $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/api/auth/register',
            contentType: 'application/json',
            data: JSON.stringify(obj)
            

            
                
            
        }).then((response)=> {
             window.open('login.html','_self');
            }, (error)=>{
                console.log(error);
            })
        
    })





          
        })