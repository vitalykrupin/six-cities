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
    const {offers} = this.props;

    this.map = this.leaflet.map(`map`, {
      center: SETTINGS.city,
      zoom: SETTINGS.zoom,
      zoomControl: false,
      layers: new this.leaflet.TileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
    }, 100);

    this.markers = this.leaflet.layerGroup().addTo(this.map);
    this.addMarkers(offers, this.markers);
  }

  componentDidUpdate() {
    const {offers} = this.props;

    if (this.map) {
      this.map.setView(SETTINGS.city, SETTINGS.zoom);
      this.markers.clearLayers();
      this.addMarkers(offers, this.markers);
    }
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
    image: PropTypes.string,
    price: PropTypes.string,
    rate: PropTypes.number,
    isBookmarked: PropTypes.bool,
    isPremium: PropTypes.bool
  })).isRequired,
};

export default Map;
