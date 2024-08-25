# FairHealth Center Website


## Project Overview

The FairHealth Center website is designed to provide information about the services offered by the healthcare center. It allows patients to register and manage their details, showcases partnerships, and provides contact information for further inquiries.

### Features

Responsive Navbar: 

A navigation bar that scrolls to the different sections of the website.The navbar includes links to the Home, Services, Patient Management, Partners, and Contact Us sections.

Service Information: 

A section dedicated to explaining why patients should choose FairHealth Center, highlighting facilities, quality of service, and affordability. Each category can be expanded to reveal more information using Bootstrap’s collapse feature.

Patient Management: 

Allows new patients to enter their personal information including name, age, gender, and medical condition.

Search and Edit: Features functionality to search for a patient by name, display their details, and provide options to edit or delete the information.


Partner Showcase:

Displays logos of the healthcare center’s partners, such as NHIF, UNHCR, Madison Insurance, etc., providing visual credibility to the center's collaborations.

Contact Information: 

Various ways to contact the healthcare center, including social media links and phone numbers.

About Us Section: Details the mission of FairHealth Center, emphasizing its commitment to accessible and affordable healthcare.


### Technologies Used

HTML5: For structuring the content of the website.

CSS: For styling the website.

Bootstrap 5.3.3: For responsive design and built-in components.

JavaScript: For interactive features like patient management.

Font awesome Icons


### HOW TO RUN 

1. fork and clone the repository

2. Ensure to run the json-server by typing on the console json-server --watch db.json





### BOOTSTRAP FEATURES 

#### Navbar
The navigation bar (<nav>) at the top of the page uses Bootstrap’s navbar classes, making it responsive and easy to style.

Navbar Components:

.navbar-expand-lg: Ensures the navbar expands on larger screens but collapses into a hamburger menu on smaller devices.

.navbar-light and .bg-light: Apply light background and text colors to the navbar, improving visibility and aesthetics.

.navbar-toggler: Provides the hamburger menu icon that appears when the navbar collapses on smaller screens.

#### Collapse Component :

The collapse component is a Bootstrap feature used to toggle the visibility of content.

Collapsible Sections: 

The collapse class is used to hide and show content sections in the "Why Choose Us" section. When a button is clicked, it expands or collapses the associated content (like Facilities, Quality Service, and Affordable Healthcare).


#### Modals and Alerts

Bootstrap’s modal component allows you to create popup dialogs that can be used for various purposes such as user notifications ( successful or unsuccessful Submissions, Editing,deleting)


### JAVASCRIPT FEATURES

Searching for a Patient (searchPatient function):

When you search for a patient, the searchPatient function fetches all patients and filters them based on the search input.

If a match is found, the displaySearch function is called with the filtered patient list.
Displaying the Searched Patient (displaySearch function):

The displaySearch function takes the first matched patient (SearchedPatient[0]) and populates the form fields with the patient's details.
Crucially, it sets the value of the hidden idinput field with the patient's ID:

This hidden idinput field now holds the unique identifier (ID) of the patient, which is crucial for identifying which patient's details are being displayed and potentially edited.
Editing the Patient (editbutton event listener):

When you click the "Edit" button, the editbutton event listener is triggered.
This event listener fetches the value of the idinput field

Fetching the Patient Data Again (Optional Redundancy):

The event listener then uses this id to make a fetch request to retrieve the patient's data from the server:

Populating the Form for Editing:

After fetching the patient data, the event listener populates the form fields (name, age, gender, condition) with the patient's data:


Parameters are added to a function when that function requires input from outside its scope, usually provided by another function or user interaction.
If a function can obtain all the necessary data internally (like from the DOM or via internal logic), then no parameters are needed.