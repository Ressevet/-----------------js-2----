function visiblebasketElement(id) {
    let element = document.getElementById(id)
    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}

function visibleBasket(id) {
    let element = document.getElementById(id);
    let main = document.getElementsByTagName("main")[0];
    let header = document.getElementsByTagName("header")[0];
    let footer = document.getElementsByTagName("footer")[0];

    if (element.style.display === "none") {
        element.style.display = "flex";
        if (main) main.style.filter = "blur(5px)";
        if (header) header.style.filter = "blur(5px)";
        if (footer) footer.style.filter = "blur(5px)";
    } else {
        element.style.display = "none";
        if (main) main.style.filter = "none";
        if (header) header.style.filter = "none";
        if (footer) footer.style.filter = "none";
    }
}

let isVisible = false;

function sellComplete() {
    let click = document.getElementById("sellCompliete");
    let form = document.getElementById("formID")
    let input = document.getElementsByTagName("input")
    if (!isVisible) {
            click.style.display = "flex";
            click.style.opacity = "1";
            isVisible = true;
            form.reset()
            setTimeout(function () {
                click.style.opacity = "0";
                isVisible = false;

            }, 2000);
            setTimeout(() => {
                click.style.display = "none"
            }, 3000);
    }

    var recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length == 0) {
        return false; // Предотвратить отправку формы
    } else {
        // Продолжить с отправкой формы
        document.getElementById("formID").submit();
    }
}

