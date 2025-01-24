

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
  startDate: string;
  endDate?: string;
  duration: string;
  description: string;
  skills?: string[];
}