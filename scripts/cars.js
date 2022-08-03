

document.addEventListener('DOMContentLoaded', () => {
    addCarTypes();
    console.log('loaded');
    });

function addCarTypes() {
    const type = ['Diesel', 'Hybrid', 'Electric'];
    const selectCar = document.getElementById('type-car');
    type.forEach(item => {
        selectCar.options.add(new Option (item));
    });
}

function selectPageByIndex(index) {
    const navigation = document.getElementsByTagName('ul')[0];
    const itemList = navigation.querySelectorAll('li');
    // itemList.forEach((item) => {
    //     item.classList.remove('activ');
    // })
    itemList[index].classList.add('activ');
}