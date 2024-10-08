export const getCurrentUser = async () => {
    try {
        const response = await fetch("./getCurrentUser", {
            method: "GET"
        });

        const data = await response.json();
        if(data.success)
            return data.current_user;
    
        return null;
    } catch(error) {
        console.error("getCurrentUser: ", error);
        return {
            "is_logged_in": true,
            "portfolio_info": {
                "buy_me_something": [
                    "Protein",
                    "https://buymeacoffee.com/jaggannadhan"
                ],
                "description": "From algorithms to user interfaces, I engineer robust software ecosystems that elevate user experiences and exceed expectations.",
                "form_submit": "jegsirox@gmail.com",
                "greetings": "Ola, It's Me",
                "last_updated": "Fri, 23 Aug 2024 17:01:27 GMT",
                "picture": "https://storage.googleapis.com/jegsirox/profilePic/myProfileYlw.png",
                "recent_work": [
                    {
                        "desc": "Create Portfolios, Articles and Blogs on the go!",
                        "images": [
                            "https://storage.googleapis.com/jegsirox/KatturaiBg1.png",
                            "https://storage.googleapis.com/jegsirox/KatturaiBg2.png",
                            "https://storage.googleapis.com/jegsirox/KatturaiBg3.png"
                        ],
                        "link": "https://hopeful-flame-420906.uc.r.appspot.com/",
                        "title": "Katturai"
                    },
                    {
                        "desc": "FlechHomes is a futuristic RealEstate Investment app that focuses on leveraging AI/ML systems to get a better investment choice for our users.",
                        "images": [
                            "https://storage.googleapis.com/jegsirox/Fletch_preview_02.png",
                            "https://storage.googleapis.com/jegsirox/FletchHomes_preview_07.png"
                        ],
                        "link": "https://github.com/jaggannadhan/REIEngine",
                        "name": "",
                        "title": "FletchHomes"
                    },
                    {
                        "desc": "A fact extraction service that utilizes ChatGPT to extract facts from text files.",
                        "images": [
                            "https://storage.googleapis.com/jegsirox/TruthSeekerBg3.jpg",
                            "https://storage.googleapis.com/jegsirox/TruthSeekerBg1.svg"
                        ],
                        "link": "https://default1-dot-hopeful-flame-420906.uc.r.appspot.com/cleric/",
                        "name": "",
                        "title": "Truth Seeker"
                    },
                    {
                        "desc": "A secure platform for managing and storing API data and documents.",
                        "images": [
                            "https://storage.googleapis.com/jegsirox/DevDocsBg1.png"
                        ],
                        "link": "https://github.com/jaggannadhan/dev-docs",
                        "name": "",
                        "title": "Dev Docs"
                    }
                ],
                "resume": "https://drive.google.com/file/d/1unqkbr1GhRruoo3sk78Y8ackuQzleUXD/view?usp=sharing",
                "skills": [
                    {
                        "name": "Frontend",
                        "skills": [
                            {
                                "name": "JavaScript",
                                "subSkills": [
                                    "React.js-Redux",
                                    "TypeScript"
                                ]
                            },
                            {
                                "name": "HTML",
                                "subSkills": []
                            },
                            {
                                "name": "CSS",
                                "subSkills": [
                                    "scss"
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Backend",
                        "skills": [
                            {
                                "name": "Python",
                                "subSkills": [
                                    "Flask",
                                    "Django"
                                ]
                            },
                            {
                                "name": "SQL",
                                "subSkills": [
                                    "MySQL"
                                ]
                            },
                            {
                                "name": "NoSQL",
                                "subSkills": [
                                    "MongoDB"
                                ]
                            },
                            {
                                "name": "Google Cloud Platform",
                                "subSkills": [
                                    "AppEngine",
                                    "ComputeEngine"
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Testing",
                        "skills": [
                            {
                                "name": "Jest",
                                "subSkills": []
                            },
                            {
                                "name": "React Testing Library",
                                "subSkills": []
                            },
                            {
                                "name": "PyTest",
                                "subSkills": []
                            },
                            {
                                "name": "UnitTest",
                                "subSkills": []
                            }
                        ]
                    },
                    {
                        "name": "AI / ML",
                        "skills": [
                            {
                                "name": "CNN's",
                                "subSkills": []
                            },
                            {
                                "name": "Conversational AI",
                                "subSkills": [
                                    "OpenAI"
                                ]
                            },
                            {
                                "name": "Frameworks",
                                "subSkills": [
                                    "TensorFlow",
                                    "PyTorch"
                                ]
                            }
                        ]
                    }
                ],
                "theme": "Tiled",
                "titles": [
                    "Software Engineer",
                    "  Blogger",
                    "  Martial Artist"
                ]
            },
            "profile_info": {
                "epigraph": "Happiness can be a state of mind when you realize there is no better time or way to live. \nOnly a strong body and a healthy mind can sustain the epiphany.  \nLive Fluid, Train Hard!",
                "github": "https://github.com/jaggannadhan/",
                "instagram": "https://www.instagram.com/jagg4n/",
                "last_updated": "Sat, 27 Jul 2024 19:13:51 GMT",
                "linkedin": "https://www.linkedin.com/in/jvenu94/",
                "subtext": "Tatakai",
                "tagline": "戦い",
                "title": "Software Engineer, MS Computer Science",
                "youtube": "https://www.youtube.com/@jegsirox3674"
            },
            "user_info": {
                "address": "Boston",
                "email": "jegsirox@gmail.com",
                "first_name": "Jaggannadhan",
                "last_login": "Sat, 27 Jul 2024 18:26:09 GMT",
                "last_name": "Venugopal",
                "name": "Jaggannadhan Venugopal",
                "phone_number": "8622262405",
                "picture": "https://storage.googleapis.com/jegsirox/profilePic/myProfile.png",
                "user_uid": "jegsirox"
            }
        }
    }
}

export const postUserDetails = async(params) => {
    try {
        const response = await fetch("./userDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });

        const data = await response.json();
        return data;
    } catch(error) {
        console.error("postUserDetails: ", error);
        return {}
    }
}

export const postProfileDetails = async(params) => {
    try {
        const response = await fetch("./profileDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });

        const data = await response.json();
        return data;
    } catch(error) {
        console.error("postProfileDetails: ", error);
        return {}
    }
}

export const postPortfolioDetails = async(params) => {
    try {
        const response = await fetch("./portfolioDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });

        const data = await response.json();
        return data;
    } catch(error) {
        console.error("postPortfolioDetails: ", error);
        return {}
    }
}

export const uploadProfilePic = async(formData) => {
    try {
        const response = await fetch("./uploadProfilePic", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        return data;
    } catch(error) {
        console.error("uploadProfilePic: ", error);
        return {}
    }
}

export const uploadMultipleFiles = async(formData) => {
    try {
        const response = await fetch("./uploadMultipleFiles", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        return data;
    } catch(error) {
        console.error("uploadMultipleFiles: ", error);
        return {}
    }
}


export const sendEmail = async({email, subject, message}) => {
    try {
        const response = await fetch(`./sendEmail`, {
            method: "POST",
            body: JSON.stringify({
                email: email,
                subject: subject,
                message: message
            })
        });

        const data = await response.json();
        return data;
    } catch(error) {
        console.error("sendEmail: ", error);
        return {success: false};
    }
}
