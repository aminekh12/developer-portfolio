import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Newsletter Automation',
        description: "In this project, we undertook the task of transforming an existing WordPress application into a more robust solution using PHP Laravel and Vue.js technologies. Our primary goal was to automate the newsletter process for multiple websites, ensuring that clients receive curated content every weekend. We achieved this by building a system that automatically fetches the latest articles from each website and compiles them into newsletters, removing the need for manual intervention. This transition not only increased scalability but also significantly improved user satisfaction by streamlining the entire process ",
        tools: ['PHP', 'Laravel', 'JavaScript', 'TypeScript', 'Vue.js', 'Docker', 'Gitlab'],
        role: 'Full stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    
    {
        id: 3,
        name: 'Exam Schedule Generator',
        description: 'We made a platform that simplifies the daunting task of exam scheduling. Using Python genetic algorithms, backed by PHP Laravel and fronted with React.js, we have created a seamless solution. Our system considers class availability, seat capacity, professor schedules, and all necessary constraints. ',
        tools: ['React', 'PHP', 'Laravel', 'Python', 'MySQL','Genetic Algorithm'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Video Analysis with Facial Recognition',
        description: "I made a program that analysis video through facial recognition. Built using Python and dlib library, it automatically organizes videos by creating folders for recognized faces. Using existing models, it ensures precise detection, saving only videos with straight-facing subjects.",
        tools: ['Python', 'dlib library', 'Git'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Python Script Developer',
    },
    {
        id: 5,
        name: 'Automated Game Actions using Image Recognition',
        description: "I made this project and aimed at simplifying repetitive actions in gaming while keeping an eye out for unexpected changes. Using image recognition technology, this system I built in Python detects and responds to various scenarios in real-time. Whether it's automating tasks or reacting to anomalies.",
        tools: ['Python', 'Pyautogui', 'adb', 'Git'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Python Script Developer',
    },
    {
        id: 2,
        name: 'E-learning platforme',
        description: 'We developed an e-learning platform for a private school. Within this platform, professors have the capability to upload and share their courses, which are then accessible to their students. This solution enhances the educational experience within the school environment.',
        tools: ['PHP', 'Laravel', 'JavaScript', 'Git'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',   
        image: travel,
    }
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },