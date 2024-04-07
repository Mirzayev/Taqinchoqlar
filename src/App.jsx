import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import LDefault from "./Layoutl/LDefault.jsx";
import ContactModal from "./components/ContactModal.jsx";
import Work from "./pages/Work.jsx";
import Home from "./pages/Home.jsx";
import Search from './pages/Search.jsx';


function App() {

    const routes = createBrowserRouter(
        [
            {
                path: "/",
                element: <LDefault/>,
                children: [
                    {
                        index: true,
                        element: <Home/>
                    },
                    {
                        path: '/contact',
                        element: <ContactModal/>
                    },
                    {
                        path: "/job",
                        element: <Work/>
                    },
                    {
                        path: "/search",
                        element: <Search/>
                    },


                ]
            }
        ]
    )

    return (
        <div className='max-w-[1920px] '>
            <RouterProvider router={routes}/>
        </div>
    )
}

export default App
