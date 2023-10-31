import { useTranslation } from "react-i18next";

const Language = () => {
  const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
    console.log(event.target.value);
    console.log(i18n.language);
    //console.log(45);
  };
  const { i18n } = useTranslation();
  return (
    <select
      className="outline-none rounded-lg"
      name="language"
      id="languge"
      value={i18n.language}
      onChange={change}
    >
      <option value="en">Eng</option>
      <option value="geo">Geo</option>
    </select>
  );
};

export default Language;
