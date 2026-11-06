const charactersBlock = document.querySelector("#characters");

console.log("JavaScript подключен!");

fetch("./characters.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Не удалось загрузить characters.json");
        }

        return response.json();
    })
    .then(characters => {

        console.log("Персонажи загружены:", characters);

        charactersBlock.innerHTML = "";

        characters.forEach(character => {

            const card = document.createElement("div");
            card.classList.add("card");

            const image = document.createElement("img");
            image.src = character.person_photo;
            image.alt = character.name;

            image.onerror = function() {
                this.alt = "Фотография не загрузилась";
                this.src = "https://placehold.co/300x300?text=No+Image";
            };

            const name = document.createElement("h2");
            name.textContent = character.name;

            card.appendChild(image);
            card.appendChild(name);

            charactersBlock.appendChild(card);

        });

    })
    .catch(error => {
        console.error("Ошибка:", error);
        charactersBlock.textContent = "Ошибка загрузки персонажей!";
    });
    fetch("./bio.json")
    .then(response => response.json())
    .then(data => {
        console.log("Моя информация:", data);
    })
    .catch(error => {
        console.log("Ошибка загрузки bio.json:", error);
    });