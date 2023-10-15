fetch("http://localhost:3000/sitemap.xml")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((xml) => {
    // Handle the sitemap.xml content as needed
    console.log(xml);
    // You can parse and work with the XML data here
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
