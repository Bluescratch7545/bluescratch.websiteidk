function idk() {
    alert("why");
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200);
    });
});

let altitude = 35000;

function increaseAltitude() {
    altitude += 1000
    document.getElementById("altitude").innerText = altitude.toLocaleString() + "ft"
}

function welcome() {
    const name = document.getElementById("name").value;
    alert("Welcome " + name + ", on BSA flight 7545! " + "✈️✈️✈️✈️✈️")
}

document.addEventListener("DOMContentLoaded", () => {
    const planes = document.querySelectorAll("img.fly-in");
    planes.forEach((plane, index) => {
        setTimeout(() => {
            plane.classList.add('visible');
        }, index * 300);
    });
});