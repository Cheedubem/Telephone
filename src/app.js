class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    const index = this.phoneNumbers.indexOf(phoneNumber);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.includes(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    } else {
      console.log(`Phone number ${phoneNumber} not found.`);
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.notify(phoneNumber));
  }
}

class Observer {
  constructor() {
    this.messages = [];
  }

  notify(phoneNumber) {
    this.messages.push(`Now Dialling ${phoneNumber}`);
  }
}

const telephone = new Telephone();
const observer1 = new Observer();
const observer2 = new Observer();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

function addPhoneNumber() {
  const phoneNumberInput = document.getElementById("phoneNumberInput");
  const phoneNumber = phoneNumberInput.value;
  telephone.addPhoneNumber(phoneNumber);
  phoneNumberInput.value = "";
  updatePhoneNumbers();
}

function removePhoneNumber() {
  const phoneNumberInput = document.getElementById("phoneNumberInput");
  const phoneNumber = phoneNumberInput.value;
  telephone.removePhoneNumber(phoneNumber);
  phoneNumberInput.value = "";
  updatePhoneNumbers();
}

function dialPhoneNumber() {
  const phoneNumberInput = document.getElementById("phoneNumberInput");
  const phoneNumber = phoneNumberInput.value;
  telephone.dialPhoneNumber(phoneNumber);
  phoneNumberInput.value = "";
  updateMessages();
}

function updatePhoneNumbers() {
  const phoneNumbersDiv = document.getElementById("phoneNumbers");
  phoneNumbersDiv.innerHTML = "";
  telephone.phoneNumbers.forEach((phoneNumber) => {
    const phoneNumberDiv = document.createElement("div");
    phoneNumberDiv.textContent = phoneNumber;
    phoneNumbersDiv.appendChild(phoneNumberDiv);
  });
}

function updateMessages() {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = "";
  observer1.messages.forEach((message) => {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("message");
    messagesDiv.appendChild(messageDiv);
  });
  observer2.messages.forEach((message) => {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("message");
    messagesDiv.appendChild(messageDiv);
  });
}
