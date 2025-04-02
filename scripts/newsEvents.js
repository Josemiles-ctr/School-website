function toggleReadMore() {
    document.getElementById("more").classList.toggle("expanded");
}
const currentYear = document.getElementById("current-year")
const monthYear = document.getElementById("month-year");
const datesContainer = document.getElementById("dates");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentDate = new Date();

function renderCalendar() {
    datesContainer.innerHTML = "";

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const today = new Date();

    monthYear.textContent = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    currentYear.textContent = currentDate.toLocaleDateString("en-US", { year: "numeric" })
    // Add empty spaces for first day
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("date", "empty");
        datesContainer.appendChild(emptyDiv);
    }

    // Add dates
    for (let i = 1; i <= lastDate; i++) {
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        dateDiv.textContent = i;

        if (
            i === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear()
        ) {
            dateDiv.classList.add("today");
        }

        datesContainer.appendChild(dateDiv);
    }
}

prevButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
    currentYear.textContent = currentDate.toLocaleDateString("en-US", { year: "numeric" })
});

nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
    currentYear.textContent = currentDate.toLocaleDateString("en-US", { year: "numeric" })
});

// Initial render
renderCalendar();
// Add events to specific dates
const events = {
    "2025-04-10": "Visitation day",
    "2025-06-25": "Going Day ",
    "2025-08-20": "School Day",
    "2025-10-20": "Sports Day",

};

function renderCalendarWithEvents() {
    datesContainer.innerHTML = "";

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const today = new Date();

    monthYear.textContent = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });

    // Add empty spaces for first day
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("date", "empty");
        datesContainer.appendChild(emptyDiv);
    }

    // Add dates
    for (let i = 1; i <= lastDate; i++) {
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        dateDiv.textContent = i;

        const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;

        if (
            i === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear()
        ) {
            dateDiv.classList.add("today");
        }

        if (events[dateKey]) {
            dateDiv.classList.add("event");
            dateDiv.style.backgroundColor = "rgb(35, 73, 60)"
            dateDiv.style.color = "white"
            dateDiv.innerHTML += "<br>" + '<span class="date-desc" style="font-size=8pt;">' + `${events[dateKey]}` + '</span>'
            dateDiv.title = events[dateKey];
        }

        datesContainer.appendChild(dateDiv);
    }
}

// Update the event rendering
renderCalendar = renderCalendarWithEvents;

// Initial render with events
renderCalendar();
