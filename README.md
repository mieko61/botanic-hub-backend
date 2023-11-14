# Medicinal Plants

## Overview

This app is a resource for medicinal herbs and plants. It allows users to learn about their health benefits and how they can be used to treat specific symptoms.

### Problem

There is limited access to herbal medicine and its benefits in traditional Western medicine. Although there is a great variety of medicinal plants out there, not many people are aware or have easy access to them and their specific benefits.

### User Profile

The app is meant for anyone who is looking for natural alternatives to tradicinal medicine to treat specific symptons or conditions. It will have to be intuitive and simple and must contain curated information in order to prevent users from feeling overwhelmed with too much information.

### Features

- The user will be able to look up herbs based on a specific health concerns.
- Each plant profile will contain an image, name, and short description.
- The user will be able to save any plant profile to their "favorites" tab for easy access.

## Implementation

### Tech Stack

- Horizon UI for modal
- Grommet for pagination
- Puppeteer for API access

### APIs

https://www.mskcc.org/cancer-care/diagnosis-treatment/symptom-management/integrative-medicine/herbs/search

Other resources:

- https://www.mskcc.org/cancer-care/diagnosis-treatment/symptom-management/integrative-medicine/herbs/search
- https://www.hopkinsmedicine.org/health/wellness-and-prevention/herbal-medicine
- https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=1&contentid=1169
- https://www.medicalnewstoday.com/articles/herbal-medicine#supplements

API response example for each plant:

[
{
id: 1,
image:
"https://www.mskcc.org/sites/default/files/styles/large/public/node/3226/images/Chamomile011_3x2.jpg",
name: "chamomille",
description:
"Chamomile is an herb used in traditional medicine for its relaxing and calming effects. It’s mostly taken as herbal tea. You can also take chamomile capsules or tablets.",
uses: [
"Lower stress",
"Treat insomnia (trouble falling asleep, staying asleep, or waking up too early)",
"Lower anxiety (strong feelings of worry or fear)",
"Treat depression",
"Treat mouth sores from cancer treatment",
"Treat upset stomach and diarrhea (loose or watery bowel movements)",
],
},
];

### Sitemap

- Homepage
- Favorites
- Settings

[View sitemap](https://octopus.do/uhzfhykxae8)

### Mockups

[View Figma prototype](https://www.figma.com/file/laJkSMbICbdav1DjSCWt72/capstone-project?type=design&node-id=13%3A2&mode=design&t=BbxDlKGm9fTbSkdh-1)

### Data

| userLogin             |
| --------------------- |
| userId (pk)           |
| favoritePlantsId (fk) |
| email                 |

| favoritePlants        |
| --------------------- |
| favoritePlantsId (pk) |
| userId (fk)           |
| plantId (fk)          |

| plant                 |
| --------------------- |
| plantId (pk)          |
| favoritePlantsId (fk) |
| name                  |
| benefits              |
| description           |
| image                 |

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

- POST /register
- GET /homepage
- POST /favorites
- DELETE /favorites

### Auth

Users will register their email address before using the app, so their Favorites information will be associated to that specific account.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Week 9:

- Create responsive prototype
- Research health topics and build health categories for app accordingly
- Set up mockup data

Week 10:

- Set up front and back ends (node, axios, express)
- Style responsive front-end
- Research and try pagination
- Develop & test front-end logic with mockup data

Week 11:

- Develop back-end logic
- Test Puppeteer and endpoint requests
- Connect front and backend

Week 12:

- Work on authentication
- Test app and look for bugs

## Nice-to-haves

- Add more health concern categories and expand database
- Provide options of products like teas of the herb the user is interested in using
