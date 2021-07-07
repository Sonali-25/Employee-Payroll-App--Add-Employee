window.addEventListener('DOMContentMetod',(event) => {

const salary=document.querySelector('#salary');
const salaryOutput=document.querySelector('.salary-output')
salary.addEventListener('input', function () {
    salaryOutput.textContent = salary.value;
    console.log(salaryOutput.textContent);
}); 

//Name validation
const name = document.querySelector('#name');
const textError = document.querySelector('.text-error');
name.addEventListener('input', function () {
if (name.value.length == 0) {
    textError.textContent = "";
    return;
}
try {
    (new EmployeePayrollData()).name = name.value;
    textError.textContent = "";
} catch (e) {
textError.textContent = e;
}
});
const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');

    day.addEventListener('input', checkDate);
    month.addEventListener('input', checkDate);
    year.addEventListener('input', checkDate);

function checkDate() {
    const dateError = document.querySelector('.date-error');
    try {
        let date = day.value + " " + month.value + " " + year.value;
        (new EmployeePayrollData()).startDate = new Date(Date.parse(date));
        dateError.textContent = "";
    } catch (e) {
        dateError.textContent = e;
    }
    const createEmployeePayroll = () => {
        let EmployeePayrollData = new EmployeePayrollData;
        try {
            EmployeePayrollData.name = getInputvalueById('#name');
        } catch (e) {
            setTextValue('.text-error', e);
            throw e;
        }
        employeePayrollData.profilePic = getSelectedValues('[name=gender]').pop();
        employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
        employeePayrollData.department = getSelectedValues('[name=department]').pop();
        employeePayrollData.salary = getInputvalueById('#salary');
        employeePayrollData.note = getInputvalueById('#notes');
        let date = getInputvalueById('#day')+" "+getInputvalueById('#month')+" "+getInputvalueById('#year');
        employeePayrollData.date = Date.parse(date);
        alert(employeePayrollData.toString());
        return employeePayrollData;
    }
    const getSelectedValues = (propertyValue) => {
        let allItems = document.querySelectorAll(propertyValue);
        let setItems = [];
        allItems.forEach(item => {
            if(item.checked) setItems.push(item.value);
        });
        return setItems;
    }
    const getInputvalueById = (id) => {
        let value = document.querySelector(id).value;
        return value;
    }
    const setTextValue = (id, value) => {
        let textError = document.querySelector(id);
        textError.textContent = value;
        }    
    const save = (_event) => {
        try {
            let employeePayrollData = createEmployeePayroll();
            createAndUpdateStorage(employeePayrollData);
        } catch (e) {
            return;
        }
    } 
    function createAndUpdateStorage(_employeePayrollData){
        let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"))
        if(employeePayrollList != undefined) {
            employeePayrollList.push(EmployeePayrollData);
        } else {
            employeePayrollList = [EmployeePayrollData]
        }
        alert(employeePayrollList.toString());
        localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}
const resetForm = () => {
    setTextValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}
const setTextValue = (id, value) => {
    const element= document.querySelector(id);
    element.textContent = value;
}
const setValue = (id, value) =>{
    const element = document.querySelector(id);
    element.value = value;
}
}
})
