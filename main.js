document.addEventListener('DOMContentLoaded', () => {
    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('length-value');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const passwordInput = document.getElementById('password');
    const generateButton = document.getElementById('generate');
    const copyButton = document.getElementById('copy');

    const characters = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    // Update length display
    if (lengthSlider && lengthValue) {
        lengthSlider.addEventListener('input', (event) => {
            lengthValue.textContent = event.target.value;
        });
    }

    // Generate password
    if (generateButton) {
        generateButton.addEventListener('click', () => {
            const length = parseInt(lengthSlider.value, 10);
            let charset = characters.lowercase;
            if (uppercaseCheckbox.checked) charset += characters.uppercase;
            if (numbersCheckbox.checked) charset += characters.numbers;
            if (symbolsCheckbox.checked) charset += characters.symbols;

            let password = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }
            passwordInput.value = password;
        });
    }

    // Copy to clipboard
    if (copyButton) {
        copyButton.addEventListener('click', () => {
            if (passwordInput.value) {
                passwordInput.select();
                document.execCommand('copy');
                alert('비밀번호가 클립보드에 복사되었습니다!');
            }
        });
    }
});
