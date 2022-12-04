import React from "react";
import ActorHeader from "../components/headerActorList";
import { MemoryRouter } from "react-router";

export default {
  title: "Home Page/ActorPageHeader",
  component: ActorHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <ActorHeader title="Discover Actors" />;

Basic.storyName = "Default";
