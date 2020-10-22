import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow, Circle } from "@react-google-maps/api";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { currentLocation } from '../actions/index';

const API_KEY = 'AIzaSyDfZkle_ROHQe4zofcg0oPkewLCrcV7wxo'
const libraries = ["places"];
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 3000,
    zIndex: 1
}
const center = {
    lat: 60.169579,
    lng: 24.930500,
};


function Maps(props) {
    const [selected, setSelected] = React.useState(null);
    const [lat, setLat] = React.useState(null);
    const [lng, setLng] = React.useState(null);
    const mapRef = React.useRef();
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: API_KEY,
        libraries
    });


    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);
    if (loadError) return "error";
    if (!isLoaded) return "loading";


    return (
        <div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"

                onClick={() => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            setLat(position.coords.latitude);
                            setLng(position.coords.longitude);
                            panTo({
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            })

                        },
                        () => null
                    )
                    console.log(lng)
                }}
            >
                Get location
            </button>

            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                onLoad={onMapLoad}

            >
                <Circle
                    center={{ lat: lat, lng: lng }}
                    radius={500}
                    options={options}
                />

                {props.areaList.map(area => (
                    <Marker
                        key={area.ID}
                        position={{
                            lat: area.coordinates[0],
                            lng: area.coordinates[1]
                        }}
                        onClick={() => {
                            setSelected(area);
                        }}
                    />
                ))}

                {selected && (
                    <InfoWindow
                        onCloseClick={() => {
                            setSelected(null);
                        }}
                        position={{
                            lat: selected.coordinates[0],
                            lng: selected.coordinates[1]
                        }}
                    >
                        <div>
                            <strong>{selected.Name}</strong>
                            <p>{selected.address}</p>
                        </div>
                    </InfoWindow>
                )}

            </GoogleMap>

        </div>
    )
}



function mapStateToProps(state) {
    return {
        areaList: state.movieList.areaList,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ currentLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Maps)
