import { nanoid } from 'nanoid';

// Person Data
export const PersonData = {
    introduction: 'Hi, my name is',
    name: 'Kevin Ng',
    description: 'Welcome to my online portfolio! :)',
    link: 'Know More',
}

// About Data
export const AboutData = {
    img: '', // url to image location
    description: [
        'I am passionate about both data science and backend engineering. This has led me to take on multiple internships and personal projects to deepen my understanding of the field.',
        'I aspire to be an engineer who can make an impact on the world, and integrate new technology to peoples\' everyday lives.',
        'This portfolio exists to showcase my projects and experience for your viewing pleasure.',
    ]
}

export const ExperiencesData = [
    {
        id: 1,
        img: '',
        company: 'Affable',
        position: 'Data Science Intern',
        descriptions: [
            'Developed backend API to predict location of twitter users from their available profile information', 
            'Engineered a solution to speed up inference of zero-shot classification model through quantization, reducing inference time by a factor of 4 and model size by a factor of 2'
        ],
        startDate: 'May 2021',
        endDate: 'Present',
    },
    {
        id: 2,
        img: '',
        company: 'Shopee',
        position: 'Data Analyst Intern',
        descriptions: [
            "Developed Python, Airflow and Bash scripts to automate financial report generation process, ensuring Shopee sellers can make informed decisions promptly",
            "Employed virtual environments to manage dependencies of various scripts"
        ],
        startDate: 'Jan 2021',
        endDate: 'May 2021'
    },
    {
        id: 3,
        img: '',
        company: 'DSO National Laboratories',
        position: 'Machine Learning Intern',
        descriptions: [
            "Investigated the applications of Deep Reinforcement Learning in the field of Robotics",
            "Built custom environments on Unity and Python to visualize agents for training",
            "Implemented and fine-tuned knowledge-based vessel traffic forecasting algorithm",
        ],
        startDate: 'Aug 2020',
        endDate: 'Jan 2021'
    },
    {
        id: 4,
        img: '',
        company: 'DBS Bank',
        position: 'Software Engineer Intern',
        descriptions: [
            "Built a fully functional front-end website using React framework",
            "Led discussions with selected interviewees to provide insights to iteratively improve on product"
        ],
        startDate: 'Jan 2021',
        endDate: 'May 2021'
    },
]

export const ProjectsData = [
    {
        id: nanoid(),
        img: 'assets/gifs/sorting_visualiser.gif',
        title: 'Sorting Algorithm Visualizer',
        info: [
            'This personal project aims to help others better understand sorting algorithms through visually appealing animations.',
            'It is built using a simple Python library, Pygame. Currently, only Quick Sort has been implemented. However, other sorting algorithms can be easily added.',
        ],
        repo: 'https://github.com/KevinNgWK/Sorting_visualiser',
    },
    {
        id: nanoid(),
        img: 'assets/gifs/pathfinding_visualiser.gif',
        title: 'Closest Path Visualizer',
        info: [
            'This personal project aims to help others better understand pathfinding algorithms through visually appealing animations.',
            'It is built using a simple Python library, Pygame. Currently, only Dijkstra\'s algorithm has been implemented. However, other pathfinding algorithms can be easily added.',
        ],
        repo: 'https://github.com/KevinNgWK/Shortest_Path_Visualizer',
    },
    {
        id: nanoid(),
        img: 'assets/gifs/snake_game.gif',
        title: 'Game of Snake',
        info: [
            'This personal project was built by me as snake is a retro game, and coding it out seems like an interesting project to get familiar with coding.',
            'It is built using a simple Python library, Pygame. It allows the player to have fun in a retro game.',
            'Feel free to try it out and have fun!'
        ],
        repo: 'https://github.com/KevinNgWK/Snake-Game',
    }
]

export const contactData = {
    email: 'WNG052@e.ntu.edu.sg',
    cta: 'Would you like to work with me? Awesome!',
    btn: 'Let\'s Talk',
}

export const NetworkData = [
    {
        id: nanoid(),
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/ng-wai-kit-kevin/',
    },
    {
        id: nanoid(),
        name: 'github',
        url: 'https://github.com/KevinNgWK',
    },
]

export const SkillsData = {
    mainSkills: [
        {
            name: "Python",
            percentage: "90",
        },
        {
            name: "Java",
            percentage: "80",
        },
        {
            name: "JavaScript",
            percentage: "80",
        },
        {
            name: "SQL",
            percentage: "80",
        },
        {
            name: "ReactJS",
            percentage: "70",
        },
        {
            name: "Tensorflow / Keras",
            percentage: "70",
        },
        {
            name: "HTML / CSS",
            percentage: "50",
        },
        
    ],
    otherSkills: [
        "C", "Spark", "Unity",
    ]
}
