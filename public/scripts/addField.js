document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        // pegar o field do momento e limpar ele
        field.value = ''
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}