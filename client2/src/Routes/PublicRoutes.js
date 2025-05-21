// import AllTasks from "../Views/AppViews/AllTasks/AllTasks"
import Login from "../Views/AppViews/Login/Login"

export const publicRoutes = [
    {
        route: "/signup",
        page: <Login />,
        title: "All Tasks",
        permission: "user"
    },
    {
        route: "/login",
        page: <Login />,
        title: "All Tasks",
        permission: "user"
    }
]