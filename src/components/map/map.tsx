import * as React from 'react';
import {Settings} from '../../constants';
import {Place, City} from '../../types';

interface Props {
  offers: Place[],
  city: City,
  leaflet: any,
  activeCard: Place,
  className: string,
}

class Map extends React.PureComponent<Props, null> {
  map: any;
  constructor(props) {
    super(props);

    this.map = null;
  }

  render() {
    const className = this.props.className || `cities__map map`;
    return <section id="map" className={className}></section>;
  }

  componentDidMount() {
    const {
      offers,
      city,
      leaflet,
      activeCard
    } = this.props;

    try {
      this._renderMap(offers, city, leaflet, activeCard);
    } catch (error) {
      // something went wrong
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const {
        offers,
        city,
        leaflet,
        activeCard
      } = this.props;

      if (this.map) {
        this.map.remove();
      }
      this._renderMap(offers, city, leaflet, activeCard);
    }
  }

  _renderMap(offers, city, leaflet, activeCard = null) {
    let settings: any = {};
    const {latitude, longitude, zoom} = city.location;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 31]
    });
    const orangeIcon = leaflet.icon({
      iconUrl: `img/active-pin.svg`,
      iconSize: [28, 32]
    });

    if (activeCard) {
      settings = {
        center: [activeCard.location.latitude, activeCard.location.longitude],
        zoom: Settings.ZOOM,
        zoomControl: false,
        scrollWheelZoom: false,
        marker: true
      };
    } else {
      settings = {
        center: [latitude, longitude],
        zoom: Settings.ZOOM,
        zoomControl: false,
        scrollWheelZoom: false,
        marker: true
      };
    }

    this.map = leaflet.map(`map`, settings);
    this.map.setView([settings.center[0], settings.center[1]], zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    offers.map((item) => {
      const offerCoords = [item.location.latitude, item.location.longitude];
      if (activeCard && item.id === activeCard.id) {
        leaflet.marker(offerCoords, {icon: orangeIcon}).addTo(this.map);
      } else {
        leaflet.marker(offerCoords, {icon}).addTo(this.map);
      }
    });

    this.map.on(`click`, () => {
      if (this.map.scrollWheelZoom.enabled()) {
        this.map.scrollWheelZoom.disable();
      } else {
        this.map.scrollWheelZoom.enable();
      }
    });
  }
}

export default Map;
