        // Array to store the original state of home cards
        const originalHomeCards = Array.from(document.querySelectorAll('.Homeinner_content'));

        // Function to filter homes based on search input
        function filterHomes() {
            const searchInput = document.getElementById('search').value.toLowerCase();
            const homeCardsContainer = document.querySelector('.Home_wrapper');

            // Clear existing cards
            homeCardsContainer.innerHTML = '';

            // Filter and display matching cards
            const matchingCards = originalHomeCards.filter(card => {
                const homeName = card.querySelector('.card-title').textContent.toLowerCase();
                return homeName.includes(searchInput);
            });

            matchingCards.forEach(card => {
                homeCardsContainer.appendChild(card.cloneNode(true));
            });

            // Reattach event listeners for home-details-toggle buttons
            attachEventListeners();
        }

        // Function to attach event listeners for home-details-toggle buttons
        function attachEventListeners() {
            const homeDetailsToggle = document.querySelectorAll('.home-details-toggle');
            homeDetailsToggle.forEach(function (element) {
                element.addEventListener('click', function (e) {
                    e.preventDefault();
                    const homeId = this.getAttribute('data-home');
                    const homeDetails = document.getElementById(homeId + '-details');
                    homeDetails.classList.toggle('show'); // Toggle the visibility of home-details
                });
            });
        }

        // Handle form submission
        const rentalForm = document.getElementById('rental-form');
        const submissionResult = document.querySelector('.submission-result');

        rentalForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const destination = document.getElementById('destination').value;
            const home = document.getElementById('home').value;
            const price = document.getElementById('price').value;

            // Display submission result
            submissionResult.classList.add('show');
            rentalForm.reset();
        });

        // Initial setup of event listeners
        attachEventListeners();
    