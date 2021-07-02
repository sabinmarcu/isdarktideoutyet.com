import img from './assets/e93.jpg';

console.log(img)

function App() {
  return (
    <>
      <div className="background">
        <img src={img} alt="status-bg" />
      </div>
      <div className="foreground">
        <img src={img} alt="status" />
      </div>
    </>
  );
}

export default App;
