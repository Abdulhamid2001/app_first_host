// $(document).ready(function () {
// const save=document.getElementById("#save");
//  save.addEventListener('click',()=>{
//   	console.log('dsfsf');
//         var firstName = document.getElementById("firstName").value;
//         var lastName = document.getElementById("lastName").value;
//   var obj = {
//              firstName: firstName,
//              lastName: lastName
//          };
      
//         $.ajax({
//             method: 'POST',
//             url: 'http://localhost/api/create/docs',
//             contentType: 'application/json',
//             data: JSON.stringify(obj)           
//         })
        
//     })

// })

// const save = document.getElementById("save");
// var firstName1 = document.getElementById("firstName").value;
// var lastName1 = document.getElementById("lastName").value;
// save.addEventListener('click', () => {
	
// 	const body = {
// 		firstName: firstName1,
// 		lastName: lastName1
// 	}

// 	axios.post('http://localhost/api/create/docs', body)
// 	console.log(123)
// })
// var firstName1 = document.getElementById("firstName").value;
// var lastName1 = document.getElementById("lastName").value;

// const body = {
// 		firstName: firstName1,
// 		lastName: lastName1
// 	}
//  const save = document.getElementById("save");
// save.addEventListener('click', () =>{
// 	console.log(11),
// fetch('http://localhost/api/create/docs',{
// 	method:"post",
// 	body:JSON.stringify(body),
// 	headers: {
// 		"ContentType": "application/json;"
// 	}
// })

// })

//  document.getElementById('submit').addEventListener('click',()=>{
// var firstName1 = document.getElementById("firstName").value;
// var lastName1 = document.getElementById("lastName").value;
//   // file from input
// let req = new XMLHttpRequest();
// let body = {
// 	firstName: firstName1,
//     lastName: lastName1
// }
// console.log(122)
// // formData.append("photo", photo);                                
// req.open("POST", 'http://localhost/api/create/docs');
// req.send(body);     
//     })

let arr = []

 $(document).ready(function () {
       
          document.getElementById('login').addEventListener('click',()=>{
        var firstName1 = document.getElementById('firstName').value;
        var lastName1 = document.getElementById('lastName').value;
  var obj = {
            firstName:firstName1,
            lastName:lastName1 
         };
        $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/api/create/docs',
            contentType: 'application/json',
            data: JSON.stringify(obj),
          
         })
         .then((result)=> {
            
               arr.push(result)
               $('.card').html(
                  arr.map(item => {
                     return (
                        `<p class="text-info">Name: ${item.name}</p>
                        <a class="btn btn-primary btn-right w-50" href="http://localhost:8080/api/attachment/${item.id}">Download</a>
                        `
                        
                     )
                  })
               )
          })
         
        
    })

    document.getElementById('submit').addEventListener('click',()=>{
      var files = document.getElementById('files');
      var req=new XMLHttpRequest();
      var formData=new FormData();
      formData.append("files",files[0]);
      req.open("POST","http://localhost:8080/api/attachment/upload");
      req.send(formData);
      

    
              
          
   
      
  })

          
        })

       
       