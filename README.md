# Block Club Calendar :calendar: :blush: (Front End Code Base)

## Table of Contents

- **[React Developer 1](#junior-react-developer)**<br>
- **[React Developer 2](#senior-react-developer)**<br>
- **[Product Vision Document](#block-club-calendar)**<br>
- **[Proposal](#proposal)**<br>
- **[UX Design](#ux-design)**<br>
- **[Frameworks and Libraries Used](#frameworks-and-libraries)**<br>
- **[Target Audience](#target-audience)**<br>
- **[Research](#research)**<br>
- **[Prototype Key Features](#prototype-key-features)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overview
This frontend code base allows users to navigate block-club-calendar's website by editing and viewing the community calendar, creating  neighborhood events including time, place, location, text description, external link, and event images. Community members or organizations can also edit and delete their own events while admin account users can edit and delete all events. 

## Junior React Developer
Applied JavaScript | React| Single Page Application | TeamWork Capabilities |
| --------------------- | ---------------------- | --------------------- | -------------------- |
Incorporated third party animation via zoom in material UI library. Array methods were used to dynamically render HTML elements | Created dynamic functional components and showcased proper usage of state and props with small reusable components. Usage of webHooks to manage state. | Used Axios to perform GET HTTP requests to database for list of events.  | Pair Programmed with React 2 Dev and Back End Architect to deliver top product |

## Senior React Developer
React Application | HTTP/AJAX | Sate Management | TeamWork Capabilities |
| --------------------- | ---------------------- | --------------------- | -------------------- |
App was set up in a manner that is conducive to a team project environment. Project is organized well on GitHub. | CRUD operations drove the application. Token authentication handeled correctly. HTTP requests handled logically in was cohesive with app's state management system. | Managed state in a very coherent system at all levels of the app - global state management, component tree state management, and individual component management. The system is easy to understand and use. Architected it in such a way that it is reusable for a lot of the state management needs of the app.  | Extra considerations were made to help all team members understand how to contribute easily to the project, no matter their role. |

---

# Product Vision Document :tada:

## Block Club Calendar
Have you have ever come home from work to find your neighborhood filled with cars and visitors for a local market, fair, park event, or giveaway that you didn't even know about and missed? Or made weekend plans to travel only to find out that there was a free family event in your town you missed?  The **Block Club Calendar** is the key to making sure you never miss another local gathering. It allows any community member or organization to post notifications on neighborhood events!

#### Minimal Viable Product (MVP)
- As a guest visitor to the website, I can view and access my community calendar. 
- As a community member or organization I can create a new neighborhood event including, time, place, location, a text description, external link, and an event image. 
- Community members or organizations can also confirm attendance to events.

#### Stretch Goals (Keep in mind this project has to be accomplished in one week)
- As a block club administrator, I can create a block club calendar where I approve, add, delete, and edit neighborhood events (i.e. multiple calendar instances). 
- Google calendar or iCal integration. 
- Increased UI infastructure and smoothing out.

#### Proposal
- What problem does your app solve?
  * Organizing events can be a huge headache. Block CLub Calendar allows any community member or organization to post notifications on neighborhood events! 

- Be as specific as possible; how does your app solve the problem?
  * Keeping people informed on when and where events are happening. It does this by creating a platform where the event organizers can send everyone involved the information they need and then allow those people confirm their attendance.  

- What is the mission statement? 
  * Helping communities stay connected in an age where meeting people in person is becoming less common.


#### Features
- What features are required for your minimum viable product?
  * Ability to create and share an event
  * A way for people to view and confirm their attendance
  * A calendar to view all events

- What features may you wish to put in a future release?
*Adding an admin profile that can edit any event. Admin can review and approve member event submissions. 

#### What do the top 3 similar apps do for their users?
1. Eventbrite:
  * Mainly focuses on selling tickets to events for profit.
2. Facebook events:
  * More focused on community events. However, it is not the main focus so it can get lost in all the other features of facebook.
3. Nextdoor:
  * More general community app. (hiring babysitters, planning community tips, sharing tips).


#### UX Design
- What design system will you use?
  * Material UI Design / Figma Tool to build out wire frames for design and user flow.
  
###### What is the URL to your wireframes?
https://www.figma.com/file/6nW0gjTv2LscOSROk87Yjr/Block-Club-Cal---Material-UI?node-id=0%3A1

- Color pallette: 
  * Tool to pick with : https://material.io/resources/color/#!/?view.left=1&view.right=0&primary.color=4CAF50&secondary.color=9C27B0
  * Color palette choice: TBD
  * Type system:
  * Tool to reference: https://www.figma.com/google-fonts/
  * Typography choice: TBD, material UI is roboto by default
  * Icon system: https://material.io/resources/icons/?style=baseline


#### What will your user flow be?
- START → Enter marketing page / landing home page
- Landing Page is composed of a Calendar View. Calendar could be a list of cards each composed with necessary event information.          - Somewhere else on the page could be a login button for users to login so they are able to submit North End Detroit events. Admin can review and submit events to the calendar. (Yellow indicates STRETCH goals after MVP is met).

#### Frameworks and Libraries
- What 3rd party frameworks/libraries are you considering using?

**Frontend:**
- Axios
- Yup
- React
- React-router
- Formic

**Backend:**
- Bcryptjs
- Express
- Helmet
- Jsonwebtoken
- Knex
- Sqlite3

- Do APIs require you to contact its maintainer to gain access?
  * No

- Are you required to pay to use the API?
  * No

- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
  * N/A
  
#### Target Audience

- Who is your target audience? Be specific.
  * Communities in the North End of Detroit, MI.

- What feedback have you gotten from potential users?
  * Needs to be simple to use.
  * Less noise and advertisements. Just for them. 

- Have you validated the problem and your solution with your target audience? How?
  * Yes, our potential users don’t like facebook or eventbrite or other similar services because they are too broad. Our potential users would like a platform that is specific to their community.

#### Research
_Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday._

**Research material:**
- https://onegatewaycommunity.org
- https://www.miufi.org/
- http://www.oaklandurbanfarm.org/
- http://www.vanguarddetroit.org/
- their facebook pages are sometimes a little better:
- https://www.facebook.com/OAFMDetroit/
- https://www.facebook.com/MichiganUrbanFarmingInitiative/

**Competing products: Facebook, Nextdoor, Eventbrite**

#### Prototype Key Features
This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

- User SIGNUP (username, password, email)
- User LOGIN (username, password)
- User Create / Edit Profile:
- Username
- Name
- Email
- Password
- Affiliated organizations (array)
- Avatar
- User can CREATE, EDIT, DELETE EVENT
- ADMIN can review, edit, delete events
- Event dataset:
- Time
- Place
- Organizer (links to profile)
- Event descriptions
- External Link
- Image 
- (pdf?) more media?
- In database: ID OF USER WHO CREATED IT (foreign key)
- Idea for admin integration: users can only edit events that match their ID, admins can edit events that match any id
- Going button integration:
- New database table with foreign keys
- Community Calendar in database:
- Array of events?
- Render the community calendarWhat does calendar look like?
- Like a calendar?
- Like a list of events?
- Look at google calendar mobile app and desktop app for inspiration
- Decide monday
- List View - MVP SWEET
- Month / Week View?
- External integration
- Export to iCal
- Export to google Cal

## Credits
### Project Manager
Marina Baskova: https://github.com/MarinaBaskova

### User Interface
David Hennig: https://github.com/davidhennig

### Frontend
Jackson Ogles (junior react dev): https://github.com/cjogles <br>
Louis Gelinas (senior react dev): https://github.com/gelinas

### Backend
Quinton McNamee: https://github.com/QuintonMcNamee
