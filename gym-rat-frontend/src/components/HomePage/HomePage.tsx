import Header from "../Header";
import RecordsManager from "./RecordsManager";

const HomePage = () => {
    return(
        <>
            <Header title = "Welcome to Gym Rat 🏋🏻+🐁" subtitle = "Track your lifts and achieve your goals!" />
            <RecordsManager />
        </>
    );
}

export default HomePage;