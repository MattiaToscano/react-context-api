import MainNavbar from "../components/MainNavbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default DefaultLayout;