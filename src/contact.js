const createContactPage = () => {
  const main = document.querySelector("#content");
  let header = document.createElement("header");
  let contact = document.createElement("div");

  header.innerHTML = `
        <h1>Contact Info</h1>
    `;

  contact.innerHTML = `
    Phone: (248) 434-5508 <br>
    Email: bezos@amazon.com <br>
    Address: Booger Hollow Road, Dadeville, Alabama <br>
  `;

  main.appendChild(header);
  main.appendChild(contact);
};

export default createContactPage;
