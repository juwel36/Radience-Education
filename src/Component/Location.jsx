import Map from 'react-map-gl';

const Location = () => {


  return (
    <div>
      <div>
      <Map
      mapboxAccessToken="<Mapbox access token>"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
      </div>
    </div>
  );
};

export default Location;