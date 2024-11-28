import { BrowserRouter, Routes, Route } from "react-router";

import { PATH } from "./constants";

import { Home, Settings, Weeks } from './pages';
import { UserProvider } from "./context";
import CheckPermissions from "./shared/checkPermissions";

const ROUTES = [
  {
    key: 'home',
    path: PATH.HOME,
    element: <Home />
  },
  {
    key: 'settings',
    path: PATH.SETTINGS,
    element: <Settings />
  },
  {
    key: 'weeks',
    path: PATH.WEEKS,
    element: <Weeks />
  }
]

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {
            ROUTES.map((route) => (
              <Route
                key={ route.key }
                path={ route.path } 
                element={ <CheckPermissions path={ route.path }>{ route.element }</CheckPermissions> } 
              />
            ))
          }
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
