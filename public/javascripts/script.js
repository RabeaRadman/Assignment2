

function HoverForm(element) {
    element.nextElementSibling.style.display = 'inline';
}

function HoverFormExit(element) {
    element.nextElementSibling.style.display = 'none';
}


function mySubmit() {
  return window.confirm("Are you sure you want to submit the form?")
}

function myReset() {
  return window.confirm("Are you sure you want to reset the form?")
}

