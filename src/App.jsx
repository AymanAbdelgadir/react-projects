import Navigation from "./Projects/AdvancedFiltering/Navigation/Navigation.jsx";
import Products from "./Projects/AdvancedFiltering/Products/Products.jsx";
import Sidebar from "./Projects/AdvancedFiltering/sidebar/Sidebar.jsx";
import Recommended from "./Projects/AdvancedFiltering/Recommended/Recommended.jsx";


const App = () => {
    return (
        <>
           <Navigation />
            <Recommended />
           <Products />
           <Sidebar />
        </>
    );
};

export default App;