(function() {
    const form = document.querySelector('form');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const message = document.querySelector('.message');
        const content = document.querySelector('.messageContent');
        content.textContent = `"${message.value}" <this was your message>`
        message.value = '';


    })
})()


