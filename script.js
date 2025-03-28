// script.js

// Contoh animasi sederhana (misalnya, efek hover pada tombol)
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#0056b3';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#007bff';
    });
});
