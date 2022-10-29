
import {useState} from 'react';

function Tab({ children, activeTab }) {

    const [active,setActive] = useState(activeTab);

  return (
    <>
      <nav>
        {children.map((tab, index) => (
          <button
          onClick={()=>setActive(index)}
            className={active === index ? "bg-green-100" : "bg-gray-100"}
            key={index}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      {children[active]}
    </>
  );
}

Tab.Panel = function ({ children, title }) {
  return <div>{children}</div>;
};

export default Tab;
