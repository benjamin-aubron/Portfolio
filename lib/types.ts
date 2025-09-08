import React from "react";


export type Project = {
  id:string;
  name: string;
  src:string;
  description: string;
  date: string;
  techs: string[];
  url: string;
  github?: string;
}

export type Experience = {
  id:string;
  entity: string;
  position: string;
  place:string;
  activity: string;
  startDate: string;
  endDate?: string;
  duration: string;
  description: string;
  skills: string;
}

export type Stack = {
  name: string;
  id: string;
  icon: React.ReactNode;
}