var answer = prompt("Input your age:");
while (!/^[0-9]+$/.test(answer) || answer < 18) {
    alert("try again");
    answer = prompt("try again ");
}
alert("You are now verified!");