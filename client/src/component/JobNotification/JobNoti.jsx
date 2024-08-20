import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    useEffect(() => {
        const showToastWithInterval = () => {
            if (!sessionStorage.getItem('toastShown')) {
                showNotification();

                // Mark the toast as shown in session storage
                sessionStorage.setItem('toastShown', 'true');

                // Clear session storage after 5 seconds
                setTimeout(() => {
                    sessionStorage.removeItem('toastShown');
                }, 5000);
            }

            // Schedule the next toast 30 seconds later
            setTimeout(showToastWithInterval, 30000);
        };

        // Start the cycle
        showToastWithInterval();
    }, []);

    const showNotification = () => {
        toast.info("Welcome to My Portfolio! I'm currently seeking job opportunities. Feel free to contact me!", {
            position: "top-right",
            autoClose: 5000,  // The toast will automatically close after 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div className="App">
            <ToastContainer />
        </div>
    );
}

export default App;
