const FilterName = ({ handleInputFilter, searchName }) => {
  const handleInput = (ev) => {
    handleInputFilter(ev.target.value);
  };
  return (
    <>
      <label htmlFor="searchCharacter" className="input_text">
        Search by Character:
      </label>
      <input
        className="input_search"
        type="text"
        autoComplete="off"
        name="name"
        id="name"
        placeholder="Example: Daenerys"
        onInput={handleInput}
        value={searchName}
      />
    </>
  );
};

export default FilterName;
