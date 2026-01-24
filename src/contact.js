function buildVisitAdd(container) {
    const visitUs = document.createElement('h2');
    visitUs.textContent = 'Visit Us';
    container.appendChild(visitUs);

    const address = document.createElement('p');
    address.innerHTML = '123 Flavor Street<br>Foodie City<br>FC 45678';
    container.appendChild(address);
}

function buildCallUs(container) {
    const callUs = document.createElement('h2');
    callUs.textContent = 'Call Us';
    container.appendChild(callUs);

    const phone = document.createElement('p');
    phone.textContent = '+91 23456 78901';
    container.appendChild(phone);
}

function buildEmail(container) {
    const email = document.createElement('h2');
    email.textContent = 'Email Us';
    container.appendChild(email);

    const emailText = document.createElement('p');
    emailText.textContent = 'info@maesdiner.com';
    container.appendChild(emailText);
}

function buildHours(container) {
    const hours = document.createElement('h2');
    hours.textContent = 'Opening Hours';
    container.appendChild(hours);

    const hoursText = document.createElement('p');
    hoursText.textContent = 'Monday - Friday: 11:00 AM - 10:30 PM \nSaturday - Sunday: 9:00 AM - 11:00 PM';
    container.appendChild(hoursText);
}

function loadContact() {
  const content = document.getElementById('content');

  const contact = document.createElement('div');
  contact.classList.add('contact');

  const visitAdd = document.createElement('div');
  visitAdd.classList.add('visit-add');

  const callUs = document.createElement('div');
  callUs.classList.add('call-us');

  const email = document.createElement('div');
  email.classList.add('email');

  const hours = document.createElement('div');
  hours.classList.add('hours');

  buildVisitAdd(visitAdd);
  buildCallUs(callUs);
  buildEmail(email);
  buildHours(hours);

  contact.appendChild(visitAdd);
  contact.appendChild(callUs);
  contact.appendChild(email);
  contact.appendChild(hours);

  content.appendChild(contact);
}

export default loadContact;