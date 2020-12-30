const nameInput = document.getElementById('input-name')
const emailInput = document.getElementById('input-email')
const homepageInput = document.getElementById('input-homepage')

const form = document.getElementById('form')
const contactList = document.getElementById('contacts')

function resetFields() {
	nameInput.value = ''
	emailInput.value = ''
	homepageInput.value = ''
}

function onFormSubmit (e) {
	e.preventDefault()

	let contactTemplate = document
		.getElementById('contact-template')
		.content
		.cloneNode(true)
	let h2 = contactTemplate.querySelector('h2')
	let p = contactTemplate.querySelector('.email')
	let a = contactTemplate.querySelector('.homepage a')

	h2.textContent = nameInput.value
	p.textContent = emailInput.value
	a.textContent = homepageInput.value
	a.setAttribute('href', homepageInput.value)

	contactList.appendChild(contactTemplate)
	resetFields()
}

form.addEventListener('submit', onFormSubmit)
