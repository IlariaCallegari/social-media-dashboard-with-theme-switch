import Dashboard from "./components/Dashboard";
import useStyles from "./styles/AppStyles";

function App() {
  const classes = useStyles();
  const {App} = classes;

  return (
    <div className={App}>
      <Dashboard />
    </div>
  );
}

export default App;
