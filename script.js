let queue = [];
let nextNumber = 1;

function addApplicant() {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (firstName && lastName) {
    queue.push({ number: nextNumber++, firstName, lastName });
    firstNameInput.value = '';
    lastNameInput.value = '';
    updateApplicantList();
  }
}

function getNextApplicant() {
  const nextDiv = document.getElementById("nextApplicant");

  if (queue.length === 0) {
    nextDiv.textContent = "No more applicants.";
    return;
  }

  const next = queue.shift();
  nextDiv.textContent = `${next.number}: ${next.firstName} ${next.lastName}`;
  updateApplicantList();
}

function removeApplicant() {
  if (queue.length > 0) {
    queue.shift();
    updateApplicantList();
  }
}

function updateApplicantList() {
  const tbody = document.querySelector("#applicantList tbody");
  tbody.innerHTML = "";

  queue.forEach(app => {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = app.number;
    row.insertCell(1).textContent = app.firstName;
    row.insertCell(2).textContent = app.lastName;
  });
}
