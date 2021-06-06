
// Person Data
export const PersonData = {
    introduction: 'Hi, my name is',
    name: 'Kevin Ng',
    description: 'Welcome to my online portfolio',
}

// About Data
export const AboutData = {
    img: '', // url to image location
    description: 'This is a temporary placeholder for description about me'
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
    }
]

export const ProjectsData = [
    {
        id: 1,
        img: '',
        title: 'Sorting Algorithm Visualizer',
        info: [
            'Built Python/Pygame application for visualizing sorting algorithms',
            'Implemented Quick Sort'
        ],
        repo: 'https://github.com/KevinNgWK/Sorting_visualiser',
    },
    {
        id: 2,
        img: '',
        title: 'Closest Path Visualizer',
        info: [
            'Built Python/Pygame applicationf for visualizing pathfinding algorithms',
            "Implemented Dijkstra\'s algorithm"
        ],
        repo: 'https://github.com/KevinNgWK/Shortest_Path_Visualizer',
    },
]

export const contactData = {
    email: 'WNG052@e.ntu.edu.sg',
    github: 'https://github.com/KevinNgWK',
    linkedIn: 'https://www.linkedin.com/in/ng-wai-kit-kevin/',
}

export const EducationData = [
    {
        id: 1,
        level: "University",
        school: "Nanyang Technological University",
        name: "Bachelor of Engineering",
        grades: "4.95/5",
        awards: ["Dean's List, Academic Year 18/19", "Dean's List, Academic Year 19/20"],

    }
]
