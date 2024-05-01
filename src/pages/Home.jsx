import React from "react";
import Hero from '../components/Hero'
import Contacts from '../components/Contacts'


const Home = () => {
  return (
    <main>
      <Hero />
      <Contacts />
      <footer className="bg-white/10 backdrop-blur-md py-4" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)' }}>
        <div className="container flex justify-content-between">{/*text-center mx-auto */}

          <div className="text-right m-auto ">
            Created by Ganesh Narwade
          </div>

          <div className="text-right m-auto ">
            &copy; 2023 All rights reserved.
          </div>

        </div>
      </footer>
    </main>
  );
};

export default Home;
