import { Button } from "@/components/ui/button";
import { APP_NAME, APP_NAME_DESCRIPTION, SERVICE_URL } from "@/lib/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Ecommrce Next",
    default: `${APP_NAME}`,
  },
  description: `${APP_NAME_DESCRIPTION}`,
  metadataBase: new URL(SERVICE_URL),
};

const HomePage = () => {
  return (
    <div>
      page
      <br />
      <Button>Click me</Button>
    </div>
  );
};

export default HomePage;
