document
    .querySelectorAll("input[type='radio']")
    .forEach(function(radioInput) {
        radioInput.onclick = function() {
            document.documentElement.classList.remove(...document.documentElement.classList)
            document.documentElement.classList.add(radioInput.className)
        }
    })