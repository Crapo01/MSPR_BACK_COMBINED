import Actu from "../components/Actu";
import Concerts from "../components/Concerts";
import Shop from "../components/Shop";
import MapMini from "../components/MapMini";


function Home() {
    return (
        <>            
            <Concerts />
            <Actu />            
            <Shop/>            
            <MapMini/>
            
      </>  
    );
};

export default Home;