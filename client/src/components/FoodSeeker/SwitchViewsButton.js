import React from "react";
import { Button } from "@material-ui/core";
import MapIcon from "@material-ui/icons/Map";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

export default function SwitchViewsButton({
  isMapView,
  onClick,
  color = "primary",
}) {
  return (
    <Button onClick={onClick} style={{ color }}>
      {isMapView && (
        <>
          <FormatListBulletedIcon />
          <span style={{ fontSize: "1rem", marginRight: ".5rem" }}>List</span>
        </>
      )}
      {!isMapView && (
        <>
          <MapIcon />
          <span style={{ fontSize: "1rem", marginRight: ".5rem" }}>Map</span>
        </>
      )}
    </Button>
  );
}
