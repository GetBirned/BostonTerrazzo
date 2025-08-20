import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Create custom terrazzo-colored marker
const terrazzoIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
      <path fill="#243b53" stroke="#ffffff" stroke-width="1" d="M12.5,0 C19.4,0 25,5.6 25,12.5 C25,19.4 12.5,41 12.5,41 C12.5,41 0,19.4 0,12.5 C0,5.6 5.6,0 12.5,0 Z"/>
      <circle fill="#ffffff" cx="12.5" cy="12.5" r="4"/>
    </svg>
  `),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const ServiceAreaMap = () => {
  // Connected service area covering NH, Southern ME, and Eastern MA
  const serviceArea = [
    [45.0000, -72.5570], // Northwest corner (Northern NH, below Canada)
    [45.0000, -70.5000], // Northeast corner (Northern NH/ME border, below Canada)
    [43.9000, -70.0000], // Maine northeast (includes Portland area)
    [43.0759, -70.0000], // Maine/NH seacoast
    [42.2352, -70.8167], // Eastern MA coast (Boston area)
    [42.2352, -71.1912], // Western MA boundary
    [42.6970, -72.5570], // Southwest corner (Western MA/NH border)
    [45.0000, -72.5570], // Back to northwest corner
  ];

  const centerPosition: [number, number] = [43.5, -71.2];

  const polygonOptions = {
    fillColor: '#80868b',
    fillOpacity: 0.3,
    color: '#5f6368',
    weight: 2,
    opacity: 0.8,
  };

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={centerPosition}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Connected Service Area */}
        <Polygon
          positions={serviceArea}
          pathOptions={polygonOptions}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-terrazzo-800 mb-2">Service Area</h3>
              <p className="text-sm text-gray-600">
                New Hampshire, Southern Maine, and Eastern Massachusetts
              </p>
            </div>
          </Popup>
        </Polygon>

        {/* Company Location Marker */}
        <Marker position={[43.4342, -71.2092]} icon={terrazzoIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-terrazzo-700 mb-1">Boston Terrazzo</h3>
              <p className="text-sm text-gray-600">Alton, NH - Serving New England</p>
              <p className="text-sm text-terrazzo-700 font-medium">(603) 351-1827</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ServiceAreaMap;