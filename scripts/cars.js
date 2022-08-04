

// document.addEventListener('DOMContentLoaded', () => {
//     // addCarTypes();
//     console.log('loaded');
//     });

// function addCarTypes() {
//     const type = ['Diesel', 'Hybrid', 'Electric'];
//     const selectCar = document.getElementById('type-car');
//     type.forEach(item => {
//         selectCar.options.add(new Option (item));
//     });
// }

//  function selectPageByIndex(index) {
//      const navigation = document.getElementsByTagName('ul')[0];
//      const itemList = navigation.querySelectorAll('li');
//      // itemList.forEach((item) => {
//      //     item.classList.remove('activ');
//      // })
//      itemList[index].classList.add('activ');
//  }

// custom dropdown

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
  const input = document.getElementById("dropdown-input");
  input.addEventListener("click", toggleDropdown);
};

const showDropdown = () => {
  const structure = document.getElementById("dropdown-structure");
  structure.classList.add("dd-structure", "hide");

  carType.forEach(item => {
    
    const option = document.createElement("div");
option.addEventListener("click", () => selectOption(item));
    n = document.createElement("span");
    n.textContent = item;

    option.appendChild(n);
    structure.appendChild(option);
    
    
  });
  return structure;
};

const toggleDropdown = () => {
  const dropdown = document.querySelector(".dd-structure");
  dropdown.classList.toggle("hide");
};

const selectOption = (type) => {
    const text = document.getElementById('my-car-type');
    text.textContent = type;
    toggleDropdown();
  };

dropdown();

//second custom dropdown

const ownerID = ['029318438', '345345624', '325245345'];

const printArea2 = document.getElementById("container-2");

const dropdown2 = () => {
  const component = document.getElementById("dropdown-2");
  const input = createInput2();
  const dropdown = showDropdown2();
  component.appendChild(dropdown);
  printArea2.appendChild(component);
};

const createInput2 = () => {
  const input = document.getElementById("dropdown-input-2");
  input.addEventListener("click", toggleDropdown2);
};

const showDropdown2 = () => {
  const structure = document.getElementById("dropdown-structure-2");
  structure.classList.add("dd-structure2", "hide");

  ownerID.forEach(item => {
    
    const option = document.createElement("div");
option.addEventListener("click", () => selectOption2(item));
    n = document.createElement("span");
    n.textContent = item;

    option.appendChild(n);
    structure.appendChild(option);
    
    
  });
  return structure;
};

const toggleDropdown2 = () => {
  const dropdown = document.querySelector(".dd-structure2");
  dropdown.classList.toggle("hide");
};

const selectOption2 = (type) => {
    const text = document.getElementById('owner-id');
    text.textContent = type;
    toggleDropdown2();
  };

dropdown2();

// //general methods

// const carType = ['Diesel', 'Hybrid', 'Electric'];
// const ownerID = ['029318438', '345345624', '325245345'];

// const dropdown = (containerID, dropdownId, dropdownStructure, arrayType, dropdownInput, spanId) => {
//     printArea = document.getElementById(containerID);
//     const component = document.getElementById(dropdownId);
//     createInput(dropdownInput);
//     const dropdown = showDropdown(dropdownStructure, arrayType, spanId);
//     component.appendChild(dropdown);
//     printArea.appendChild(component);
//   };
  
//   const createInput = (dropdownInput) => {
//     const input = document.getElementById(dropdownInput);
//     input.addEventListener("click", toggleDropdown);
//   };
  
//   const showDropdown = (dropdownStructure, arrayType, spanId) => {
//     const structure = document.getElementById(dropdownStructure);
//     structure.classList.add("dd-structure", "hide");
  
//     arrayType.forEach(item => {
      
//       const option = document.createElement("div");
//   option.addEventListener("click", () => selectOption(item, spanId));
//       n = document.createElement("span");
//       n.textContent = item;
  
//       option.appendChild(n);
//       structure.appendChild(option);
      
      
//     });
//     return structure;
//   };
  
// function toggleDropdown () {
//     const dropdown = document.querySelector(".dd-structure");
//     dropdown.classList.toggle("hide");
//     console.log("done");
//   };
  
//   const selectOption = (type, spanId) => {
//       const text = document.getElementById(spanId);
//       text.textContent = type;
//       toggleDropdown();
//     };
  
// dropdown("container","dropdown","dropdown-structure", carType, 'dropdown-input', 'my-car-type');

// //dropdown("container-2","dropdown-2","dropdown-structure-2", ownerID, 'dropdown-input-2', 'owner-id');

// //general function but with structure id

// const carType = ['Diesel', 'Hybrid', 'Electric'];
// const ownerID = ['029318438', '345345624', '325245345'];

// const dropdown = (containerID, dropdownId, dropdownStructure, arrayType, dropdownInput, spanId) => {
//     printArea = document.getElementById(containerID);
//     const component = document.getElementById(dropdownId);
//     createInput(dropdownInput);
//     const dropdown = showDropdown(dropdownStructure, arrayType, spanId);
//     component.appendChild(dropdown);
//     printArea.appendChild(component);
//   };
  
//   const createInput = (dropdownInput) => {
//     const input = document.getElementById(dropdownInput);
//     input.addEventListener("click", toggleDropdown);
//   };
  
//   const showDropdown = (dropdownStructure, arrayType, spanId) => {
//     const structure = document.getElementById(dropdownStructure);
//     structure.classList.add("dd-structure", "hide");
  
//     arrayType.forEach(item => {
      
//       const option = document.createElement("div");
//   option.addEventListener("click", () => selectOption(item, spanId));
//       n = document.createElement("span");
//       n.textContent = item;
  
//       option.appendChild(n);
//       structure.appendChild(option);
      
      
//     });
//     return structure;
//   };
  
// function toggleDropdown () {
//     const dropdown = document.getElementById("dropdown-structure");
//     dropdown.classList.toggle("hide");
//     console.log("done");
//   };
  
//   const selectOption = (type, spanId) => {
//       const text = document.getElementById(spanId);
//       text.textContent = type;
//       toggleDropdown();
//     };
  
// dropdown("container","dropdown","dropdown-structure", carType, 'dropdown-input', 'my-car-type');

// //dropdown("container-2","dropdown-2","dropdown-structure-2", ownerID, 'dropdown-input-2', 'owner-id');

//current edit

// const carType = ['Diesel', 'Hybrid', 'Electric'];
// const ownerID = ['029318438', '345345624', '325245345'];

// const dropdown = (containerID, dropdownId, dropdownStructure, arrayType, dropdownInput, spanId) => {
//     printArea = document.getElementById(containerID);
//     const component = document.getElementById(dropdownId);
//     createInput(dropdownInput, dropdownStructure);
//     const dropdown = showDropdown(dropdownStructure, arrayType, spanId);
//     component.appendChild(dropdown);
//     printArea.appendChild(component);
//   };
  
//   const createInput = (dropdownInput, dropdownStructure) => {
//     const input = document.getElementById(dropdownInput);
//     input.addEventListener("click", toggleDropdown(dropdownStructure));
//   };
  
//   const showDropdown = (dropdownStructure, arrayType, spanId) => {
//     const structure = document.getElementById(dropdownStructure);
//     structure.classList.add("dd-structure", "hide");
  
//     arrayType.forEach(item => {
      
//       const option = document.createElement("div");
//   option.addEventListener("click", () => selectOption(item, spanId, dropdownStructure));
//       n = document.createElement("span");
//       n.textContent = item;
  
//       option.appendChild(n);
//       structure.appendChild(option);
      
      
//     });
//     return structure;
//   };
  
// function toggleDropdown (dropdownStructure) {
//     const dropdown = document.getElementById(dropdownStructure);
//     dropdown.classList.toggle("hide");
//     console.log("done");
//   };
  
//   const selectOption = (type, spanId, dropdownStructure) => {
//       const text = document.getElementById(spanId);
//       text.textContent = type;
//       toggleDropdown(dropdownStructure);
//     };
  
// dropdown("container","dropdown","dropdown-structure", carType, 'dropdown-input', 'my-car-type');

// //dropdown("container-2","dropdown-2","dropdown-structure-2", ownerID, 'dropdown-input-2', 'owner-id');