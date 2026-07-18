"use client";

import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import { siteConfig } from "@/config/site";

export default function Navermap() {
  const navermaps = useNavermaps();
  const office = new navermaps.LatLng(siteConfig.geo.lat, siteConfig.geo.lng);

  return (
    <div className="w-full h-full min-h-[400px]">
      <MapDiv style={{ width: "100%", height: "100%" }}>
        {navermaps ? (
          <NaverMap defaultCenter={office} defaultZoom={16}>
            <Marker position={office} title={siteConfig.name} />
          </NaverMap>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-400 text-sm">
            지도를 불러오는 중입니다…
          </div>
        )}
      </MapDiv>
    </div>
  );
}
