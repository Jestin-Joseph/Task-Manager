import PendingTasks from "../Views/AppViews/PendingTasks/PendingTasks";
import AllTasks from "../Views/AppViews/AllTasks/AllTasks";
import EditorView from "../Views/AppViews/EditiorView/EditorView";
// import RichTextEditor from "../Components/Editor/Editor";
// import MyEditor from "../Components/Editor/Editor";
export const primaryRoutes = [
    {
        route: "/",
        page: <AllTasks />,
        title: "All Tasks",
        permission: "user"
    },
    {
        route: "/tasks/:type?",
        page: <AllTasks />,
        title: "All Tasks",
        permission: "user"
    },
    {
        route: "/user/groups",
        page: <PendingTasks />,
        title: "Groups",
        permission: "user"
    },
    {
        route: "/user/projects",
        page: <PendingTasks />,
        title: "Projects",
        permission: "user"
    },
    {
        route: "/user/dashboard",
        page: <PendingTasks />,
        title: "Dashboard",
        permission: "user"
    }
];  