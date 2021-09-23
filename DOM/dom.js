document.addEventListener("DOMContentLoaded", function () {

    const friends = ["Preston", 'Sheffield', 'John David', 'Ben', 'Hope', 'Andy', 'Marisa', 'Madi', 'Tobi', 'Demetrius']

    const btnOne = document.createElement("button");
    btnOne.setAttribute('id', "affirmation");
    btnOne.innerText = "Click for affirmation!"
    document.body.appendChild(btnOne);

    document.getElementById("affirmation").addEventListener("click", function () {
        alert("You are more than enough! Always look ahead knowing that you deserve the personal accomplishments that await you!")
    });

    let inputMessage = document.getElementById("inputMessage").value;

    document.getElementById("userMessage").addEventListener("click", function () {
        alert(inputMessage);
    })
})