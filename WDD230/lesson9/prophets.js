
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        birthDate.textContent = "Birthday: " + prophets[i].birthdate; 
        birthPlace.textContent = "Birth Place: " + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card); 
    }
  });

