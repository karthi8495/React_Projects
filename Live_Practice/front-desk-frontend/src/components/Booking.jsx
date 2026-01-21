import React, { useState } from 'react'
import api from '../api/axiosConfig'

function Booking() {
    const [customerName, setCustomerName] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");

    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/bookings/book", {
                customerName,
                service,
                date,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Booking failed. Please try again.");
        }
    };
    return (
        <div>
            <h2>Create Booking</h2>
            <form onSubmit={handleBooking}>
                <div>
                    <label>Customer Name</label>
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Service</label>
                    <input
                        type="text"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <button type="submit">Book</button>
                {message && <p style={{ color: "green" }}>{message}</p>}
            </form>
        </div>
    )
}

export default Booking