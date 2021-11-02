import './App.css';
import Header from './Header';
import ProfileCards from './ProfileCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      {/* profile Card */}
      <ProfileCards />
      <SwipeButtons />

    </div>
  );
}

export default App;
