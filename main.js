const submit = document.getElementById('submit');

const handleClick = (e) => {
    console.log("function entered");
    e.preventDefault();
}

submit.addEventListener("click", handleClick)

