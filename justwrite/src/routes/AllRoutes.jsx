import { Routes, Route } from "react-router-dom";
import { HomePage, CreatePost, PageNotFound } from "../pages";
import { ProtectedRoutes } from "./ProtectedRotes";

export const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="create" element={ <ProtectedRoutes><CreatePost /></ProtectedRoutes> } />
            <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </main>
  )
}
