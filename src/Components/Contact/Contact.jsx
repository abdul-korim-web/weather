import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Weather | Contact Page";
  }, []);
  return (
    <div>
      <section className="flex flex-col min-h-screen justify-center items-center">
        <h2 className="text-2xl  ">This is a Contact page</h2>
        <p>This page Comeing soon...</p>
      </section>
    </div>
  );
};

export default Contact;
