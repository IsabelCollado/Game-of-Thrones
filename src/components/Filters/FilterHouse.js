const FilterHouse = ({ handleSelectHouse, selectHouse }) => {
  const handleSelec = (ev) => {
    handleSelectHouse(ev.target.value);
  };
  return (
    <>
      <label htmlFor="selectHouse" className="select">
        Select the house:
      </label>
      <select
        className="select"
        name="select house"
        id="selectHouse"
        onChange={handleSelec}
        value={selectHouse}
      >
        <option value="House_Targaryen">Targaryen</option>
        <option value="House_Tarly">Tarly</option>
        <option value="Stark">Stark</option>
        <option value="Baratheon ">Baratheon</option>
        <option value="Lannister">Lannister</option>
        <option value="Greyjoy">Greyjoy</option>
        <option value="Clegane">Clegane</option>
        <option value="Baelish">Baelish</option>
        <option value="Seaworth">Seaworth</option>
        <option value="Tyrell">Tyrell</option>
        <option value="Bolton">Bolton</option>
        <option value="Mormont">Mormont</option>
        <option value="Tully">Tully</option>
        <option value="Arryn">Arryn</option>
      </select>
    </>
  );
};

export default FilterHouse;
