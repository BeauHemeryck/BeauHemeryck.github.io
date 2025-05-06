document.addEventListener("DOMContentLoaded", function() {
    const birthDate = new Date("1999-05-26");
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    document.getElementById("age").innerText = age;
});
