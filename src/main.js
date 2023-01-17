document.querySelector('#submit').addEventListener('click', validateForm)

function validateForm(e) {
    const firstName = document.getElementById('First_name').value
    const lastName = document.getElementById('Last_name').value
    const email = document.getElementById('email').value

    if (firstName.length == 0 || lastName.length == 0 || email.length == 0){
        const div = document.createElement('div')
        div.className = 'invalid'
        div.appendChild(document.createTextNode("Enter all required fields"))
        const holder = document.querySelector('.contact__form')
        const form = document.querySelector('.quote')
        holder.insertBefore(div, form)

        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }
}

document.querySelector('#subscribe').addEventListener('click', validateSubscribe)


function validateSubscribe(e) {
    const firstName = document.getElementById('First_name').value
    const lastName = document.getElementById('Last_name').value
    const email = document.getElementById('email').value

    if (firstName.length == 0 || lastName.length == 0 || email.length == 0){
        const div = document.createElement('div')
        div.className = 'invalid'
        div.appendChild(document.createTextNode("Enter all required fields"))
        const holder = document.querySelector('.contact__form')
        const form = document.querySelector('.quote')
        holder.insertBefore(div, form)

        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }
}