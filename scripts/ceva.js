const carType = ['Diesel', 'Hybrid', 'Electric'];

const printArea = document.getElementById("container");

const dropdown = () => {
  const component = document.getElementById("dropdown");
  const input = createInput();
  const dropdown = showDropdown();
  component.appendChild(dropdown);
  printArea.appendChild(component);
};

const createInput = () => {
  const input = document.querySelector(".input");
  input.addEventListener("click", toggleDropdown);
};

const showDropdown = () => {
  const structure = document.getElementById("dropdown-structure");
  structure.classList.add("dd-structure", "hide");

  carType.forEach(item => {
    
    const option = document.createElement("div");

    n = document.createElement("span");
    n.textContent = item;

    option.appendChild(n);
    structure.appendChild(option);
    
    option.addEventListener("click", () => selectOption(item));
  });
  return structure;
};

const toggleDropdown = () => {
  const dropdown = document.querySelector(".dd-structure");
  dropdown.classList.toggle("hide");
};

const selectOption = (carType) => {
  const text = document.querySelector('#myCarType');
  text.textContent = carType;
  toggleDropdown();
};
dropdown();