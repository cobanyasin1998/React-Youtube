import { useEffect, useState } from "react";

function App() {
  const categoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "Node.JS" },
    { key: 3, value: "CSS" },
    { key: 4, value: "Html" },
  ];
  const [name, setName] = useState("Yasin");
  const [description, setDescription] = useState("Çoban");
  const [gender, setGender] = useState(1);
  const [categories, setCategories] = useState([2, 4]);
  const [rule, setRule] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (avatar) {
      
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        
        setImage(this.result);
      });
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);

  const [rules, setRules] = useState([
    { key: 1, value: "1.kuralı kabul ediyorum", checked: false },
    { key: 2, value: "2.kuralı kabul ediyorum", checked: false },
    { key: 3, value: "3.kuralı kabul ediyorum", checked: true },
  ]);
  const genders = [
    {
      key: "1",
      value: "Erkek",
    },
    {
      key: "2",
      value: "Kadın",
    },
  ];

  const selectedGender = genders.find((g) => g.key === gender);

  const checkRule = (key, checked) => {
    debugger;
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) {
          rule.checked = checked;
        }

        return rule;
      })
    );
  };

  return (
    <>
      <button
        onClick={() => {
          setName("Meltem");
        }}
      >
        Adı Değiştir
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name}
      <br></br>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {description}
      <br></br>

      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Seçiniz</option>

        {genders.map((gender) => (
          <option value={gender.key} key={gender.key}>
            {gender.value}
          </option>
        ))}
      </select>

      <select
        value={categories}
        multiple={true}
        onChange={(e) =>
          setCategories(
            [...e.target.selectedOptions].map((option) => option.value)
          )
        }
      >
        <option value="">Seçiniz</option>

        {categoryList.map((cat) => (
          <option value={cat.key} key={cat.key}>
            {cat.value}
          </option>
        ))}
      </select>

      {JSON.stringify(selectedGender, null, 2)}
      {JSON.stringify(categories, null, 2)}

      <br></br>

      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        Kuralları Kabul Ediyorum
      </label>

      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => {
              checkRule(rule.key, e.target.value);
            }}
          />
          {rule.value}
        </label>
      ))}
      <br></br>

      <button disabled={!rule}>Devam Et</button>
      <br></br>
      <label>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </label>

      {avatar && (
        <>
          <h3>{avatar.name}</h3>
          {image && <img src={image} alt="Resim" />}
        </>
      )}
    </>
  );
}

export default App;
