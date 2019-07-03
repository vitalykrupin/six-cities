import * as React from 'react';
import withSortings from '../../hocs/with-sortings/with-sortings';

interface Props {
  onSortingsClick: () => void,
  onSortingClick: (index: number) => void,
  onMouseLeave: () => void,
  opened: boolean,
  activeSorting: number
}

const sortings = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

const Sortings = (props: Props) => {
  const {
    onSortingsClick,
    onSortingClick,
    onMouseLeave,
    opened,
    activeSorting
  } = props;

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by </span>
    <span className="places__sorting-type" tabIndex={0} onClick={() => onSortingsClick()}>
      {sortings[activeSorting]}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"/>
      </svg>
    </span>
    <ul
      className={`places__options places__options--custom ${opened ? `places__options--opened` : ``}`}
      onMouseLeave={() => onMouseLeave()}
    >
      {sortings.map((item, index) => <li className={`places__option ${index === activeSorting
        ? `places__option--active`
        : ``}`} tabIndex={0} key={`Sorting-${item}`} onClick={() => onSortingClick(index)}>{item}</li>)}
    </ul>
  </form>;
};

export {Sortings};

export default withSortings(Sortings);
