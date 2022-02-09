const checkList = ["Milk", "Bread", "Butter", "Yogurt"];

export function App() {
    return (
      /* Instead of null write html list of checkboxes:
        • [ ] Milk
        • [ ] Bread
        • [ ] Butter
        • [ ] Yogurt
      */
      <ul>
        {checkList.map(item => (
          <li key={item}>
            <input type="checkbox" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  

  // Link for codesandbox: https://codesandbox.io/s/ts-bootcamp-01-01-forked-z82fd?file=/src/App.js