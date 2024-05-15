const courses = [
    {
        Course: "Introduction to Machine Learning with Python",
        CourseCode: "AI-101",
        CourseDescription: "Get started with machine learning using Python. Learn the basics of data preprocessing, model training, and evaluation.",
        Product: "Python",
        Role: "Data Scientist",
        Level: "Beginner",
        Duration: "3 months",
        Price: "49.99",
        CourseURL: "/intro-to-machine-learning-python.html",
        CourseImage: "https://example.com/images/ml-python-intro.jpg",
    },
    {
        Course: "Working with Eulers and Quaternion",
        CourseCode: "EU-212",
        CourseDescription: "Working with Eulers and Quaternion for game development settings",
        Product: "Unity",
        Role: "Programmer",
        Level: "Beginner",
        Duration: "3 months",
        Price: "30.00",
        CourseURL: "/euler-quanternion.html",
        CourseImage: "https://unity-connect-prd.storage.googleapis.com/20190701/learn/images/7b8a192e-5ee5-47e1-bf63-95b38655fa8e_Quaternions.jpg",
    },
    {
        Course: "Introduction to Java",
        CourseCode: "AI-101",
        CourseDescription: "Learn to code in Java — a robust programming language used to create software, web and mobile apps, and more.",
        Product: "Java",
        Role: "Fullstack Software Engineer",
        Level: "Beginner",
        Duration: "3 months",
        Price: "49.99",
        CourseURL: "https://www.codecademy.com/learn/learn-java",
        CourseImage: "https://artoftesting.com/wp-content/uploads/2020/03/introduction-to-java-featured.jpg",
    },
    {
        Course: "CSS So Swag",
        CourseCode: "CSS101",
        CourseDescription: "Learn the in's and out's of CSS to build a swag website",
        Product: "Visual Studio Code",
        Role: "Web Designer",
        Level: "Beginner",
        Duration: "1 Month",
        Price: "29.95",
        CourseURL: "https://www.w3schools.com/css/",
        CourseImage: "https://positivethinking.tech/wp-content/uploads/2023/08/CSS-new-features-cover-800x593.png",
    },
    {
        Course: "IAWS",
        CourseCode: "AI-101",
        CourseDescription: "Amazon Web Services",
        Product: "amazin",
        Role: "cloud",
        Level: "Beginner",
        Duration: "3 months",
        Price: "49.99",
        CourseURL: "https://aws.amazon.com/free/",
        CourseImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvOCHeqNEMvlfFJGfKoCQvZlwwgFDEo1D43M_yqLGrw&s",
    },
    {
        Course: "Operating Systems Security Fundamentals",
        CourseCode: "OS-SEC-101",
        CourseDescription: "Explore operating system vulnerabilities and common cyberattacks. Learn best practices for securing your systems.",
        Product: "Operating Systems",
        Role: "Security Analyst",
        Level: "Intermediate",
        Duration: "4 months",
        Price: "99.99",
        CourseURL: "/os-security-fundamentals.html",
        CourseImage: "https://example.com/images/os-security.jpg",
    },
    {
        Course: "Introduction to SQL",
        CourseCode: "SL001",
        CourseDescription: "Learn how to use SQL.",
        Product: "SQL",
        Role: "Data Analyst",
        Level: "Beginner",
        Duration: "6 months",
        Price: "69.99",
        CourseURL: "https://www.udemy.com/topic/sql/",
        CourseImage: "https://static.tildacdn.one/tild6262-6661-4034-b164-383063636462/What_is_SQL_Database.png",
    },
    {
        Course: "Afdrukken 101",
        CourseCode: "AF-101",
        CourseDescription: "Learn to print and put digital art/information onto paper",
        Product: "Printed goods",
        Role: "Printer",
        Level: "Beginner",
        Duration: "4 months",
        Price: "250.00",
        CourseURL: "https://global.canon/en/technology/frontier24.html",
        CourseImage: "https://global.canon/en/technology/img/frontier/head_img24.jpg",
    },
    {
        Course: "CSS",
        CourseCode: "AK-47",
        CourseDescription: "Learning everything I can do with CSS",
        Product: "Visual Studio Code",
        Role: "Web Designer",
        Level: "Beginner",
        Duration: "3 years",
        Price: "54.99",
        CourseURL: "https://www.w3schools.com/css/",
        CourseImage: "https://th.bing.com/th/id/OIP.tAvAD5lCtDJSjywplxd37QHaEo?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
        Course: "Cloud Computing",
        CourseCode: "CC-101",
        CourseDescription: "Virtualized way to handle data storage and deliver services over the internet compared to using your own physical, in-house IT resources.",
        Product: "Data Backup",
        Role: "Makes data backup, Disaster recovery",
        Level: "Beginner",
        Duration: "6 months",
        Price: "50.99",
        CourseURL: "https://www.w3schools.com/aws/aws_cloudessentials_cloudcomputing.php",
        CourseImage: "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTRW0qi_i09eOCCfH30L0KeI06vyMkaiquLcJEutZ8cAgfQgYsvGvDqywQz6IeLIBOz&psig=AOvVaw0NLHgGAmo_x3nB9x3PuGy2&ust=1715880328914000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjh39OWkIYDFQAAAAAdAAAAABAE",
    },
    {
        Course: "Introduction to AI",
        CourseCode: "AI-101",
        CourseDescription: "Get started with AI. Learn the basics of AI.",
        Product: "AI",
        Role: "AI Developer",
        Level: "Beginner",
        Duration: "6 months",
        Price: "499.99",
        CourseURL: "/intro-to-ai",
        CourseImage: "https://ai.com",
    },
    {
        Course: "Intro to C++",
        CourseCode: "C++-101",
        CourseDescription: "Learn C++ — a versatile programming language that’s important for developing software, games, databases, and more.",
        Product: "C++",
        Role: "Programmer",
        Level: "Beginner",
        Duration: "12 hours",
        Price: "free",
        CourseURL: "https://www.codecademy.com/catalog/language/c-plus-plus",
        CourseImage: "https://example.com/images/ml-python-intro.jpg",
    },
    {
        Course: "Cloud Computing Program",
        CourseCode: "Cl-101",
        CourseDescription: "Enrich your Cloud Computing knowledge with a comprehensive industry-relevant curriculum",
        Product: "AWS, Azure, DevOps and more",
        Role: "Cloud Software Engineer",
        Level: "Beginner",
        Duration: "6 months",
        Price: "?",
        CourseURL: "https://onlineexeced.mccombs.utexas.edu/utaustin-pgp-online-cloud-computing?&utm_source=google&utm_medium=search&utm_campaign=CC_Int_Search_Cloud_Exact_US_NonAWS_DKI&campaign_id=20813980752&adgroup_id=163013131864&ad_id=683016300179&utm_target=kwd-297150159785&Keyword=cloud%20computing%20program&placement=&gad_source=1&gclid=CjwKCAjwupGyBhBBEiwA0UcqaCyilIjccmifi5K_05OxO85ZCS0U4l8wmX4583J3rr1bRQdxouDHwxoCTFcQAvD_BwE",
        CourseImage: "https://d1vwxdpzbgdqj.cloudfront.net/learning-partners/new-logo/utaustin-no-bg.png",
    },
    {
        Course: "IT Operations Management (ITOM) Overview",
        CourseCode: "n/a",
        CourseDescription: "IT Operations Management (ITOM) is the management and strategic approach to planning, building, and operating digital services, technology, components, and application requirements.",
        Product: "ServiceNow",
        Role: "Data Scientist",
        Level: "Beginner",
        Duration: "3 months",
        Price: "399.99",
        CourseURL: "https://nowlearning.servicenow.com/lxp/en/pages/now-learning-get-certified?id=amap_detail&summary_id=79d64e311bfcf01002ed2f89bd4bcb51&achievement_id=d88e1d77dbc27f40de3cdb85ca961926",
        CourseImage: "https://th.bing.com/th/id/OIP.aDq6lLvI4T8B98608JVW9wAAAA?rs=1&pid=ImgDetMain",
    },
    {
        Course: "Comprehensive API Development Course | Master APIs with Hands-On Projects!",
        CourseCode: "AP-001",
        CourseDescription: "Unlock the power of APIs with a comprehensive course, along with hands-on projects. Perfect for Quality Assurance Testing Engineers seeking to expand their API testing skills.",
        Product: "API Development",
        Role: "Quality Assurance Testing Engineer",
        Level: "Beginner",
        Duration: "6 months",
        Price: "49.99",
        CourseURL: "https://www.coursera.org/courses?query=api",
        CourseImage: "https://i.ytimg.com/vi/iOtNArnpOrc/maxresdefault.jpg",
    }
];
let amountOfCourses = courses.length;
console.log(amountOfCourses)


//one method
for(let i=0; i <amountOfCourses; i++){
    const coursesAmount = courses[i].Course;
console.log(coursesAmount);
}

//second mmethod
courses.forEach(course => {
    console.log(course.Course)
});

//third method
for(let i = 0; i <amountOfCourses; i++){ 

    console.log(courses[i].Course); 

}

// Example 1: Basic `for` Loop
// Benefit: Simple and flexible, can easily use index for additional logic.
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i].Course);
}

// Example 2: `for...of` Loop
// Benefit: Cleaner syntax, directly iterates over array elements.
for (const course of courses) {
    console.log(course.Course);
}

// Example 3: `forEach` Loop
// Benefit: Functional programming style, concise, no need for index variable.
courses.forEach(course => {
    console.log(course.Course);
});

// Example 4: Using `map` Method
// Benefit: Creates a new array of titles, useful for further processing or transformations.
const courseTitles = courses.map(course => course.Course);
courseTitles.forEach(title => console.log(title));

// Example 5: `for...in` Loop (with Array Index)
// Benefit: Can access the index, useful if you need to know the position in the array.
for (const index in courses) {
    console.log(courses[index].Course);
}















//courses.forEach(courses.)