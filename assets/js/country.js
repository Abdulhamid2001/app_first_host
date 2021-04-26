$(document).ready(function () {
    var id='';

    var CountryTable=$('#countries').DataTable({
        ajax:{
            url:'/country/list',
            type:'GET',
            dataSrc:""
        },
        columns:[
            {title:'#',data:"tr"},
            {title:'Name',data:'name'},
            {title:"Action",data:'id',
                render:function (data,type,row) {
                    return"<div class='row'>" +
                        "<div class='col'><button class='btn btn-warning'>Edit</button></div>" +
                        "<div class='col'><button class='btn btn-danger'>Delete</button></div>" +
                        "</div>"
                }}
        ]
    });

    $('#saveCountry').click(function () {
        var nameUz=document.getElementById('nameUz').value;
        var nameRu=document.getElementById('nameRu').value;
        var nameEn=document.getElementById('nameEn').value;
        var obj={nameUz, nameRu,nameEn};
        $.ajax({
            url:'/country',
            method:'POST',
            contentType:'application/json',
            data:JSON.stringify(obj),
            success:function (res) {
                if(res.success){
                    $('#countryModal').modal('toggle');
                    countryTable.ajax.reload();
                }
            }
        })
        window.location.reload();
    });
    $('deleteCountry').click()
});

