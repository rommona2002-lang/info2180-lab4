
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#search-btn");
    const input = document.querySelector("#query");
    const result = document.querySelector("#result");

    // Listen for button click
    button.addEventListener("click", () => {
        const query = input.value.trim(); // get user input and remove spaces
        const url = query
            ? `superheroes.php?query=${encodeURIComponent(query)}`
            : "superheroes.php"; // if empty, return all heroes

        // Use Fetch API to make AJAX request
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                // Display PHP output inside the result div
                result.innerHTML = data;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                result.innerHTML = `<p style="color:red;">An error occurred: ${error.message}</p>`;
            });
    });
});



