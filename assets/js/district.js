$(document).ready(function () {
    var id = '';

    var districtTable = $('#districts').DataTable({
        ajax: {
            url: "/district/list",
            type: 'GET',
            dataSrc: ""
        },
        columns: [
            {title: '#', data: "tr"},
            {title: 'Name', data: "name"},
            {title: 'RegionName', data: "regionName"},
            {title: 'CountryName', data: "countryName"},
            {
                title: 'Action', data: 'id',
                render: function (data, type, row) {
                    return "<div class='row'>" +
                        "<div class='col'><button class='btn btn-warning'>Edit</button></div>" +
                        "<div class='col'><button class='btn btn-danger' id='deleteDistrict'>Delete</button></div>" +
                        "</div>"
                }
            }
        ]
    });

    $.ajax({
            url: '/country/list',
            method: 'GET',
            success: function (davlatlarRuyxati) {
                $.each(davlatlarRuyxati, function (tartib, bittaDavlat) {
                    // $('#countryId').append(
                    //     $('<option/>', {
                    //         value: bittaDavlat.id,
                    //         text: bittaDavlat.name
                    //     })
                    // );
                    $('#countryId').append(`<option value=${bittaDavlat.id}>${bittaDavlat.name}</option>`)
                })
            }
        }
    );


    //COUNTRY NI SAVE QILISH UCHUN
    $('#saveRegion').click(function () {
        var name = document.getElementById('name').value;
        var countryId = document.getElementById('countryId').value;
        if (countryId != 0) {
            if (name) {
                // var obj = {name: name,countryId:countryId};
                var obj = {name, countryId};
                $.ajax({
                    url: '/district',
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(obj),
                    success: function (tesha) {
                        if (tesha.success) {
                            $('#districtModal').modal('toggle');
                            districtTable.ajax.reload();
                            tozalash();
                        } else {
                            alert(tesha.message)
                        }
                    },
                    error: function () {
                        alert("Bog'lanishda xatolik")
                    }
                });
            } else {
                alert("Region nomini kiriting")
            }
        } else {
            alert("Davlatni tanlang")
        }
    });


    $(districtTable.table().body()).on('click', '#deleteDistrict', function () {
        var data = districtTable.row($(this).parents('tr')).data();
        id = data.id;
        $('#deleteDistrictModal').modal('toggle');
    });

    $('#delBtnDistrict').click(function () {
        $.ajax({
            url: '/country/' + id,
            method: 'DELETE'
        });
        window.location.reload();
    });


    $('#countryId').change(function () {
        var countryId = $(this).val();
        $.ajax({
            url: '/region/byCountry/' + countryId,
            method: 'GET',
            success: function (regionlarRuyxati) {
                $('#regionId').empty();
                $('#regionId').append(`<option value="0" selected disabled>Regionni tanlang</option>`)
                $.each(regionlarRuyxati, function (i, item) {
                    $('#regionId').append(`<option value=${item.id}>${item.name}</option>`)
                })

            }
        })
    })

    function tozalash() {
        document.getElementById('countryId').value = '0';
        document.getElementById('name').value = '';
    }


});