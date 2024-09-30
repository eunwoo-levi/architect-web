"use client";

import React from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

export default function Navermap() {
  const navermaps = useNavermaps();

  return (
    <div className="w-full h-96">
      <MapDiv style={{ width: "100%", height: "100%" }}>
        {navermaps ? (
          <NaverMap
            defaultCenter={new navermaps.LatLng(35.8649597, 128.63412)}
            defaultZoom={15}
          >
            <Marker position={new navermaps.LatLng(35.8649597, 128.63412)} />
          </NaverMap>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            Loading maps...
          </div>
        )}
      </MapDiv>
    </div>
  );
}
