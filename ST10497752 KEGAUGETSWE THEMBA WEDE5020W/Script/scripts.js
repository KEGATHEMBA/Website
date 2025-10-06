function validateForm(formId){
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll("input[required],textarea[required]");
    let isValid = true;

    inputs.forEach(input =>{
        if(!input.Value.trim()){
            input.style.border="2px solid red";
            isValid= false;
        }else{
            input.style.border="1px solid #ccc";
        }
    });

    if(!isValid){
        alert("Please fill out all required fields.");
    }
    return isValid;
}

window.onload = function(){
    const contactForm = document.getElementById("contact-form");
    if(contactForm){
        contactForm.onsubmit= function(e){
            if(!validateForm("contact-form")){
                e.preventDefault();
            }
        };
    };
};

