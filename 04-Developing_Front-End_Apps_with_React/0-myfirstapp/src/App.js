function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, Starboy!</h1>
      <h2>Time: {currDate.toLocaleTimeString()}</h2>
      <h2>Date: {currDate.toLocaleDateString()}</h2>
    </div>
  );
}

export default App;