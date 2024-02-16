import Navbar from "@/components/Navbar";
import WrapperPages from "@/components/WrapperPages";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <WrapperPages>
        <Button>About User</Button>
      </WrapperPages>
    </>
  );
};

export default AboutPage;
