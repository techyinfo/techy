// Tutorials Data
const tutorials = [
    // HTML Tutorials
    {
        id: 1,
        category: 'html',
        title: 'HTML Fundamentals: Building the Foundation',
        badge: 'HTML',
        description: 'Learn the core building blocks of web pages and create semantic, accessible HTML documents.',
        difficulty: 'Beginner',
        duration: '15 min read',
        content: `
            <h3>What is HTML?</h3>
            <p>HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the structure and content of websites, working alongside CSS for styling and JavaScript for interactivity.</p>
            
            <h3>HTML Basics</h3>
            <p>Every HTML document starts with a DOCTYPE declaration and the root html element. The document is divided into two main sections: the head (containing metadata) and the body (containing visible content).</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

            <h3>HTML Elements</h3>
            <p>HTML elements consist of tags (opening and closing), attributes, and content. Tags are enclosed in angle brackets, and most elements require both opening and closing tags.</p>

            <h3>Semantic HTML</h3>
            <p>Use semantic elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, and &lt;footer&gt; to structure your content meaningfully. This improves accessibility and SEO.</p>
            <pre><code>&lt;header&gt;
    &lt;nav&gt;Navigation Links&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
    &lt;article&gt;
        &lt;h2&gt;Article Title&lt;/h2&gt;
        &lt;p&gt;Article content...&lt;/p&gt;
    &lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;Footer Information&lt;/footer&gt;</code></pre>

            <h3>Forms and Input</h3>
            <p>Forms are crucial for collecting user data. Use the &lt;form&gt; element with various input types to create interactive forms.</p>
            <pre><code>&lt;form action="/submit" method="POST"&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" required&gt;
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
    
    &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>

            <h3>Best Practices</h3>
            <p>Always use proper indentation, include alt text for images, use meaningful IDs and classes, validate your HTML, and prioritize accessibility from the start.</p>
        `
    },
    {
        id: 2,
        category: 'html',
        title: 'HTML5 Semantic Elements Deep Dive',
        badge: 'HTML',
        description: 'Master semantic HTML5 elements for better structure, accessibility, and SEO performance.',
        difficulty: 'Intermediate',
        duration: '20 min read',
        content: `
            <h3>Understanding Semantic HTML5</h3>
            <p>Semantic HTML5 elements clearly describe the meaning of content to both browsers and developers. Unlike div elements, semantic elements provide context and improve accessibility.</p>

            <h3>Key Semantic Elements</h3>
            <p><code>&lt;header&gt;</code> - Represents introductory content or navigation links</p>
            <p><code>&lt;nav&gt;</code> - Contains navigation links</p>
            <p><code>&lt;main&gt;</code> - Contains the primary content of the page</p>
            <p><code>&lt;article&gt;</code> - Self-contained content that can be independently distributed</p>
            <p><code>&lt;section&gt;</code> - Groups related content together</p>
            <p><code>&lt;aside&gt;</code> - Contains related content, typically a sidebar</p>
            <p><code>&lt;footer&gt;</code> - Represents footer content</p>

            <h3>Practical Example</h3>
            <pre><code>&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;My Blog&lt;/h1&gt;
        &lt;nav&gt;
            &lt;a href="/"&gt;Home&lt;/a&gt;
            &lt;a href="/blog"&gt;Blog&lt;/a&gt;
        &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;article&gt;
            &lt;h2&gt;Blog Post Title&lt;/h2&gt;
            &lt;p&gt;Post content...&lt;/p&gt;
        &lt;/article&gt;

        &lt;aside&gt;
            &lt;h3&gt;Recent Posts&lt;/h3&gt;
        &lt;/aside&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;&copy; 2024 My Blog&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;</code></pre>

            <h3>Benefits of Semantic HTML</h3>
            <p>Improves accessibility for screen readers, better SEO ranking, easier to maintain code, clearer code structure, and better support across browsers and devices.</p>
        `
    },
    {
        id: 3,
        category: 'css',
        title: 'CSS Grid Layout: Master Modern Layouts',
        badge: 'CSS',
        description: 'Learn CSS Grid for creating powerful two-dimensional layouts with ease and precision.',
        difficulty: 'Intermediate',
        duration: '25 min read',
        content: `
            <h3>What is CSS Grid?</h3>
            <p>CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns. It provides powerful tools for aligning and distributing space among items.</p>

            <h3>Grid Container and Items</h3>
            <p>A grid container holds grid items. To create a grid, set display: grid on the container and define rows and columns using grid-template-rows and grid-template-columns.</p>
            <pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100px auto 100px;
    gap: 20px;
}</code></pre>

            <h3>Grid Lines and Areas</h3>
            <p>Grid items are placed on grid lines. You can position items using grid-column and grid-row properties, or use grid areas for named layout regions.</p>
            <pre><code>.header {
    grid-column: 1 / -1;
    grid-row: 1;
}

.sidebar {
    grid-column: 1;
    grid-row: 2;
}

.main-content {
    grid-column: 2 / -1;
    grid-row: 2;
}</code></pre>

            <h3>Responsive Grid Layout</h3>
            <p>Use auto-fit and auto-fill with minmax to create responsive grids that automatically adjust to available space.</p>
            <pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}</code></pre>

            <h3>Grid Alignment</h3>
            <p>Control alignment with justify-items (horizontal), align-items (vertical), justify-content (horizontal distribution), and align-content (vertical distribution).</p>
        `
    },
    {
        id: 4,
        category: 'css',
        title: 'Flexbox Complete Guide: Build Responsive Designs',
        badge: 'CSS',
        description: 'Master Flexbox to create flexible, responsive layouts with CSS.',
        difficulty: 'Intermediate',
        duration: '20 min read',
        content: `
            <h3>Introduction to Flexbox</h3>
            <p>Flexbox is a one-dimensional layout model that distributes space and aligns items along a primary axis. It's perfect for creating responsive navigation bars, card layouts, and flexible content arrangements.</p>

            <h3>Flex Container Properties</h3>
            <pre><code>.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
}</code></pre>

            <h3>Flex Item Properties</h3>
            <p>Control individual flex items with flex-grow, flex-shrink, and flex-basis. The flex shorthand combines all three.</p>
            <pre><code>.flex-item {
    flex: 1 0 200px;
    align-self: flex-start;
}</code></pre>

            <h3>Common Flexbox Patterns</h3>
            <p>Use Flexbox for: navigation menus, card layouts, center content, equal-width columns, and responsive designs.</p>

            <h3>Flexbox vs Grid</h3>
            <p>Use Flexbox for one-dimensional layouts. Use Grid for two-dimensional layouts with rows and columns together.</p>
        `
    },
    {
        id: 5,
        category: 'css',
        title: 'CSS Animations and Transitions Guide',
        badge: 'CSS',
        description: 'Create smooth, engaging animations and transitions to enhance user experience.',
        difficulty: 'Intermediate',
        duration: '22 min read',
        content: `
            <h3>CSS Transitions</h3>
            <p>Transitions smoothly animate CSS property changes over a specified duration, creating fluid visual effects.</p>
            <pre><code>.button {
    background-color: blue;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: red;
}</code></pre>

            <h3>CSS Animations</h3>
            <p>Animations allow more complex sequences using keyframes. Define keyframes and apply them with animation property.</p>
            <pre><code>@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}</code></pre>

            <h3>Performance Tips</h3>
            <p>Animate transform and opacity for best performance. Avoid animating expensive properties like width, height, or layout-affecting properties.</p>
        `
    },
    {
        id: 6,
        category: 'javascript',
        title: 'JavaScript ES6: Modern JavaScript Essentials',
        badge: 'JavaScript',
        description: 'Learn ES6 features including arrow functions, destructuring, and classes.',
        difficulty: 'Intermediate',
        duration: '28 min read',
        content: `
            <h3>Arrow Functions</h3>
            <p>Arrow functions provide a concise syntax and lexically bind the this context.</p>
            <pre><code>const add = (a, b) => a + b;
const greet = name => \`Hello, \${name}\`;
const multiply = (x, y) => {
    const result = x * y;
    return result;
};</code></pre>

            <h3>Destructuring</h3>
            <p>Extract values from objects and arrays more concisely.</p>
            <pre><code>const person = { name: 'John', age: 30 };
const { name, age } = person;

const colors = ['red', 'green', 'blue'];
const [first, second] = colors;</code></pre>

            <h3>Template Literals</h3>
            <p>Use backticks for string interpolation and multi-line strings.</p>
            <pre><code>const name = 'Alice';
const greeting = \`Hello, \${name}!\`;

const multiLine = \`
    Line 1
    Line 2
\`;</code></pre>

            <h3>Classes</h3>
            <p>ES6 classes provide syntactic sugar for JavaScript's prototype-based inheritance.</p>
            <pre><code>class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(\`\${this.name} makes a sound\`);
    }
}</code></pre>
        `
    },
    {
        id: 7,
        category: 'javascript',
        title: 'Async/Await and Promises: Mastering Asynchronous JavaScript',
        badge: 'JavaScript',
        description: 'Understand promises and async/await for handling asynchronous operations.',
        difficulty: 'Advanced',
        duration: '30 min read',
        content: `
            <h3>Understanding Promises</h3>
            <p>Promises represent the eventual completion of an asynchronous operation and its resulting value.</p>
            <pre><code>const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});</code></pre>

            <h3>Async/Await Syntax</h3>
            <p>Async/await provides a cleaner syntax for working with promises.</p>
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}</code></pre>

            <h3>Promise.all() and Promise.race()</h3>
            <p>Execute multiple promises concurrently and handle their results together.</p>
            <pre><code>Promise.all([p1, p2, p3])
    .then(results => console.log(results));

Promise.race([p1, p2])
    .then(result => console.log(result));</code></pre>
        `
    },
    {
        id: 8,
        category: 'javascript',
        title: 'DOM Manipulation: Interactive Web Pages',
        badge: 'JavaScript',
        description: 'Master DOM manipulation to create interactive and dynamic web experiences.',
        difficulty: 'Beginner',
        duration: '20 min read',
        content: `
            <h3>Selecting DOM Elements</h3>
            <p>Use various methods to select and access DOM elements.</p>
            <pre><code>const element = document.getElementById('myId');
const elements = document.getElementsByClassName('myClass');
const element = document.querySelector('.myClass');
const allElements = document.querySelectorAll('.myClass');</code></pre>

            <h3>Modifying Element Content</h3>
            <pre><code>element.textContent = 'New text';
element.innerHTML = '&lt;p&gt;New HTML&lt;/p&gt;';
element.setAttribute('data-id', '123');</code></pre>

            <h3>Styling Elements</h3>
            <pre><code>element.style.color = 'red';
element.classList.add('active');
element.classList.toggle('highlight');</code></pre>

            <h3>Creating and Removing Elements</h3>
            <pre><code>const newElement = document.createElement('div');
document.body.appendChild(newElement);
element.remove();</code></pre>
        `
    },
    {
        id: 9,
        category: 'python',
        title: 'Python Fundamentals: Getting Started',
        badge: 'Python',
        description: 'Learn Python basics including variables, data types, and control flow.',
        difficulty: 'Beginner',
        duration: '25 min read',
        content: `
            <h3>Python Overview</h3>
            <p>Python is a versatile, beginner-friendly programming language known for its clean syntax and powerful features.</p>

            <h3>Variables and Data Types</h3>
            <pre><code>name = "Alice"
age = 30
height = 5.8
is_student = False

numbers = [1, 2, 3, 4, 5]
coordinates = (10, 20)
person = {"name": "Bob", "age": 25}
colors = {"red", "blue", "green"}</code></pre>

            <h3>Control Flow</h3>
            <pre><code>if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")

for i in range(5):
    print(i)

while count > 0:
    print(count)
    count -= 1</code></pre>

            <h3>Functions</h3>
            <pre><code>def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

result = greet("Alice")
print(result)</code></pre>

            <h3>String Operations</h3>
            <pre><code>text = "Python Programming"
print(text.lower())
print(text.upper())
print(text.replace("Python", "Java"))
print(len(text))</code></pre>
        `
    },
    {
        id: 10,
        category: 'python',
        title: 'Object-Oriented Programming in Python',
        badge: 'Python',
        description: 'Learn classes, objects, inheritance, and other OOP concepts in Python.',
        difficulty: 'Intermediate',
        duration: '30 min read',
        content: `
            <h3>Classes and Objects</h3>
            <p>Classes are blueprints for creating objects. They encapsulate data and behavior.</p>
            <pre><code>class Dog:
    species = "Canis familiaris"
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"

dog1 = Dog("Rex", 3)
print(dog1.bark())</code></pre>

            <h3>Inheritance</h3>
            <pre><code>class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return f"{self.name} makes a sound"

class Dog(Animal):
    def speak(self):
        return f"{self.name} barks"

dog = Dog("Max")
print(dog.speak())</code></pre>

            <h3>Encapsulation</h3>
            <p>Hide internal details using private attributes (prefix with underscore).</p>
            <pre><code>class BankAccount:
    def __init__(self, balance):
        self._balance = balance
    
    def deposit(self, amount):
        self._balance += amount
    
    def get_balance(self):
        return self._balance</code></pre>
        `
    },
    {
        id: 11,
        category: 'cpp',
        title: 'C++ Basics: Getting Started with C++',
        badge: 'C++',
        description: 'Learn C++ fundamentals including syntax, variables, and basic operations.',
        difficulty: 'Beginner',
        duration: '25 min read',
        content: `
            <h3>Introduction to C++</h3>
            <p>C++ is a powerful, compiled language that combines procedural, object-oriented, and generic programming.</p>

            <h3>Hello World Program</h3>
            <pre><code>#include &lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hello, World!" &lt;&lt; std::endl;
    return 0;
}</code></pre>

            <h3>Variables and Data Types</h3>
            <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int age = 25;
    long population = 7000000000;
    float pi = 3.14f;
    double radius = 5.5;
    bool isActive = true;
    char letter = 'A';
    string name = "Alice";
    
    return 0;
}</code></pre>

            <h3>Input and Output</h3>
            <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    string name;
    
    cout &lt;&lt; "Enter your name: ";
    cin &gt;&gt; name;
    
    cout &lt;&lt; "Hello, " &lt;&lt; name &lt;&lt; "!" &lt;&lt; endl;
    
    return 0;
}</code></pre>

            <h3>Control Flow</h3>
            <pre><code>if (age >= 18) {
    cout &lt;&lt; "You are an adult" &lt;&lt; endl;
} else {
    cout &lt;&lt; "You are a minor" &lt;&lt; endl;
}

for (int i = 0; i &lt; 5; i++) {
    cout &lt;&lt; i &lt;&lt; " ";
}</code></pre>
        `
    },
    {
        id: 12,
        category: 'cpp',
        title: 'Object-Oriented Programming in C++',
        badge: 'C++',
        description: 'Master classes, inheritance, and OOP concepts in C++.',
        difficulty: 'Advanced',
        duration: '35 min read',
        content: `
            <h3>Classes and Objects</h3>
            <p>C++ classes support encapsulation with public, private, and protected access levels.</p>
            <pre><code>#include &lt;iostream&gt;
using namespace std;

class Car {
private:
    string color;
    int speed;

public:
    Car(string c, int s) : color(c), speed(s) {}
    
    void accelerate() {
        speed += 10;
    }
    
    void display() {
        cout &lt;&lt; "Color: " &lt;&lt; color &lt;&lt; endl;
    }
};</code></pre>

            <h3>Inheritance</h3>
            <pre><code>class Vehicle {
protected:
    string brand;

public:
    Vehicle(string b) : brand(b) {}
};

class Car : public Vehicle {
private:
    int doors;

public:
    Car(string b, int d) : Vehicle(b), doors(d) {}
};</code></pre>

            <h3>Virtual Functions</h3>
            <p>Use virtual functions for polymorphism in C++.</p>
            <pre><code>class Shape {
public:
    virtual void draw() = 0;
    virtual ~Shape() {}
};

class Circle : public Shape {
public:
    void draw() override {
        cout &lt;&lt; "Drawing Circle" &lt;&lt; endl;
    }
};</code></pre>
        `
    },
    {
        id: 13,
        category: 'git',
        title: 'Git Fundamentals: Version Control Basics',
        badge: 'Git',
        description: 'Learn Git essentials for managing code versions and collaborating with teams.',
        difficulty: 'Beginner',
        duration: '20 min read',
        content: `
            <h3>What is Git?</h3>
            <p>Git is a distributed version control system that tracks changes to your code over time.</p>

            <h3>Initial Configuration</h3>
            <pre><code>git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global core.editor "vim"

git config --list</code></pre>

            <h3>Basic Git Commands</h3>
            <pre><code>git init
git clone https://github.com/user/repository.git
git status
git add filename.txt
git add .
git commit -m "Add new feature"
git log
git log --oneline</code></pre>

            <h3>Branches</h3>
            <pre><code>git checkout -b feature/new-feature
git branch
git checkout main
git merge feature/new-feature
git branch -d feature/new-feature</code></pre>

            <h3>Undoing Changes</h3>
            <pre><code>git checkout filename.txt
git reset HEAD filename.txt
git reset --soft HEAD~1
git reset --hard HEAD~1</code></pre>
        `
    },
    {
        id: 14,
        category: 'github',
        title: 'GitHub Collaboration: Working with Teams',
        badge: 'GitHub',
        description: 'Master GitHub features for collaboration, pull requests, and project management.',
        difficulty: 'Intermediate',
        duration: '25 min read',
        content: `
            <h3>GitHub Basics</h3>
            <p>GitHub is a web-based platform built on Git that enables collaboration and code review.</p>

            <h3>Creating a Repository</h3>
            <p>Visit github.com, click "New" to create a repository. Initialize with README, .gitignore, and license as needed.</p>

            <h3>Forking and Cloning</h3>
            <pre><code>git clone https://github.com/YOUR-USERNAME/repository.git
git remote add upstream https://github.com/ORIGINAL-OWNER/repository.git
git fetch upstream
git merge upstream/main</code></pre>

            <h3>Pull Requests</h3>
            <pre><code>git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature</code></pre>

            <h3>Collaboration Best Practices</h3>
            <p>Write clear commit messages, create descriptive pull requests, review code thoroughly, keep branches focused and up-to-date.</p>
        `
    },
    {
        id: 15,
        category: 'linux',
        title: 'Linux Command Line: Essential Commands',
        badge: 'Linux',
        description: 'Master essential Linux commands for file management and system navigation.',
        difficulty: 'Beginner',
        duration: '22 min read',
        content: `
            <h3>Linux File System</h3>
            <p>Linux uses a hierarchical file system starting from the root directory (/).</p>

            <h3>Navigation Commands</h3>
            <pre><code>pwd
cd /home/user/documents
cd ..
cd ~
cd -

ls
ls -l
ls -la
ls -h</code></pre>

            <h3>File Operations</h3>
            <pre><code>touch filename.txt
mkdir new_directory
mkdir -p path/to/nested/directory

cp source.txt destination.txt
cp -r source_dir/ destination_dir/

mv old_name.txt new_name.txt
mv file.txt /path/to/destination/

rm filename.txt
rm -r directory_name
rm -f force_remove.txt</code></pre>

            <h3>Viewing File Contents</h3>
            <pre><code>cat filename.txt
less filename.txt
more filename.txt
head -n 10 filename.txt
tail -n 10 filename.txt
grep "search_term" filename.txt</code></pre>

            <h3>File Permissions</h3>
            <pre><code>chmod 755 script.sh
chmod u+x script.sh
chmod -R 755 directory

chown user:group filename.txt</code></pre>
        `
    },
    {
        id: 16,
        category: 'cybersecurity',
        title: 'Web Security Essentials: Protecting Your Applications',
        badge: 'Cybersecurity',
        description: 'Learn fundamental web security principles and protect against common vulnerabilities.',
        difficulty: 'Intermediate',
        duration: '28 min read',
        content: `
            <h3>Common Web Vulnerabilities</h3>
            <p>Understanding the most critical security risks is essential for building secure applications.</p>

            <h3>SQL Injection</h3>
            <p>SQL injection occurs when an attacker inserts malicious SQL code into input fields.</p>
            <pre><code>// Vulnerable code
String query = "SELECT * FROM users WHERE username = '" + username + "'";

// Attack example
username = "' OR '1'='1"

// Secure approach - Use parameterized queries
String query = "SELECT * FROM users WHERE username = ?";
PreparedStatement stmt = connection.prepareStatement(query);
stmt.setString(1, username);</code></pre>

            <h3>Cross-Site Scripting (XSS)</h3>
            <p>XSS attacks inject malicious scripts that execute in users' browsers.</p>
            <pre><code>// Vulnerable
echo "Welcome, " . $_GET['name'];

// Attack: Welcome, &lt;script&gt;alert('XSS')&lt;/script&gt;

// Secure - escape user input
echo "Welcome, " . htmlspecialchars($_GET['name']);</code></pre>

            <h3>HTTPS and SSL/TLS</h3>
            <p>Always use HTTPS to encrypt data in transit. Implement HTTP Strict Transport Security (HSTS).</p>

            <h3>Password Security</h3>
            <p>Hash passwords securely using bcrypt, Argon2, or scrypt. Never store plain text passwords.</p>
        `
    }
];

// News Data
const newsArticles = [
    {
        id: 1,
        title: 'Artificial Intelligence Shows Breakthrough in Medical Diagnostics',
        date: 'October 15, 2024',
        category: 'AI/ML',
        description: 'Latest developments in AI models demonstrate improved accuracy in detecting diseases early.',
        source: 'TechNews Daily',
        sourceUrl: 'https://technewsdaily.com',
        image: '🤖',
        summary: 'Researchers have successfully developed AI systems that can detect multiple diseases with accuracy rates exceeding 95%, outperforming traditional diagnostic methods.'
    },
    {
        id: 2,
        title: 'New JavaScript Framework Simplifies Web Development',
        date: 'October 12, 2024',
        category: 'Web Development',
        description: 'A new framework promises to reduce boilerplate code and improve developer experience.',
        source: 'Dev.to',
        sourceUrl: 'https://dev.to',
        image: '⚡',
        summary: 'A promising new JavaScript framework has been released, featuring zero-config setup, built-in routing, and server-side rendering capabilities out of the box.'
    },
    {
        id: 3,
        title: 'Cybersecurity Experts Warn of New Vulnerabilities',
        date: 'October 10, 2024',
        category: 'Security',
        description: 'Critical vulnerabilities discovered in widely-used software libraries affect millions of users.',
        source: 'Security Weekly',
        sourceUrl: 'https://securityweekly.com',
        image: '🔐',
        summary: 'Security researchers have identified critical vulnerabilities in three major software libraries used by millions of applications worldwide, with patches now available.'
    },
    {
        id: 4,
        title: 'Cloud Computing Market Reaches New Heights',
        date: 'October 8, 2024',
        category: 'Cloud',
        description: 'Enterprise adoption of cloud services continues to grow at an unprecedented rate.',
        source: 'Cloud Report',
        sourceUrl: 'https://cloudreport.com',
        image: '☁️',
        summary: 'Market analysis shows that enterprise cloud adoption has reached 94%, with organizations leveraging multi-cloud strategies for enhanced reliability and flexibility.'
    },
    {
        id: 5,
        title: 'Python Remains Most Popular Programming Language',
        date: 'October 5, 2024',
        category: 'Programming',
        description: 'Annual survey shows Python maintaining its lead in developer preferences.',
        source: 'Stack Overflow',
        sourceUrl: 'https://stackoverflow.com',
        image: '🐍',
        summary: 'The 2024 developer survey confirms Python as the most popular programming language, followed by JavaScript and TypeScript, with Python showing strong growth in AI/ML applications.'
    },
    {
        id: 6,
        title: 'Quantum Computing Achieves New Milestone',
        date: 'October 1, 2024',
        category: 'Quantum',
        description: 'Research labs demonstrate quantum computer solving complex problems faster than classical systems.',
        source: 'Science Daily',
        sourceUrl: 'https://sciencedaily.com',
        image: '⚛️',
        summary: 'A major breakthrough in quantum computing shows a quantum system solving a complex optimization problem in hours that would take classical computers thousands of years.'
    },
    {
        id: 7,
        title: 'GitHub Introduces AI Code Review Feature',
        date: 'September 28, 2024',
        category: 'Development Tools',
        description: 'GitHub announces AI-powered code review capabilities for all developers.',
        source: 'GitHub Blog',
        sourceUrl: 'https://github.blog',
        image: '🔍',
        summary: 'GitHub has launched an AI-powered code review feature that automatically analyzes pull requests for security issues, performance improvements, and best practice violations.'
    },
    {
        id: 8,
        title: 'TypeScript Usage Surges in 2024',
        date: 'September 25, 2024',
        category: 'Programming',
        description: 'TypeScript adoption among developers reaches all-time high.',
        source: 'Programming Today',
        sourceUrl: 'https://programmingtoday.com',
        image: '📘',
        summary: 'Recent developer surveys indicate that TypeScript adoption has grown by 45% year-over-year, with major tech companies making it their default choice for JavaScript projects.'
    },
    {
        id: 9,
        title: 'Web Performance Standards Updated',
        date: 'September 22, 2024',
        category: 'Web Development',
        description: 'W3C releases new performance benchmarks for modern web applications.',
        source: 'W3C News',
        sourceUrl: 'https://w3c.org',
        image: '⚙️',
        summary: 'The W3C has published updated performance standards for web applications, focusing on Core Web Vitals and introducing new metrics for measuring user experience quality.'
    },
    {
        id: 10,
        title: 'Linux Kernel Updates Security Protocols',
        date: 'September 19, 2024',
        category: 'Linux',
        description: 'Latest Linux kernel release includes major security improvements.',
        source: 'Linux Today',
        sourceUrl: 'https://linux.com',
        image: '🐧',
        summary: 'The latest Linux kernel release features enhanced memory protection, improved container security, and new vulnerability mitigation techniques to protect against emerging threats.'
    }
];
