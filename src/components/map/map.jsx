import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="map" style={{height: 800, marginTop: 25, marginBottom: 25}}/>
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const {offers} = this.props;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((offer) => {
      const offerCoords = [offer.coords[0], offer.coords[1]];
      leaflet
        .marker(offerCoords, {icon})
        .addTo(map);
    });
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object)
};

export default Map;
