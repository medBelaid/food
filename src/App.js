import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Provider store={store}><Food /></Provider>
        <Category />
    </div>
  );
}

export default App;
