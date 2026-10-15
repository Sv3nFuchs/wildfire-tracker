import { useState } from 'react'
import { APIProvider, Map as GMap, AdvancedMarker } from '@vis.gl/react-google-maps'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData = [], center = { lat: 42.3265, lng: -122.8756 }, zoom = 6 }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000
    
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            const latest = ev.geometries[ev.geometries.length - 1]
            if(new Date(latest.date) > cutoff) {
                return (
                    <AdvancedMarker
                        key={ev.id}
                        position={{ lat: latest.coordinates[1], lng: latest.coordinates[0] }}
                        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
                    >
                        <LocationMarker />
                    </AdvancedMarker>
                )
            }
        }
        return null
    })
    return (
    <div className="map">
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GMap
            defaultCenter={center}
            defaultZoom={zoom}
            mapId="DEMO_MAP_ID"
            gestureHandling="greedy"
            style={{ width: '100%', height: '100%' }}
      >
            {markers}
        </GMap>
        </APIProvider>
        {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

export default Map