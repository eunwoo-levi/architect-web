"use client";

import React, { useEffect, useState } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

export default function Navermap() {
  const navermaps = useNavermaps();
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="w-full h-96">
      <MapDiv style={{ width: "100%", height: "100%" }}>
        {navermaps ? (
          <NaverMap
            defaultCenter={
              currentPosition
                ? new navermaps.LatLng(currentPosition.lat, currentPosition.lng)
                : new navermaps.LatLng(35.8662910116539, 128.63429893576) // Default center if geolocation fails
            }
            defaultZoom={15}
          >
            {/* 기존 위치 마커 */}
            <Marker
              position={new navermaps.LatLng(35.8662910116539, 128.63429893576)}
            />
            {/* 현재 위치 마커 */}
            {currentPosition && (
              <Marker
                position={
                  new navermaps.LatLng(currentPosition.lat, currentPosition.lng)
                }
                icon={{
                  url: "https://img.icons8.com/fluency/48/000000/user-location.png", // 사용자 위치 아이콘
                  size: new navermaps.Size(48, 48),
                }}
              />
            )}
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
