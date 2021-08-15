import serviceim from './images/serviceim.jpg';
import colorPicker from './images/color1.jpg';
import ipAddress from './images/ipAddress.jpg';
import todo from './images/todo.jpg';
//serviceim
import serviceim1 from './images/serviceim1.jpg';
import serviceim2 from './images/serviceim2.jpg';
import serviceim3 from './images/serviceim3.jpg';
//color-picker
import color1 from './images/colorPicker.jpg';
import color2 from './images/color2.jpg';
import color3 from './images/color3.jpg';
//weather-tracking
import weather1 from './images/weather1.jpg';
import weather2 from './images/weather2.jpg';
//ip-address-tracker
import ipAddress1 from './images/ipAddress.jpg';
import ipAddress2 from './images/ipAddress2.jpg';
//todo
import todo1 from './images/todo1.jpg';
import todo2 from './images/todo2.jpg';

export default [
    {
        projectName :"serviceim",
        name: "Serviceim",
        techRequirements: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider",
        techList: "HTML / CSS / JS/ React Hooks / API/ Firebase",
        projectType: "Interaction Design / Front End Development",
        background: "Serviceim is a platform that allows you to advertise and offer your professional services in any field you choose. Most of the services offered on Serviceim are digital services. You can also purchase any service you want and track the seller's progress until the service is completed, and depending on your satisfaction leave a review of the service.",
        mainImage: serviceim,
        previewImages: [serviceim1, serviceim2, serviceim3],
        url: "https://serviceim.netlify.app/",
        reverseView: false
    },
    {
        projectName: "color-picker",
        name: "Color Picker",
        techRequirements: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider",
        techList: "HTML / CSS / JS / React",
        projectType: "Interaction Design / Front End Development",
        background: "This project allows you to create a color palette of your choice and for any use. Each color you choose has the option to show a variety of shades and copy the hex, rgb and rgba code for each color and shade. You can also use any of the ready-made plates.",
        mainImage: colorPicker,
        previewImages: [color1, color2, color3],
        url: "https://create-color-palette.netlify.app/",
        reverseView: true
    },
    {
        projectName: "weather-tracking",
        name: "Weather Tracking",
        techRequirements: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider",
        techList: "HTML / CSS / JS / React/ API",
        projectType: "Interaction Design / Front End Development",
        background: "This project was a front-end challenge from devChallenges. This project was build with React framework and it allows users to track the weather anywhere in the world, by sending API request through Metaweather according to user search. In Addition, a user can track the weather at his current location.",
        mainImage: weather1,
        previewImages: [weather1, weather2],
        url: "https://weather-tracking-app.netlify.app/",
        reverseView: false
    },
    {
        projectName: "ip-address-tracker",
        name: "IP Address Tracker",
        techRequirements: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider",
        techList: "HTML / CSS / JS / React/ API/ Mapbox",
        projectType: "Interaction Design / Front End Development",
        background: "This project was a front-end challenge from Frontend Mentor. The project allows you to track any IP address by sending API request through Ipify and display the IP location on the map using Mapbox.",
        mainImage: ipAddress,
        previewImages: [ipAddress1, ipAddress2],
        url: "https://ip-address-app.netlify.app/",
        reverseView: true
    },
    {
        projectName: "to-do",
        name: "To Do",
        techRequirements: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider",
        techList: "HTML / CSS / JS / React",
        projectType: "Interaction Design / Front End Development",
        background: "This project was a front-end challenge from Frontend Mentor. The project allows you to create a todo list and enter all your tasks so that you do not forget anything. At the end there is an option to mark each todo as completed. In addition, It is also possible to switch between a dark theme and a light theme, depending on your preference.",
        mainImage: todo,
        previewImages: [todo1, todo2],
        url: "https://todo-tasks-list-app.netlify.app/",
        reverseView: false
    }
]