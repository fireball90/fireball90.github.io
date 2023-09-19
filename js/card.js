function loadJSON() {
    fetch('js/card.json') 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            generateCards(data);
        })
        .catch(function (err) {
            console.log('Error loading JSON: ' + err);
        });
}


function generateCards(data) {
    var cardHTML = '';
    data.forEach(function (item) {
        cardHTML += `
        <div class="col-md-4">
            <div class="bs-component">
                <div class="card mb-3">
                    <div class="card-header h4 ${item.colour}">${item.header}</div>
                    <div class="text-center jumbotron3">
                        <img src="${item.image}" alt=${item.header} title=${item.header} onclick="openModal(this.src)"/>
                    </div>
                    <div class="card-body">
                        <p class="card-text text-justify">${item.text}</p>
                    </div>
                    <div class="card-body bg-darkgray">
                        <a href="#" class="card-link" data-toggle="modal" data-target="#projectModal" data-id=${item.id}>More information</a>
                    </div>
                    <div class="card-footer text-muted">
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    document.getElementById('cards').innerHTML = cardHTML;
}


document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('card-link')) {
        var cardId = event.target.getAttribute('data-id');
        loadAndDisplayModal(cardId);
    }
  });
  
  function loadAndDisplayModal(cardId) {
    fetch('js/modal.json')
        .then(function (response) {
            return response.json();     
        })
        .then(function (data) {
            var modalData = data.find(function (item) {
                return item.id === Number(cardId);
            });
            

            if (modalData) {
                var modalTitle = document.getElementById("modalTitle");
                var modalBody = document.getElementById("modalBody");
                var modalImages = document.getElementById("modalImages");
                var githubLinkButton = document.getElementById("githubLinkButton");
  
                modalTitle.textContent = modalData.header;
                modalBody.innerHTML = `<p>${modalData.text}</p>`;
  
                modalImages.innerHTML = "";
  
                modalData.images.forEach(function (imageUrl) {
                    var img = document.createElement("img");
                    img.src = imageUrl;
                    img.alt = modalData.header;
                    img.title = modalData.header;
                    img.addEventListener("click", function () {
                        openModal(imageUrl);
                    })
                    modalImages.appendChild(img);
                });

                githubLinkButton.href = modalData.github;

                $('#projectModal').modal('show');
            } else {
                console.log('Modal data not found for cardId: ' + cardId);
            }
        })
        .catch(function (err) {
            console.log('Error loading modal data: ' + err);
        });
  }

