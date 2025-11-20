const npbtn=document.querySelector("#np-btn")
const bronzebtn=document.querySelector("#bronze-btn")
const silverbtn=document.querySelector("#silver-btn")
const goldbtn=document.querySelector("#gold-btn")
const membershipdetails=document.querySelector("#membership-details")

function displayMembershipDetails(course) {
  membershipdetails.innerHTML = '';
  membershipdetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}