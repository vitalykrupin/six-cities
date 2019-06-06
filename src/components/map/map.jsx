import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const SETTINGS = {
  city: [52.38333, 4.9],
  zoom: 12
};

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.leaflet = leaflet;

    this.icon = this.leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });
  }

  addMarkers(cards, group) {
    cards.map((card) => {
      this.leaflet.marker(card.coords, {icon: this.icon}).addTo(group);
    });
  }

  render() {
    return (
      <div id="map" style={{height: 800, marginTop: 25, marginBottom: 25}}/>
    );
  }

  componentDidMount() {
    const {places} = this.props;

    this.map = this.leaflet.map(`map`, {
      center: SETTINGS.city,
      zoom: SETTINGS.zoom,
      zoomControl: false,
      layers: new this.leaflet.TileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
    }, 100);

    this.markers = this.leaflet.layerGroup().addTo(this.map);
    this.addMarkers(places, this.markers);
  }

  componentDidUpdate() {
    const {places} = this.props;

    if (this.map) {
      this.map.setView(SETTINGS.city, SETTINGS.zoom);
      this.markers.clearLayers();
      this.addMarkers(places, this.markers);
    }
  }
}

Map.propTypes = {
  places: PropTypes.array
};

export default Map;
