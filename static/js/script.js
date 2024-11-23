document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-button");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    // Ascunde formularul de căutare inițial
    searchInput.style.display = "none";

    // La click pe iconița de căutare, afișează câmpul de căutare
    searchButton.addEventListener("click", function () {
        if (searchInput.style.display === "none") {
            searchInput.style.display = "block"; // Afișează input-ul
            searchInput.focus(); // Pune focus pe câmpul de căutare
            searchButton.style.display = "none"; // Ascunde butonul de căutare
        }
    });
});


<script>
  document.addEventListener('DOMContentLoaded', function () {
    const searchToggle = document.getElementById('searchToggle');
    const searchForm = document.getElementById('searchForm');

    searchToggle.addEventListener('click', function () {
      if (searchForm.classList.contains('d-none')) {
        searchForm.classList.remove('d-none');
      } else {
        searchForm.classList.add('d-none');
      }
    });

    // Închide formularul când utilizatorul face clic în afara acestuia
    document.addEventListener('click', function (event) {
      if (!searchForm.contains(event.target) && !searchToggle.contains(event.target)) {
        searchForm.classList.add('d-none');
      }
    });
  });
</script>
