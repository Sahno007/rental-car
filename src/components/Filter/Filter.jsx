import Select from 'react-select';
import makes from '../../bd/makes.json';
import {
  FormFilter,
  InputMile,
  LabelMakes,
  SearchButton,
  WrapperFlex,
  WrapperFrom,
  WrapperMakes,
  WrapperPrice,
  WrapperTo,
  customStyles,
} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getFilter, resetFilter } from 'redux/filterSlice';
import { useRef, useState } from 'react';

export const Filter = () => {
  const dispatch = useDispatch();
  const makeRef = useRef(null);
  const priceRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);
  const [showBtnReset, setShowBtnReset] = useState(false);

  const makesOptions = makes.map(item => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
  }));

  const priceOptions = Array.from({ length: 50 }, (_, index) => ({
    value: String((index + 2) * 10),
    label: String((index + 2) * 10),
  }));

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const make = form.elements.make.value;
    const price = form.elements.price.value;
    const from = form.elements.from.value;
    const to = form.elements.to.value;
    dispatch(getFilter({ make, price, from, to }));
    setShowBtnReset(true);
  };

  const handleReset = () => {
    makeRef.current.clearValue();
    priceRef.current.clearValue();
    fromRef.current.value = '';
    toRef.current.value = '';
    dispatch(resetFilter());
    setShowBtnReset(false);
  };

  return (
    <FormFilter onSubmit={handleSubmit}>
      <div>
        <LabelMakes>
          Car brand
          <WrapperMakes>
            <Select
              name={'make'}
              options={makesOptions}
              styles={customStyles}
              isSearchable={false}
              ref={makeRef}
              placeholder="Enter the text"
            />
          </WrapperMakes>
        </LabelMakes>
      </div>
      <div>
        <LabelMakes>
          Price/ 1 hour
          <WrapperPrice>
            <Select
              name={'price'}
              options={priceOptions}
              styles={customStyles}
              isSearchable={false}
              ref={priceRef}
              placeholder="To $"
            />
          </WrapperPrice>
        </LabelMakes>
      </div>
      <div>
        <LabelMakes>
          Сar mileage / km
          <WrapperFlex>
            <WrapperFrom>
              From <InputMile type="number" name="from" ref={fromRef} />
            </WrapperFrom>
            <WrapperTo>
              To <InputMile type="number" name="to" ref={toRef} />
            </WrapperTo>
          </WrapperFlex>
        </LabelMakes>
      </div>
      <SearchButton>Search</SearchButton>
      {showBtnReset && (
        <SearchButton type="button" onClick={handleReset}>
          Reset
        </SearchButton>
      )}
    </FormFilter>
  );
};
