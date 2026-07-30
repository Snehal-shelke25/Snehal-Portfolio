export const profile = {
  name: 'Snehal Shelke',
  initials: 'Snehal Shelke',
  role: ['DevOps Engineer', 'Cloud Computing (AWS)', 'Linux & Automation', 'CI/CD with Jenkins' , 'Python'],
  location: 'Ravet, Pune, India',
  email: 'snehal.shelke107@gmail.com',
  phone: '+91 8788084735',
  github: 'https://github.com/Snehal-shelke25',
  linkedin: 'https://www.linkedin.com/in/snehal-shelke-b94b39370/',
  tagline:
   'Computer Engineering graduate and aspiring DevOps & Cloud Engineer with a strong foundation in AWS, Docker, Git, Jenkins, and Linux. As a motivated fresher, I am eager to learn, grow, and contribute to innovative teams while building reliable, scalable, and automated cloud solutions.',
};

export const stats = [
  { num: '4', label: 'Projects Built' },
  { num: '8+', label: 'AWS Services Used' },
  { num: '1', label: 'Certification' },
];

export const timeline = [
  {
    title: 'AWS & DevOps Certification',
    org: 'Irizpro Inspire Excellence',
    date: 'February 2025 - July 2025',
    desc: 'Hands-on training in AWS cloud services, Linux administration, Docker, GitHub, Jenkins, and CI/CD pipelines.',
  },
  {
    title: 'Bachelor of Engineering — Computer Engineering',
    org: 'Adsul Technical Campus, Chas, Ahilyanagar, Maharashtra',
    date: 'June 2022 – June 2025 · CGPA 7.06',
    desc: 'Built a strong foundation in technical knowledge, critical thinking, and problem-solving through academic learning and practical project experience.'
  },
  
  {
    title: 'Diploma in Computer Technology',
    org: 'Padmashri Dr. Vitthalrao Vikhe Patil Institute of Technology and Engineering (Polytechnic),loni, Ahmednagar, Maharashtra',
    date: 'june 2017 – June 2020 · Percentage 84.53%',
    desc: 'Built a solid foundation in computer technology, programming, networking, and databases, which prepared me for advanced studies in computer engineering and cloud technologies.'
  },
];

export const skillGroups = [
  {
    title: 'Cloud (AWS)',
    icon: '☁️',
    items: [
      { name: 'EC2 & AMI', level: 85 },
      { name: 'S3 / EBS / EFS', level: 82 },
      { name: 'VPC & Load Balancer', level: 78 },
      { name: 'Auto Scaling / CloudFront / CloudTrail ', level: 75 },
      { name: 'CloudWatch / Route 53 / IAM', level: 78 },
      { name: 'Elastic IP / Security Groups / SNS', level: 78 },
    ],
  },
  {
    title: 'DevOps & Automation',
    icon: '⚙️',
    items: [
      { name: 'Jenkins (CI/CD Pipelines)', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Bash / Shell Scripting', level: 80 },
    ],
  },
  {
    title: 'Systems & Data',
    icon: '🐧',
    items: [
      { name: 'Linux Administration', level: 85 },
      { name: 'MySQL', level: 60 },
      { name: 'Python', level: 50 },
    ],
  },
];

export const skillChips = [
  'EC2', 'S3', 'AMI' , 'EBS', 'EFS', 'VPC', 'IAM', 'Auto Scaling', 'CloudWatch', 'CloudFront', 'CloudTrail' , 'Elastic IP', 'Security Groups' ,'SNS' ,'Load Balancer',
  'Docker', 'Jenkins', 'Git', 'GitHub', 'Linux', 'Bash', 'MySQL', 'Python', 'Webhooks', 'Apache',
];

export const projects = [
  
   {
  id: "aws-ha-infra",

  title: "AWS Website Hosting with High Availability and Monitoring",
 description:
 "This project is about building a secure and highly available website hosting infrastructure on AWS. I created a custom VPC with public and private subnets, launched EC2 instances, configured an Application Load Balancer, Auto Scaling, CloudWatch, SNS, and an RDS database. The infrastructure can automatically handle traffic, monitor server health, send alert notifications, and keep the website available even if one server fails. This project helped me learn how to build scalable, secure, and reliable cloud infrastructure using AWS.",
  tagline:
    "Built a secure and highly available AWS infrastructure for website hosting with monitoring and automatic scaling.",

  icon: "☁️",

  category: "☁️ Cloud Project",

  tags: [
    "AWS",
    "EC2",
    "VPC",
    "Load Balancer",
    "Auto Scaling",
    "CloudWatch",
    "SNS",
    "RDS"
  ],

  overview:
    "I built a secure and highly available website hosting project on AWS. In this project, I created a custom VPC, launched EC2 instances, configured an Application Load Balancer, Auto Scaling, CloudWatch, SNS, and an RDS database. The main goal was to make the website secure, scalable, and always available.",

  problemStatement:
    "Many websites stop working when too many users visit them or when the server fails. I wanted to solve this problem by building a cloud infrastructure that can handle traffic, stay available, and automatically monitor the application.",

  objectives: [
    "Host a website on AWS.",
    "Create a secure custom VPC.",
    "Launch EC2 instances for the website.",
    "Use a Load Balancer to share traffic.",
    "Configure Auto Scaling.",
    "Monitor the infrastructure using CloudWatch.",
    "Receive alert emails using SNS.",
    "Store website data securely in RDS."
  ],
    architectureImage: "/images/aws-architecture.png",
  features: [
    "Created a custom VPC with public and private subnets.",
    "Hosted the website on Amazon EC2.",
    "Configured an Application Load Balancer.",
    "Implemented Auto Scaling for high availability.",
    "Monitored the infrastructure using CloudWatch.",
    "Configured SNS email notifications.",
    "Created a private RDS database.",
    "Secured the infrastructure using Security Groups."
  ],

  myRole: [
    "Designed the complete AWS architecture.",
    "Created the VPC and subnets.",
    "Launched and configured EC2 instances.",
    "Configured Route Tables, Internet Gateway, and NAT Gateway.",
    "Created Security Groups.",
    "Configured the Application Load Balancer.",
    "Created Auto Scaling Group and Launch Template.",
    "Configured CloudWatch dashboards and alarms.",
    "Integrated SNS for email notifications.",
    "Created and tested the RDS database.",
    "Tested the complete project."
  ],

  challenges: [
    {
      challenge:
        "The website should stay available even if one server stops working.",
      solution:
        "I used an Application Load Balancer with Auto Scaling."
    },
    {
      challenge:
        "I wanted to monitor the servers all the time.",
      solution:
        "I used CloudWatch dashboards and alarms."
    },
    {
      challenge:
        "The database needed to be secure.",
      solution:
        "I placed the RDS database inside private subnets."
    },
    {
      challenge:
        "The application should handle more users during high traffic.",
      solution:
        "I configured Auto Scaling to automatically launch new EC2 instances."
    }
  ],

  outputDescription:
    "This PDF contains the screenshots of the complete AWS implementation, including VPC, EC2, Subnets, Route Tables, Internet Gateway, NAT Gateway, Security Groups, Load Balancer, Auto Scaling, CloudWatch, SNS, and RDS database setup.",

  github: "https://github.com/Snehal-shelke25/Snehal_AWS_Project",

  outputPdf: "/pdf/aws-output.pdf",

  demo: "#"
  },
  {
  id: "jenkins-cicd",

  title: "CI/CD Pipeline Using Jenkins, Docker and GitHub",
  description:
"This project is about automating website deployment using Jenkins, Docker, GitHub, and AWS EC2. I connected GitHub with Jenkins using GitHub Webhooks so that every code push automatically starts the build and deployment process. Docker was used to create and deploy the application, making deployment faster and more reliable. This project helped me understand CI/CD, automation, Docker containers, Jenkins jobs, and cloud deployment.",

  tagline:
    "Built an automated CI/CD pipeline to deploy a website from GitHub using Jenkins and Docker.",

  icon: "🚀",

  category: "🚀 DevOps Project",

  tags: [
    "Jenkins",
    "Docker",
    "Git",
    "GitHub",
    "GitHub Webhook",
    "Linux",
    "AWS EC2"
  ],

  overview:
    "I built a complete CI/CD pipeline to automatically deploy a website from GitHub to AWS EC2. Whenever I pushed changes to GitHub, GitHub Webhook automatically triggered Jenkins to build and deploy the latest version of the website using Docker.",

  problemStatement:
    "Deploying a website manually takes time and can lead to mistakes. I wanted to automate the deployment process so that every code change is automatically built and deployed without manual work.",

  objectives: [
    "Build a complete CI/CD pipeline.",
    "Connect GitHub with Jenkins.",
    "Trigger builds automatically using GitHub Webhook.",
    "Deploy the website using Docker.",
    "Configure Jenkins Master and Slave machines.",
    "Reduce manual deployment work.",
    "Deploy every code change automatically."
  ],

  architectureImage: "/images/devops-architecture.png",

  features: [
    "Built a complete CI/CD pipeline.",
    "Connected GitHub with Jenkins.",
    "Configured GitHub Webhook for automatic builds.",
    "Built and deployed the website using Docker.",
    "Configured Jenkins Master and Slave machines.",
    "Deployed the website on AWS EC2.",
    "Automatically updated the website after every GitHub push.",
    "Verified successful builds and deployment."
  ],

  myRole: [
    "Created AWS EC2 instances.",
    "Installed and configured Jenkins.",
    "Configured Jenkins Master and Slave machines.",
    "Installed Docker on the servers.",
    "Created the GitHub repository.",
    "Configured GitHub Webhook.",
    "Created Jenkins Freestyle jobs.",
    "Configured Multi-Configuration jobs.",
    "Built and deployed the website using Docker.",
    "Modified the website and tested automatic deployment.",
    "Verified successful builds and deployment."
  ],

  challenges: [
    {
      challenge:
        "Deploying the website manually took more time.",
      solution:
        "I automated the deployment using Jenkins and GitHub Webhook."
    },
    {
      challenge:
        "Every code change needed to be deployed automatically.",
      solution:
        "I configured GitHub Webhook to trigger Jenkins after every push."
    },
    {
      challenge:
        "The deployment needed to work on multiple machines.",
      solution:
        "I configured Jenkins Master and Slave machines."
    },
    {
      challenge:
        "I wanted a reliable deployment process.",
      solution:
        "I used Docker to build and deploy the application."
    }
  ],

  outputDescription:
    "This PDF contains the complete DevOps project implementation, including AWS EC2 setup, GitHub repository, GitHub Webhook, Jenkins Master, Slave Machine, Docker deployment, Freestyle Jobs, Multi-Configuration Jobs, website deployment, and successful build results.",

  github:
    "https://github.com/Snehal-shelke25/Snehal_DevOps-Project",

  outputPdf: "/pdf/DevOps-Output.pdf",

  demo: "#"
},
  {
  id: "yoga-pose-detection",

  title: "Yoga Pose Assessment Using Deep Learning",
  description:
"This project is a real-time yoga pose detection system developed using Python and deep learning. The application captures live video from a webcam, detects body keypoints, recognizes yoga poses, calculates posture accuracy, and provides feedback to help users improve their posture. I used MediaPipe, OpenCV, CNN, and LSTM to build the system and designed a simple desktop interface for users.",

  tagline:
    "Developed a real-time yoga pose detection system that recognizes yoga poses and provides posture accuracy feedback using deep learning.",

  icon: "🧘",

  category: "🤖 AI / ML Project",

  tags: [
    "Python",
    "Deep Learning",
    "Computer Vision",
    "OpenCV",
    "MediaPipe",
    "CNN",
    "LSTM",
    "Tkinter",
    "NumPy",
    "Pandas"
  ],

  overview:
    "This project is a real-time yoga pose detection and assessment system developed using Python and deep learning. The application captures live video from a webcam, detects body keypoints, recognizes yoga poses, calculates posture accuracy, and provides feedback to help users improve their yoga practice.",

  problemStatement:
    "Many people practice yoga at home without a trainer, making it difficult to know whether their posture is correct. The goal of this project was to develop a system that can detect yoga poses, evaluate posture accuracy, and provide real-time feedback using computer vision and deep learning.",

  objectives: [
    "Detect human body keypoints in real time.",
    "Recognize different yoga poses.",
    "Calculate pose accuracy.",
    "Provide real-time posture feedback.",
    "Help users practice yoga without a trainer.",
    "Develop an easy-to-use desktop application."
  ],

  architectureImage: "/images/yoga-architecture.png",

  features: [
    "Real-time webcam-based pose detection.",
    "Automatic body keypoint detection.",
    "Yoga pose classification.",
    "Pose accuracy calculation.",
    "Visual feedback for correct and incorrect posture.",
    "Simple desktop GUI.",
    "Fast real-time prediction.",
    "Supports self-learning for yoga practice."
  ],

  myRole: [
    "Collected and prepared the dataset.",
    "Developed the Python application.",
    "Integrated MediaPipe for pose detection.",
    "Implemented the deep learning model.",
    "Designed the desktop GUI.",
    "Integrated real-time webcam processing.",
    "Tested the application with different yoga poses.",
    "Improved prediction accuracy and application performance."
  ],

  challenges: [
    {
      challenge:
        "Detecting body keypoints correctly in different lighting conditions.",
      solution:
        "Used MediaPipe pose estimation and tested the application in different environments."
    },
    {
      challenge:
        "Improving yoga pose recognition accuracy.",
      solution:
        "Used a deep learning model with proper training and preprocessing."
    },
    {
      challenge:
        "Processing webcam frames in real time.",
      solution:
        "Optimized image processing for faster prediction."
    },
    {
      challenge:
        "Providing simple feedback to users.",
      solution:
        "Displayed pose name, accuracy score, and posture evaluation in the GUI."
    }
  ],

  outputDescription:
    "This PDF contains screenshots of the desktop application, login screen, yoga pose detection interface, pose recognition results, and posture accuracy output.",

  github:
    "https://github.com/Snehal-shelke25/BE-project",

  outputPdf:
    "/pdf/Yoga-output.pdf",

  demo: "#"
} ,
 {
  id: "ptkn-website",

  title: "PTKN Website - Buyer & Seller Marketplace",
  description:
"This project is a responsive website developed using React.js. It introduces the PTKN buyer and seller marketplace platform and explains its features in a simple way. The website includes multiple pages, responsive layouts, easy navigation using React Router, and reusable components. The main goal was to create a clean, modern, and user-friendly website that works well on desktop and mobile devices.",

  tagline:
    "Designed and developed a responsive website to showcase the PTKN marketplace and its features.",

  icon: "🌐",

  category: "💻 Full Stack Project",

  tags: [
    "React.js",
    "JavaScript",
    "CSS",
    "React Router",
    "Responsive Design",
    "UI/UX"
  ],

  overview:
    "I developed the PTKN website to introduce the PTKN marketplace platform. The website explains how buyers and sellers can use the application, highlights its main features, and provides a clean and responsive user experience across different devices.",

  problemStatement:
    "Many users do not know how the PTKN application works before downloading it. I wanted to create a website that clearly explains the platform, its features, and how buyers and sellers can benefit from it.",

  objectives: [
    "Create a modern and responsive website.",
    "Introduce the PTKN marketplace platform.",
    "Explain features for buyers and sellers.",
    "Provide an easy-to-use navigation system.",
    "Display application screenshots and information.",
    "Encourage users to download the PTKN application.",
    "Make the website mobile friendly."
  ],

  architectureImage: "/images/ptkn-architecture.png",

  features: [
    "Responsive website design.",
    "Home page with marketplace introduction.",
    "Dedicated pages for buyers and sellers.",
    "Features page with application highlights.",
    "How It Works section.",
    "Interactive application preview.",
    "Download page for the mobile application.",
    "Contact page for user support."
  ],

  myRole: [
    "Designed the website layout.",
    "Developed reusable React components.",
    "Created responsive pages using React.",
    "Implemented React Router navigation.",
    "Designed the user interface.",
    "Added animations and interactive sections.",
    "Optimized the website for desktop and mobile.",
    "Tested and fixed UI issues."
  ],

  challenges: [
    {
      challenge:
        "The website needed to work well on all screen sizes.",
      solution:
        "I created a fully responsive layout using CSS."
    },
    {
      challenge:
        "The website should be easy to navigate.",
      solution:
        "I used React Router to create simple page navigation."
    },
    {
      challenge:
        "The website needed to explain the PTKN platform clearly.",
      solution:
        "I designed separate pages for buyers, sellers, features, and how it works."
    },
    {
      challenge:
        "The website should provide a modern user experience.",
      solution:
        "I used reusable React components and interactive UI sections."
    }
  ],

  outputDescription:
    "This PDF contains the website screens including the Home page, Features page, Buyer page, Seller page, How It Works page, Download page, Contact page, and responsive website design.",

  github: "https://github.com/Snehal-shelke25",

  outputPdf: "/pdf/ptkn-output.pdf",

  demo: "#"
}
];

export const certifications = [
  'AWS and DevOps — Irizpro Inspire Excellence',
];
