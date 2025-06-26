import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  console.log({props})
  
renderServerUp();
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.start),
      L.latLng(props.end)
    ],
    lineOptions: {
      styles: [{ color: "red", weight: 6 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: function () {
      return null;
    }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

async function renderServerUp() {
        try {
            const response = await fetch("https://msprback-cms-reworked.onrender.com/api/access/viewer");            
            const data = await response.json();
            //alert("render service on");
            

        } catch (error) {
            alert("Une erreur est survenue dans l'appel Render ")
            //console.log(error)
        }
    }

export default RoutingMachine;