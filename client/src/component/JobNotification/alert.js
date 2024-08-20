// Request permission to show notifications
function requestNotificationPermission() {
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("Notification permission granted.");
            } else {
                console.log("Notification permission denied.");
            }
        });
    } else {
        console.log("This browser does not support notifications.");
    }
}

// Function to show a notification
function showNotification() {
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Welcome to My Portfolio!", {
            body: "I'm currently seeking job opportunities. Feel free to contact me!",
            icon: "/path-to-your-icon.png"
        });
    }
}

export { requestNotificationPermission, showNotification };
