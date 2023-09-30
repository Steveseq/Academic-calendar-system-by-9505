// Sample data for initial calendar events
let events = [
    { date: "15-08-2023", event: "First Day of Classes" },
    { date: "01-11-2023", event: "Final Exams Begin" },
    { date: "19-09-2023 to 24-09-2023", event:"Holidays"}

    // Add more initial events here
];

// Function to display events on the calendar
function displayEvents() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = '';

    events.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.innerHTML = `<strong>${event.date}:</strong> ${event.event}`;
        calendar.appendChild(eventDiv);
    });
}

// Function to add a new event
function addEvent() {
    const dateInput = document.getElementById("date-input").value;
    const eventInput = document.getElementById("event-input").value;

    if (dateInput && eventInput) {
        events.push({ date: dateInput, event: eventInput });
        displayEvents();
    }
}

// Function to edit an existing event
function editEvent() {
    const dateInput = document.getElementById("date-input").value;
    const eventInput = document.getElementById("event-input").value;

    if (dateInput && eventInput) {
        // Find the index of the event to edit based on the date
        const indexToEdit = events.findIndex(event => event.date === dateInput);

        if (indexToEdit !== -1) {
            // Update the event with the new information
            events[indexToEdit] = { date: dateInput, event: eventInput };
            displayEvents();
            alert("Event edited successfully.");
        } else {
            alert("Event not found. Please enter a valid date.");
        }
    } else {
        alert("Please enter both date and event information.");
    }
    
}

// Function to delete an existing event
function deleteEvent() {
    const dateInput = document.getElementById("date-input").value;

    if (dateInput) {
        // Find the index of the event with the matching date
        const eventIndex = events.findIndex(event => event.date === dateInput);

        if (eventIndex !== -1) {
            // Remove the event from the array
            events.splice(eventIndex, 1);

            // Clear the input fields
            document.getElementById("date-input").value = "";
            document.getElementById("event-input").value = "";

            // Update the displayed events
            displayEvents();
        } else {
            alert("Event not found. Please enter a valid date.");
        }
    } else {
        alert("Please enter a date to delete an event.");
    }
}


// Initial display of events
displayEvents();