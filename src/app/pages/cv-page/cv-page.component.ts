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
      title: 'Software Developer',
      company: 'Intershu',
      start: new Date(2023, 3, 12),
      // end: ,
      description: 'I contributed to the development of various internal applications aimed at enhancing business processes and providing users with streamlined access to Microsoft GP and Warehouse Pro. Leveraging a mix of technologies, including ASP.NET, Angular, PHP, and NestJs, I actively participated in designing, building, and maintaining these applications. These internal tools played a critical role in maintaining operational efficiency throughout the organization and our subsidaries.',
      reasonForLeaving: 'Seeking a more aligned and effective work environment'
    },
    {
      title: 'Senior Full Stack Developer',
      company: 'Turnbuckle Digital Design & Development',
      start: new Date(2018, 9, 1),
      end: new Date(2023, 3, 11),
      description: 'I designed and built a comprehensive full stack application specializing in financial risk and management reporting. Leveraging a combination of MSSQL, Node.js with Express.js, and Angular for the frontend, the application seamlessly caters to both RESTful and GraphQL requests. Notably, it incorporates advanced features such as whitelabeling and multi-tenancy to meet the diverse needs of our clients. Noteworthy organizations, including KPMG, BDigital, and Rentworks, rely on this application for their critical financial operations.',
      reasonForLeaving: "I'm looking for a new challenge."
    },
    {
      title: 'Developer / Junior Developer',
      company: 'While contracted to Van Zyl & Pritchard I worked for Stuart King & Associates, and Ice Mobile Telecommunications',
      start: new Date(2016, 9, 1),
      end: new Date(2018, 9, 1),
      description: 
`During my tenure at Stuart King & Associates, I spearheaded the development of a full stack travel website akin to renowned platforms like bookings.com or trivago.com. This project entailed leveraging a Java backend and a web application constructed with JQuery. Seamlessly integrating with third-party providers such as Flightline, Amadeus, and Sabre, our goal was to optimize long-distance travel for customers by facilitating seamless transitions between different service providers.

Additionally, at Ice Mobile, I played a pivotal role in creating an Android-based online storefront application, similar to the popular Steam games mobile platform. Utilizing the Android SDK and an in-house API, I successfully developed an intuitive and user-friendly mobile app that provided customers with access to a wide range of products.`,
      reasonForLeaving: 'Our contract was completed and fulfilled.'
    },
    {
      title: 'Information Technology Lecturer',
      company: 'Kip McGrath Education Center',
      start: new Date(2015, 4, 1),
      end: new Date(2016, 10, 1),
      description: 'During my time at university, I had the privilege of serving as a part-time lecturer in Information Technology, imparting knowledge to scholars who were pursuing their matriculation. This role involved delivering lectures, conducting interactive sessions, and providing guidance and support to students as they navigated the intricacies of the subject matter. By effectively communicating complex concepts in a simplified manner, I fostered an engaging learning environment that helped students develop a solid foundation in Information Technology.',
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
      competence: 4,
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
      description: 'While I have not yet completed my university degree, I am eager to pursue its completion should an employer provide me with the opportunity to do so.',
    },
    {
      title: 'Matric Exemption',
      school: 'Heronbridge College',
      year: '2012',
    },
  ];
}
