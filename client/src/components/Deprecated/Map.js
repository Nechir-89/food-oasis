import React from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";

import { MAPBOX_STYLE } from "constants/map";

import MarkerPopup from "./MarkerPopup";
import Marker from "../FoodSeeker/Marker";

const styles = {
  geolocate: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10,
  },
  mapContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    margin: "1rem",
  },
  controlPanel: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  navigationControl: { position: "absolute", top: 0, right: 0, margin: 10 },
};

function Map({ selectedLatitude, selectedLongitude, stakeholders }) {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [selectedStakeholder, setSelectedStakeholder] = React.useState(null);
  const [viewport, setViewport] = React.useState({
    zoom: 10, // TODO: can we dynamically control zoom radius based on selectedDistance?
    latitude: selectedLatitude,
    longitude: selectedLongitude,
  });

  const handleMarkerClick = (clickedStakeholder) => {
    setSelectedStakeholder(clickedStakeholder);
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
    setSelectedStakeholder(null);
  };

  return (
    <div style={styles.mapContainer}>
      <ReactMapGL
        {...viewport}
        width={`90vw`}
        height={`82vh`}
        onViewportChange={(newViewport) => setViewport(newViewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={MAPBOX_STYLE}
      >
        {/* TODO: uncomment GeolocateControl when you can figure out why it's crashing the page now */}
        {/* <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          style={styles.geolocate}
        /> */}
        <div style={styles.navigationControl}>
          <NavigationControl />
        </div>
        {stakeholders &&
          stakeholders
            .filter((sh) => sh.latitude && sh.longitude)
            .map((stakeholder) => (
              <Marker
                key={stakeholder.id}
                onClick={() => handleMarkerClick(stakeholder)}
                stakeholder={stakeholder}
              />
            ))}
        {isPopupOpen && selectedStakeholder && (
          <MarkerPopup entity={selectedStakeholder} handleClose={handleClose} />
        )}
      </ReactMapGL>
    </div>
  );
}

export default Map;
