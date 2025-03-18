// Autor: Victor Bitar Lima Benevides
function sendEmail(event) {
    event.preventDefault();

   
    emailjs.sendForm('service_cazoexb', 'template_zugsl0l', event.target, 'MQAYddSuqwXuYLqC7')
        .then((result) => {
            console.log('Email enviado com sucesso:', result.text);
            alert('Email enviado com sucesso!');
        }, (error) => {
            console.error('Erro ao enviar email:', error.text);
            alert('Erro ao enviar email. Tente novamente mais tarde.');
        });
}

document.getElementById('contact-form').addEventListener('submit', sendEmail);
