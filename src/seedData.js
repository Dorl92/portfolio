import serviceim from './images/serviceim.jpg';
import colorPicker from './images/color1.jpg';
import todo from './images/todo.jpg';
//serviceim
import serviceim1 from './images/serviceim1.jpg';
import serviceim2 from './images/serviceim2.jpg';
import serviceim3 from './images/serviceim3.jpg';
//color-picker
import color1 from './images/colorPicker.jpg';
import color2 from './images/color2.jpg';
import color3 from './images/color3.jpg';
//todo
import todo1 from './images/todo1.jpg';
import todo2 from './images/todo2.jpg';

export default [
    {
        projectName :"serviceim",
        name: "Serviceim",
        techRequirements: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider",
        techList: "HTML / CSS / JS/ React Hooks / Firebase",
        projectType: "Interaction Design / Front End Development",
        background: "Serviceim is a platform that allows you to advertise and offer your professional services in any field you choose. Most of the services offered on Serviceim are digital services. You can also purchase any service you want and track the seller's progress until the service is completed, and depending on your satisfaction leave a review of the service.",
        mainImage: serviceim,
        previewImages: [serviceim1, serviceim2, serviceim3],
        url: "https://serviceim-app.herokuapp.com/",
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
        url: "https://color-palette-builder.herokuapp.com/",
        reverseView: true
    },
    {
        projectName: "to-do",
        name: "To Do",
        techRequirements: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider",
        techList: "HTML / CSS / JS / React",
        projectType: "Interaction Design / Front End Development",
        background: "This project was a front-end challenge from Frontend Mentor. The project allows you to create a todo list and enter all your tasks so that you do not forget anything. At the end there is an option to mark each todo as completed. In addition, It is also possible to switch between a dark theme and a light theme, depending on your convenience.",
        mainImage: todo,
        previewImages: [todo1, todo2],
        url: "https://create-todos-app.herokuapp.com/",
        reverseView: false
    }
]