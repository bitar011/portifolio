// Autor: Victor Bitar Lima Benevides
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_cazoexb';
   const templateID = 'template_zugsl0l';

   emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado com sucesso!');
      document.getElementById('form').reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
