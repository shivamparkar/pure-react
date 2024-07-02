const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation), // Corrected the typo here
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React IS Rendered"),
    React.createElement(Person, {
      name: "Shivam",
      occupation: "Software Developer",
    }),
    React.createElement(Person, {
      name: "Pratiksha",
      occupation: "Software Developer",
    }),
  ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 
root.render(React.createElement(App)); 
