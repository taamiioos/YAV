import Events from './components/events/Events';
import './styles/main.css';
import ClusterPage from "./components/clusterPage/ClusterPage";
import EventPage from './components/eventPage/EventPage'
import BuyTicketPage from "./components/buyTicketPage/BuyTicketPage";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/" element={<ClusterPage />} />
                <Route path="/registerPage" element={<RegisterPage />} />
                <Route path="/clusterPage" element={<ClusterPage />} />
                <Route path="/eventsPage" element={<Events />} />
                <Route path="/ticketPage" element={<BuyTicketPage />} />
                <Route path="/eventPage" element={<EventPage />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;