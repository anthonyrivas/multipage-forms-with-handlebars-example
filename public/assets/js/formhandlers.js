$(document).ready(() => {
    $("#form1").on('submit', (event) => {
        event.preventDefault()
        let data = {
            username: $('input[name=username]').val(),
            password: $('input[name=password]').val()
        }
        $.post('/api/user', data)
            .then((data) => {
                console.log(data)
                document.location.replace(`/form2/${data.id}`)
            })
    })

    $("#form2").on('submit', (event) => {
        event.preventDefault()
        let data = {
            name: $('input[name=name]').val(),
            age: $('input[name=age]').val()
        }
        $.ajax({
            url: `/api/user/${$('input[name=id]').val()}`,
            type: 'PUT',
            data: data
        })
            .then((data) => {
                document.location.replace(`/user/${data.id}`)
            })
    })
});