let generatecv = document.querySelector('#generateCV');
let resetfrom=document.querySelector('#reset')
generatecv.addEventListener("click", () => {
    cvmaker();
});
resetfrom.addEventListener("click",()=>{
    reset();
})
const reset=()=>{     
 document.getElementById('name').value="";
    document.getElementById('email').value="";
     document.getElementById('phone').value="";
    document.getElementById('address').value="";
    document.getElementById('skill').value="";
    document.getElementById('experience').value="";
     document.getElementById('education').value="";
  document.getElementById('photo').value="";
   document.getElementById('fillfrom').innerHTML = "Fill The Form To See Your CV Here";
    document.getElementById('cvimg').innerHTML = "";
    
}
// function of cv maker

const cvmaker = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const skill = document.getElementById('skill').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const photoInput = document.getElementById('photo');

    if (!name || !email || !phone) {
        alert("Please fill in at least Name, Email, and Phone.");
        return;
    }

    const cvhtml = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address || "N/A"}</p>

        <h3>Skills</h3>
        <p>${skill || "N/A"}</p>

        <h3>Experience</h3>
        <p>${experience || "N/A"}</p>

        <h3>Education</h3>
        <p>${education || "N/A"}</p>r

        <button class="savebutton">Print CV</button>
    
    `;

    const cvContainer = document.getElementById('fillfrom');
    cvContainer.innerHTML = cvhtml;
// save 
    cvContainer.querySelector('.savebutton').addEventListener("click", () => {
        window.print();
    });
// print photo
    
    const file = photoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('cvimg').innerHTML =
                `<img src="${e.target.result}" alt="Profile Photo">`;
        };
        reader.readAsDataURL(file);
    } else {
        document.getElementById('cvimg').innerHTML = "";
    }
};
