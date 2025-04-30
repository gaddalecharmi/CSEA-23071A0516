document.addEventListener("DOMContentLoaded", () => {
    const xmlFilePath = "bookstore-xsd.xml"; // Path to your XML file
  
    fetch(xmlFilePath)
      .then((response) => response.text())
      .then((xmlText) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
  
        const books = xmlDoc.getElementsByTagName("book");
        const tableBody = document.querySelector("#book-table tbody");
  
        Array.from(books).forEach((book) => {
          const category = book.getAttribute("category");
          const title = book.getElementsByTagName("title")[0].textContent;
          const lang = book.getElementsByTagName("title")[0].getAttribute("lang");
          const author = book.getElementsByTagName("author")[0].textContent;
          const year = book.getElementsByTagName("year")[0].textContent;
          const price = book.getElementsByTagName("price")[0].textContent;
  
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${category}</td>
            <td>${title}</td>
            <td>${lang}</td>
            <td>${author}</td>
            <td>${year}</td>
            <td>$${price}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error loading XML:", error));
  });