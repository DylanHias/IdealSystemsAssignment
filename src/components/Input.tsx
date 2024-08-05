import { ChangeEvent } from 'react';

interface InputProps {
  onChangeCallback: (e: string) => void;
  setSearchValue: (value: string) => void;
  searchValue: string;
}

const Input = ({
  onChangeCallback,
  setSearchValue,
  searchValue,
}: InputProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const inputValue = e.target.value;
    setSearchValue(inputValue);

    onChangeCallback(inputValue);
  };

  return (
    <input
      name="search"
      type="text"
      placeholder="search post titles"
      onChange={handleSearch}
      value={searchValue}
    />
  );
};

export default Input;
