import PendingTasks from "../Views/AppViews/PendingTasks/PendingTasks";
import AllTasks from "../Views/AppViews/AllTasks/AllTasks";


export const primaryRoutes = [
    {
        route: "/",
        page: <AllTasks />,
        title: "All Tasks",
        permission: "user"
    },
    {
        route: "/alltasks",
        page: <AllTasks />,
        title: "All Tasks",
        permission: "user"
    },
    {
        route: "/pendingtasks",
        page: <PendingTasks />,
        title: "Pending Tasks",
        permission: "user"
    }
];  