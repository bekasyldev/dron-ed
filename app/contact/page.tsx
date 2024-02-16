import Navbar from "@/components/Navbar";
import WrapperPages from "@/components/WrapperPages";
import { auth } from "@clerk/nextjs";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <WrapperPages>Contact Page</WrapperPages>
    </>
  );
};

export default ContactPage;
