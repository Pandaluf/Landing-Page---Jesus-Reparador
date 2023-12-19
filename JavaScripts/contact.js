function sendMail(){
    var params = {
        name: document.getElementById("formName").value,
        cellphone: document.getElementById("formCellphone").value,
        email: document.getElementById("formEmail").value,
        grade: document.querySelector(".form-select").value,
        consultation: document.getElementById("formConsultation").value,
    };

    const serviceID = "service_hk4g2ci";
    const templateID = "template_uahodmb";

    emailjs
        .send(serviceID, templateID, params)
        .then(
            (res) => {
                document.getElementById("formName").value = "";
                document.getElementById("formCellphone").value = "";
                document.getElementById("formEmail").value = "";
                document.querySelector(".form-select").value = "";
                document.getElementById("formConsultation").value = "";

                console.log(res);
            }).catch((error) => console.log(error));
}

function validationForm(){
    const formErrorIds = ['formName', 'formCellphone', 'formEmail', 'formGrade', 'formConsultation'];

    for (const id of formErrorIds) {
        const element = document.getElementById(id);

        if (!element.value.trim()) {
            element.classList.add('animate__animated', 'animate__shakeX');

            setTimeout(() => {
                element.classList.remove('animate__animated', 'animate__shakeX');
            }, 1000);
        }
    }

    const isFormValid = formErrorIds.every(id => document.getElementById(id).value.trim() !== '');

    if (isFormValid) {
        sendMail();
        $('#exampleModalToggle').modal('show');
    }
}

