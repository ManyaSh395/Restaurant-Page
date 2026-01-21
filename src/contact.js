function loadContact() {
    const content = document.getElementById('content');

    const visitAdd = document.createElement('div');
    visitAdd.classList.add('visit-add');

    const callUs = document.createElement('div');
    callUs.classList.add('call-us');

    const email = document.createElement('div');
    email.classList.add('email');

    const hours = document.createElement('div');
    hours.classList.add('hours');

    content.appendChild(visitAdd);
    content.appendChild(callUs);
    content.appendChild(email);
    content.appendChild(hours);
}