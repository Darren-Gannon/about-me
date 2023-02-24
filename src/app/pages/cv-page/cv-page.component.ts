import { Component, OnInit } from '@angular/core';
import { Course } from '../../components/education/course/course.component';
import { Skill } from '../../components/skills/skill/skill.component';
import { Job } from '../../components/work-experiance/job/job.component';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent {

  jobs: Job[] = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Turnbuckle Digital Design & Development',
      start: new Date(2018, 0, 1),
      end: new Date(),
      description: 'Developed a full stack application for financial risk and management reporting. It uses mssql, nodejs with expressjs, with and angular frontend. It supports both RESTful and GraphQL requests. Additional features include whitelableing and multi-tenancy. The application is used by several clients, noteworthy being KPMG, BDigital and Rentworks.',
      reasonForLeaving: "I'm looking for a new challenge."
    },
    {
      title: 'Developer / Junior Developer',
      company: 'While contracted to Van Zyl & Pritchard I worked for Stuart King & Associates, and Ice Mobile Telecommunications',
      start: new Date(2016, 0, 1),
      end: new Date(2018, 0, 1),
      description: 
`At Stuart King & Associates I built a full stack travel site similar to bookings.com or trivargo.com. Here I used a Java backend and a web app built with JQuery. This integrated with 3rd party providers such as Flightline, Amadeus and Sabre. The purpose was to optimise long distance travel for the customer between the different providers.
At Ice Mobile I developed an online storefront Android app, similar to the Steam games mobile platform. This was built with the android SDK and an inhouse API.`,
      reasonForLeaving: 'Our contract was completed and fulfilled.'
    },
    {
      title: 'Information Technology Lecturer',
      company: 'Kip McGrath Education Center',
      start: new Date(2015, 0, 1),
      end: new Date(2016, 0, 1),
      description: 'While at university, I lectured part-time in Information Technology to scholars studying towards matric.',
      reasonForLeaving: 'I left to focus on my studies.'
    },
  ];

  skills: Skill[] = [
    {
      title: 'Back-end Development',
      since: new Date(2016, 0, 1),
      enthusiasm: 5,
      competence: 5,
    },
    {
      title: 'Full stack Development',
      since: new Date(2017, 0, 1),
      enthusiasm: 5,
      competence: 5,
    },
    { 
      title: 'JavaScript / Typescript / NodeJs',
      since: new Date(2016, 0, 1),
      enthusiasm: 5,
      competence: 5,
    },
    { 
      title: 'Git',
      since: new Date(2016, 0, 1),
      enthusiasm: 4,
      competence: 4,
    },
    {
      title: 'SQL',
      since: new Date(2011, 0, 1),
      enthusiasm: 2,
      competence: 4,
    },
    {
      title: 'Java',
      since: new Date(2010, 0, 1),
      enthusiasm: 3,
      competence: 4,
    },
    {
      title: 'Docker',
      since: new Date(2017, 0, 1),
      enthusiasm: 5,
      competence: 3,
    },
    {
      title: 'MongoDB',
      since: new Date(2015, 0, 1),
      enthusiasm: 3,
      competence: 3,
    },
    {
      title: 'Firebase',
      since: new Date(2016, 0, 1),
      enthusiasm: 3,
      competence: 3,
    },
    {
      title: 'Project Management',
      since: new Date(2018, 0, 1),
      enthusiasm: 4,
      competence: 4,
    },
  ];

  courses: Course[] = [
    {
      title: 'Java Programming Course',
      school: 'Van Zyl & Pritchard',
      year: '2016',
      description: 'Full-time program and thereafter two-year service tie-back.',
    },
    {
      title: 'BSc Information Technology',
      school: 'University of Johannesburg',
      year: '2013-2016',
      description: '*Incomplete',
    },
    {
      title: 'Matric Exemption',
      school: 'Heronbridge College',
      year: '2012',
    },
  ];
}
