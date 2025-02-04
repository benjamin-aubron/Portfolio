import React from "react";


export type Project = {
  name: string;
  src:string;
  description: string;
  date: string;
  techs: string[];
  url: string;
  github?: string;
}

export type Experience = {
  entity: string;
  position: string;
  place:string;
  activity: string;
  startDate: string;
  endDate?: string;
  duration: string;
  description: string | React.ReactNode;
  skills?: string[];
}

export type Stack = {
  name: string;
  description: string;
  icon: React.ReactNode;
}