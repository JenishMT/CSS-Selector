document.addEventListener("DOMContentLoaded", () => {
  // This event listener waits for the HTML content of the page to be fully loaded before executing the code inside the callback function.

  const container = document.querySelector(".container");
  const allBorder = document.getElementById("All");
  const all_value = document.getElementById("all_value");
  const border_value = document.getElementById("border_value");
  const code = document.getElementById("code");
  const btncopy = document.querySelector("#btncopy");
  const borderStyleElement = document.getElementById("border_style");
  const borderElement = document.getElementById("border");

  var all_radius = 10;
  var coding = "Test";
  var borderSize = 2;
  var border_style = "double";

  // These lines retrieve references to various elements in the HTML document using their IDs or classes.

  function allBorderUpdate() {
    // This function updates the values of the border radius and border size based on user input.

    all_radius = allBorder.value;
    borderSize = borderElement.value;

    all_value.innerText = all_radius + "px;";
    border_value.innerText = borderSize + "px;";

    // Update the CSS code displayed to the user based on the user's input.
    coding = `border-radius:${all_radius}px;
    border: ${borderSize}px ${border_style} red;
    
    `;
    code.value = coding;
    container.style.cssText = coding;
  }

  // Event listeners to update the border radius and border size when the user interacts with the input elements.
  allBorder.addEventListener("mouseover", allBorderUpdate);
  allBorder.addEventListener("change", allBorderUpdate);

  borderElement.addEventListener("mouseover", allBorderUpdate);
  borderElement.addEventListener("change", allBorderUpdate);

  // Event listener to copy the generated CSS code when the user clicks the copy button.
  btncopy.addEventListener("click", () => {
    document.querySelector("textarea").select();
    document.execCommand("copy");
    alert("Code copied");
  });

  // Initialize the border styles and update the display accordingly.
  allBorderUpdate();

  // Event listener to update the border style when the user selects a different option from the dropdown.
  borderStyleElement.addEventListener("change", function () {
    border_style = this.value;
    allBorderUpdate();
  });
});
