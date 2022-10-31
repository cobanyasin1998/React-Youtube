import {useSite} from "../context/index";

export default function SwitchTheme() {
  const { setTheme, theme, language, setLanguage } = useSite();

  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Temayı Değiştir
      </button>{" "}
      {theme} <br></br>
      <button onClick={() => setLanguage(language === "tr" ? "en" : "tr")}>
        Dili Değiştir
      </button>
      {language} <br></br>
    </>
  );
}
