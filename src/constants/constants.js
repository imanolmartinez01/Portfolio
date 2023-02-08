export const projects = [
  {
    title: 'JustInTimesheet',
    description: "For GEMINI EXPERT S.L. using Flutter, ASP NET, SQL Server & Firebase we built an application to manage the timesheet and expenses of an employee inside a company. Generate a report of all employees at the end of the month.",
    image: '/images/justintimeFlutter.png',
    tags: ['Flutter', 'ASP NET', 'SQL', '.NET C#', 'Entity Framwork'],
    accomplishments: ["• Development of all front-end components and pages like: Login, timesheet month, expenses, profile, etc... in Flutter (mobile version).", "• Notification throught Firebase Notifications.", "• Communication of Mobile app to SQL Server database throught .Net services.", "• Development of front-end ASPNET web page to manage Tickets.", "• Create tables in SQL Server and API Services in .Net C#."],
    source: null,
    visit: null,
    id: 0,
  },
  {
    title: 'Client Flows',
    description:"Client Flows is a web application to collect data of clients thought custom forms. When each step is completed by the client, the company gets an email notifying client completed the step. Company has the option to accept or reject the response. If the company accepts the response, automatically send the next step to the client if there's next step.",
    accomplishments: ["• Development of front-end components and pages like: Login (with email verification and social media data), forms, clients info, user profile, payment in Stripe among others using ReactJS and TypeScript.", "• Creation of database in Firebase using Firestore (NoSQL).", "• Implementing SendGrid to emailing and notify."],
    image: '/images/ClientFlowsScreenShots.png',
    tags: ['React', 'JavaScript', 'Firebase', 'Stripe'],
    source: null,
    visit: null,
    id: 1,
  },
  {
    title: 'Open IA',
    description: "Self project in React.js to show a little bit about Open IA and how it works. No database implemented.",
    accomplishments: [],
    image: '/images/openIAScreen.png',
    tags: ['React'],
    source: 'https://github.com/imanolmartinez01/OpenIA-React',
    visit: 'https://openia-e5233.web.app/',
    id: 2,
  },
  {
    title: 'Trucks Managment',
    description: "Web application to manage arrived/leaving trucks to a station and check the weight of them to have a control.",
    accomplishments: ["• Create tables in SQL and import to .NetCore 5 throught Entity Framework.", "• Develop profile user page and communicating with API services.", "• Features to add truck to database when arrived to station."],
    image: '/images/netcoreSQL.png',
    tags: ['.NetCore 5', 'SQL Server', 'Entity Framework'],
    source: null,
    visit: null,
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2018, text: 'Moved to Barcelona, Spain and worked for Gemini Expert S.L.', },
  { year: 2019, text: 'Launch JustinTimeSheet - Gemini Project', },
  { year: 2020, text: 'Found KeepSilent Collective and had my first music track released in a French Label', },
  { year: 2021, text: 'Start playing rugby for Santboi Team as a Profesional Player and started developing Client Flows', },
  { year: 2022, text: 'Champions of Spain with Santboi Team and released my first Live Show on Youtube', },
  { year: 2023, text: 'Testing Client Flows'}
];