document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('check');
    const body = document.querySelector('body');

    themeButton.addEventListener('change', () => {
        if(themeButton.checked){
            body.setAttribute('data-theme', 'night');
            console.log('es de noche');
        } else {
            body.setAttribute('data-theme', 'day');
            console.log('es de dia');
        }
    });
});
