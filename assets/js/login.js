 $(document).ready(function () {
       
          document.getElementById('login').addEventListener('click',()=>{
        var phoneNumber = document.getElementById('phoneNumber').value;
        var password = document.getElementById('password').value;
  var obj = {
             phoneNumber: phoneNumber,
             password: password,
         };
      
        $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/api/auth/login',
            contentType: 'application/json',
            data: JSON.stringify(obj)
            

            
                
            
        }).then((response)=> {
             window.open('homePage.html','_self');
            }, (error)=>{
                console.log(error);
            })
        
    })





          
        })