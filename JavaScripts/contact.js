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
