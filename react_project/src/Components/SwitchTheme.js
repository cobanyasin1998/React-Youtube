import { useSite } from "../context/index";

export default function SwitchTheme() {
  const { theme, language, dispatch } = useSite();

  const switchTheme = () => {
    dispatch({
      type: "SWITCH_THEME",
      value: theme === "light" ? "dark" : "light",
    });
  };
  const switchLang = () => {

    dispatch({
      type: "SWITCH_LANG",
      value: language === "tr" ? "en" : "tr",
    });
  };
  return (
    <>
      <button onClick={() => switchTheme()}>Temayı Değiştir</button> {theme}{" "}
      <br></br>
      <button onClick={() => switchLang()}>Dili Değiştir</button>
      {language} <br></br>
    </>
  );
}
