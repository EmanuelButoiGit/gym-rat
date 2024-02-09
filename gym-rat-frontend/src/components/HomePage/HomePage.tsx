import NotificationManager from "../AchivementsPage/NotificationManager";
import RecordsManager from "./RecordsManager";
import Welcome from "./Welcome";

const HomePage = () => {
    return(
        <>
            <Welcome />
            <RecordsManager />
            <NotificationManager />
        </>
    );
}

export default HomePage;