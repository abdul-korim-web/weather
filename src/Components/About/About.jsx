import React, { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    document.title= `Weather | About`
  },[])
  return (
    <div>
      <section className="flex flex-col min-h-screen justify-center items-center">
        <h2 className="text-2xl  ">This is a About page</h2>
        <p>This page Comeing soon...</p>
      </section>
    </div>
  );
};

export default About;
