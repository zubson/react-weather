import React, {Component} from 'react';

import GoogleMap from 'google-map-react';


export default (props) => {
    return (
        <GoogleMap
            center={[props.lat, props.lng]}
            zoom={9}
            bootstrapURLKeys={{
                key: 'AIzaSyDM-dmxVt4OSRfexNtlV_Rvu-f_u9AjFGU',
            }}>
        </GoogleMap>
    );
}