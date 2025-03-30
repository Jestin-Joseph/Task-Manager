import PendingTasks from "../Views/AppViews/PendingTasks/PendingTasks";
import AllTasks from "../Views/AppViews/AllTasks/AllTasks";
import EditorView from "../Views/AppViews/EditiorView/EditorView";
// import RichTextEditor from "../Components/Editor/Editor";
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
        route: "/pendingtasks",
        page: <PendingTasks />,
        title: "Pending Tasks",
        permission: "user"
    },
    {
        route: "/trial",
        page: <EditorView />,
        title: "Pending Tasks",
        permission: "user"
    }
];  