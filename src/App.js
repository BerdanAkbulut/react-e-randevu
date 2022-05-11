import Header from './components/Header';
import { useNavigate } from 'react-router-dom';

function App() {
  
  let navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-slate-300">
      <Header />
      <div className="centered-container flex flex-row gap-28">
        <button
          onClick={() => {
            navigate('/randevu-al');
          }}
          className="tracking-wide"
        >
          Randevu Al
        </button>
        <button
          className="tracking-wide"
          onClick={() => {
            navigate('/randevu-liste');
          }}
        >
          Randevuları Listele
        </button>
      </div>
    </div>
  );
}

export default App;
