const seatContainer = document.getElementById("seatContainer");
const rows = "ABCDEFGHIJ".split("");
const seatsPerRow = 20;
const pricePerSeat = 295;

let selectedSeats = [];

/* Generate seat layout */
rows.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    const label = document.createElement("div");
    label.className = "row-label";
    label.innerText = row;
    rowDiv.appendChild(label);

    for (let i = 1; i <= seatsPerRow; i++) {
        const seat = document.createElement("div");
        seat.className = "seat available";
        seat.innerText = i;

        // Demo occupied seats
        if (Math.random() < 0.25) {
            seat.classList.remove("available");
            seat.classList.add("occupied");
        }

        seat.addEventListener("click", () => {
            if (seat.classList.contains("occupied")) return;

            seat.classList.toggle("selected");
            seat.classList.toggle("available");

            const seatId = row + i;
            if (selectedSeats.includes(seatId)) {
                selectedSeats = selectedSeats.filter(s => s !== seatId);
            } else {
                selectedSeats.push(seatId);
            }

            updateSummary();
        });

        rowDiv.appendChild(seat);
    }

    seatContainer.appendChild(rowDiv);
});

/* Update bottom bar */
function updateSummary() {
    document.getElementById("summary").innerText =
        `${selectedSeats.length} Seats • ₹${selectedSeats.length * pricePerSeat}`;
}

/* Proceed to payment */
function proceed() {
    if (selectedSeats.length === 0) {
        alert("Please select seats");
        return;
    }

    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    window.location.href = "payment.html";
}

/* Back to movie details */
function goBack() {
    window.location.href = "movie-details.html";
}
