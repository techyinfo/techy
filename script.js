// Data - Original Tutorials
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
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;Post 1&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
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

    // CSS Tutorials
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
    flex-direction: row; /* or column */
    justify-content: center; /* align along main axis */
    align-items: center; /* align along cross axis */
    gap: 20px; /* space between items */
}</code></pre>

            <h3>Flex Item Properties</h3>
            <p>Control individual flex items with flex-grow, flex-shrink, and flex-basis. The flex shorthand combines all three.</p>
            <pre><code>.flex-item {
    flex: 1 0 200px; /* grow shrink basis */
    align-self: flex-start; /* override container alignment */
}</code></pre>

            <h3>Common Flexbox Patterns</h3>
            <p>Use Flexbox for: navigation menus, card layouts, center content, equal-width columns, and responsive designs.</p>

            <h3>Flexbox vs Grid</h3>
            <p>Use Flexbox for one-dimensional layouts (rows or columns). Use Grid for two-dimensional layouts (rows and columns together).</p>
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
}

.animated-element {
    animation: slideIn 0.5s ease-out;
}</code></pre>

            <h3>Timing Functions</h3>
            <p>Control animation speed with timing functions: linear, ease, ease-in, ease-out, ease-in-out, or cubic-bezier for custom curves.</p>

            <h3>Performance Tips</h3>
            <p>Animate transform and opacity for best performance. Avoid animating expensive properties like width, height, or layout-affecting properties.</p>

            <h3>Animation Events</h3>
            <p>Use JavaScript events like animationstart, animationend, and animationiteration to respond to animation lifecycle events.</p>
        `
    },

    // JavaScript Tutorials
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
            <pre><code>// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With multiple statements
const calculate = (x, y) => {
    const sum = x + y;
    return sum * 2;
};</code></pre>

            <h3>Destructuring</h3>
            <p>Extract values from objects and arrays more concisely.</p>
            <pre><code>// Object destructuring
const person = { name: 'John', age: 30, city: 'NYC' };
const { name, age } = person;

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;

// Default values
const { name = 'Unknown', status = 'active' } = user;</code></pre>

            <h3>Template Literals</h3>
            <p>Use backticks for string interpolation and multi-line strings.</p>
            <pre><code>const name = 'Alice';
const greeting = \`Hello, \${name}! Welcome back.\`;

const multiLine = \`
    This is a
    multi-line
    string
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
}

class Dog extends Animal {
    speak() {
        console.log(\`\${this.name} barks\`);
    }
}</code></pre>

            <h3>Let and Const</h3>
            <p>Use let for block-scoped variables and const for constants that shouldn't be reassigned.</p>
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
            <p>Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.</p>
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
            <p>Async/await provides a cleaner syntax for working with promises, making asynchronous code look like synchronous code.</p>
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the async function
fetchData().then(data => console.log(data));</code></pre>

            <h3>Promise.all() and Promise.race()</h3>
            <p>Execute multiple promises concurrently and handle their results together.</p>
            <pre><code>// Wait for all promises to complete
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Race: return when first promise settles
Promise.race([promise1, promise2])
    .then(result => console.log(result));</code></pre>

            <h3>Error Handling</h3>
            <p>Always include try-catch blocks in async functions to handle errors gracefully.</p>

            <h3>Real-World Example</h3>
            <pre><code>async function fetchUserPosts(userId) {
    try {
        const user = await fetch(\`/api/users/\${userId}\`);
        const userData = await user.json();
        
        const posts = await fetch(\`/api/posts?userId=\${userId}\`);
        const postsData = await posts.json();
        
        return { user: userData, posts: postsData };
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}</code></pre>
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
            <pre><code>// By ID
const element = document.getElementById('myId');

// By class name
const elements = document.getElementsByClassName('myClass');

// Query selectors (modern approach)
const element = document.querySelector('.myClass');
const allElements = document.querySelectorAll('.myClass');</code></pre>

            <h3>Modifying Element Content</h3>
            <pre><code>// Text content
element.textContent = 'New text';

// HTML content
element.innerHTML = '&lt;p&gt;New HTML&lt;/p&gt;';

// Attributes
element.setAttribute('data-id', '123');
element.getAttribute('data-id');
element.removeAttribute('data-id');</code></pre>

            <h3>Styling Elements</h3>
            <pre><code>// Inline styles
element.style.color = 'red';
element.style.backgroundColor = 'blue';

// Classes
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');</code></pre>

            <h3>Creating and Removing Elements</h3>
            <pre><code>// Create element
const newElement = document.createElement('div');
newElement.textContent = 'Hello';

// Add to DOM
document.body.appendChild(newElement);

// Remove from DOM
element.remove();
parent.removeChild(child);</code></pre>

            <h3>Event Handling</h3>
            <pre><code>// Add event listener
element.addEventListener('click', (event) => {
    console.log('Clicked!');
});

// Remove event listener
element.removeEventListener('click', handlerFunction);</code></pre>
        `
    },

    // Python Tutorials
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
            <p>Python is a versatile, beginner-friendly programming language known for its clean syntax and powerful features. It's used in web development, data science, AI, and automation.</p>

            <h3>Variables and Data Types</h3>
            <pre><code># Variables
name = "Alice"
age = 30
height = 5.8
is_student = False

# Data types
numbers = [1, 2, 3, 4, 5]  # List
coordinates = (10, 20)  # Tuple
person = {"name": "Bob", "age": 25}  # Dictionary
colors = {"red", "blue", "green"}  # Set</code></pre>

            <h3>Control Flow</h3>
            <pre><code># If statements
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")

# Loops
for i in range(5):
    print(i)

while count > 0:
    print(count)
    count -= 1</code></pre>

            <h3>Functions</h3>
            <pre><code>def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

result = greet("Alice")
print(result)  # Output: Hello, Alice!</code></pre>

            <h3>String Operations</h3>
            <pre><code>text = "Python Programming"
print(text.lower())  # python programming
print(text.upper())  # PYTHON PROGRAMMING
print(text.replace("Python", "Java"))  # Java Programming
print(len(text))  # 18</code></pre>

            <h3>Lists and List Methods</h3>
            <pre><code>fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
fruits.remove("banana")
print(fruits)  # ["apple", "cherry", "orange"]

for fruit in fruits:
    print(fruit)</code></pre>
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
            <p>Classes are blueprints for creating objects. They encapsulate data (attributes) and behavior (methods).</p>
            <pre><code>class Dog:
    # Class variable
    species = "Canis familiaris"
    
    def __init__(self, name, age):
        # Instance variables
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"
    
    def birthday(self):
        self.age += 1

# Create objects
dog1 = Dog("Rex", 3)
dog2 = Dog("Buddy", 5)

print(dog1.bark())  # Rex says Woof!
dog1.birthday()</code></pre>

            <h3>Inheritance</h3>
            <p>Create specialized classes that inherit attributes and methods from parent classes.</p>
            <pre><code>class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return f"{self.name} makes a sound"

class Dog(Animal):
    def speak(self):
        return f"{self.name} barks"

class Cat(Animal):
    def speak(self):
        return f"{self.name} meows"

dog = Dog("Max")
cat = Cat("Whiskers")
print(dog.speak())  # Max barks
print(cat.speak())  # Whiskers meows</code></pre>

            <h3>Polymorphism</h3>
            <p>Different objects responding to the same method call in their own way.</p>
            <pre><code>animals = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]

for animal in animals:
    print(animal.speak())</code></pre>

            <h3>Encapsulation</h3>
            <p>Hide internal details using private attributes (prefix with underscore).</p>
            <pre><code>class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # Private attribute
    
    def deposit(self, amount):
        self._balance += amount
    
    def get_balance(self):
        return self._balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # 1500</code></pre>
        `
    },

    // C++ Tutorials
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
            <p>C++ is a powerful, compiled language that combines procedural, object-oriented, and generic programming paradigms. It's used for system software, games, and performance-critical applications.</p>

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
    // Integers
    int age = 25;
    long population = 7000000000;
    
    // Floating point
    float pi = 3.14f;
    double radius = 5.5;
    
    // Boolean
    bool isActive = true;
    
    // Character
    char letter = 'A';
    
    // String
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
            <pre><code>// If-else statements
if (age &gt;= 18) {
    cout &lt;&lt; "You are an adult" &lt;&lt; endl;
} else {
    cout &lt;&lt; "You are a minor" &lt;&lt; endl;
}

// Loops
for (int i = 0; i &lt; 5; i++) {
    cout &lt;&lt; i &lt;&lt; " ";
}

while (count &gt; 0) {
    cout &lt;&lt; count &lt;&lt; " ";
    count--;
}</code></pre>

            <h3>Arrays</h3>
            <pre><code>// Array declaration and initialization
int numbers[5] = {1, 2, 3, 4, 5};

// Access elements
cout &lt;&lt; numbers[0] &lt;&lt; endl;  // 1

// Modify elements
numbers[2] = 10;

// Array length
int size = sizeof(numbers) / sizeof(numbers[0]);</code></pre>
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
    // Constructor
    Car(string c, int s) : color(c), speed(s) {}
    
    // Methods
    void accelerate() {
        speed += 10;
    }
    
    void display() {
        cout &lt;&lt; "Color: " &lt;&lt; color &lt;&lt; ", Speed: " &lt;&lt; speed &lt;&lt; endl;
    }
};

int main() {
    Car myCar("Red", 50);
    myCar.accelerate();
    myCar.display();
    return 0;
}</code></pre>

            <h3>Inheritance</h3>
            <pre><code>class Vehicle {
protected:
    string brand;

public:
    Vehicle(string b) : brand(b) {}
    void info() {
        cout &lt;&lt; "Brand: " &lt;&lt; brand &lt;&lt; endl;
    }
};

class Car : public Vehicle {
private:
    int doors;

public:
    Car(string b, int d) : Vehicle(b), doors(d) {}
    void info() {
        Vehicle::info();
        cout &lt;&lt; "Doors: " &lt;&lt; doors &lt;&lt; endl;
    }
};</code></pre>

            <h3>Virtual Functions and Polymorphism</h3>
            <pre><code>class Shape {
public:
    virtual void draw() = 0;  // Pure virtual function
    virtual ~Shape() {}
};

class Circle : public Shape {
public:
    void draw() override {
        cout &lt;&lt; "Drawing Circle" &lt;&lt; endl;
    }
};

class Square : public Shape {
public:
    void draw() override {
        cout &lt;&lt; "Drawing Square" &lt;&lt; endl;
    }
};</code></pre>

            <h3>Pointers and References</h3>
            <pre><code>int main() {
    int x = 10;
    int* ptr = &x;  // Pointer
    int& ref = x;   // Reference
    
    cout &lt;&lt; *ptr &lt;&lt; endl;  // Dereference pointer
    cout &lt;&lt; ref &lt;&lt; endl;   // Reference
    
    ref = 20;
    cout &lt;&lt; x &lt;&lt; endl;  // 20 - reference modifies original
    
    return 0;
}</code></pre>
        `
    },

    // Git Tutorials
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
            <p>Git is a distributed version control system that tracks changes to your code over time. It allows multiple developers to collaborate efficiently and maintain a complete history of project changes.</p>

            <h3>Installing Git</h3>
            <p>Download Git from git-scm.com and follow the installation instructions for your operating system.</p>

            <h3>Initial Configuration</h3>
            <pre><code>git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global core.editor "vim"  # Set your preferred editor

# View configuration
git config --list</code></pre>

            <h3>Basic Git Commands</h3>
            <pre><code># Initialize a repository
git init

# Clone a repository
git clone https://github.com/user/repository.git

# Check status
git status

# Stage changes
git add filename.txt
git add .  # Add all changes

# Commit changes
git commit -m "Add new feature"

# View commit history
git log
git log --oneline</code></pre>

            <h3>Branches</h3>
            <pre><code># Create and switch to new branch
git checkout -b feature/new-feature

# List branches
git branch

# Switch to branch
git checkout main

# Merge branch
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature</code></pre>

            <h3>Undoing Changes</h3>
            <pre><code># Undo changes in working directory
git checkout filename.txt

# Undo staged changes
git reset HEAD filename.txt

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1</code></pre>
        `
    },

    // GitHub Tutorials
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
            <p>GitHub is a web-based platform built on Git that enables collaboration and provides tools for code review, issue tracking, and continuous integration.</p>

            <h3>Creating a Repository</h3>
            <p>Visit github.com, click "New" to create a repository. Initialize with README, .gitignore, and license as needed.</p>

            <h3>Forking and Cloning</h3>
            <pre><code># Fork a repository on GitHub (via web interface)
# Then clone YOUR fork
git clone https://github.com/YOUR-USERNAME/repository.git

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL-OWNER/repository.git

# Fetch updates from upstream
git fetch upstream
git merge upstream/main</code></pre>

            <h3>Pull Requests</h3>
            <p>Pull requests allow you to propose changes, discuss them, and review code before merging:</p>
            <pre><code># Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to your fork
git push origin feature/new-feature

# Create pull request on GitHub
# - Go to your repository
# - Click "New Pull Request"
# - Select base branch and compare branch
# - Add title and description
# - Submit pull request</code></pre>

            <h3>Code Review and Merging</h3>
            <p>Reviewers can comment on code, suggest changes, and approve or request modifications before merging.</p>

            <h3>Issues and Project Management</h3>
            <p>Use GitHub Issues to track bugs, feature requests, and tasks. Link issues to pull requests for better organization.</p>

            <h3>Collaboration Best Practices</h3>
            <p>Write clear commit messages, create descriptive pull requests, review code thoroughly, keep branches focused and up-to-date, and communicate in comments.</p>
        `
    },

    // Linux Tutorials
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
            <p>Linux uses a hierarchical file system starting from the root directory (/). Understanding the directory structure is crucial for efficient navigation and management.</p>

            <h3>Navigation Commands</h3>
            <pre><code># Print working directory
pwd

# Change directory
cd /home/user/documents
cd ..           # Go to parent directory
cd ~            # Go to home directory
cd -            # Go to previous directory

# List directory contents
ls              # List files
ls -l           # Long format with details
ls -la          # Include hidden files
ls -h           # Human-readable file sizes</code></pre>

            <h3>File Operations</h3>
            <pre><code># Create files and directories
touch filename.txt
mkdir new_directory
mkdir -p path/to/nested/directory

# Copy files and directories
cp source.txt destination.txt
cp -r source_dir/ destination_dir/

# Move and rename
mv old_name.txt new_name.txt
mv file.txt /path/to/destination/

# Remove files and directories
rm filename.txt
rm -r directory_name
rm -f force_remove.txt</code></pre>

            <h3>Viewing File Contents</h3>
            <pre><code># Display entire file
cat filename.txt

# Display with pagination
less filename.txt
more filename.txt

# Show first/last lines
head -n 10 filename.txt    # First 10 lines
tail -n 10 filename.txt    # Last 10 lines

# Search in file
grep "search_term" filename.txt</code></pre>

            <h3>File Permissions</h3>
            <pre><code># Change permissions (rwx: read, write, execute)
chmod 755 script.sh     # rwxr-xr-x
chmod u+x script.sh     # Add execute for user
chmod -R 755 directory  # Recursive

# Change owner
chown user:group filename.txt
sudo chown user:group filename.txt  # With sudo</code></pre>

            <h3>Useful Utilities</h3>
            <pre><code># Search for files
find /home -name "*.txt"

# Display file type
file filename.txt

# Count lines, words, characters
wc filename.txt

# Sort lines
sort filename.txt

# Remove duplicates
uniq filename.txt</code></pre>
        `
    },

    // Cybersecurity Tutorials
    {
        id: 16,
        category: 'cybersecurity',
        title: 'Web Security Essentials: Protecting Your Applications',
        badge: 'Cybersecurity',
        description: 'Learn fundamental web security principles and protect against common vulnerabilities.',
        difficulty: 'Intermediate',
        duration: '28 min read',
        content: `
            <h3>Common Web Vulnerabilities (OWASP Top 10)</h3>
            <p>Understanding the most critical security risks is essential for building secure applications.</p>

            <h3>SQL Injection</h3>
            <p>SQL injection occurs when an attacker inserts malicious SQL code into input fields.</p>
            <pre><code>// Vulnerable code
String query = "SELECT * FROM users WHERE username = '" + username + "'";

// Attack example
username = "' OR '1'='1"
// Resulting query: SELECT * FROM users WHERE username = '' OR '1'='1'

// Secure approach - Use parameterized queries
String query = "SELECT * FROM users WHERE username = ?";
PreparedStatement stmt = connection.prepareStatement(query);
stmt.setString(1, username);</code></pre>

            <h3>Cross-Site Scripting (XSS)</h3>
            <p>XSS attacks inject malicious scripts that execute in users' browsers.</p>
            <pre><code>// Vulnerable - directly outputting user input
echo "Welcome, " . $_GET['name'];

// Attack: Welcome, &lt;script&gt;alert('XSS')&lt;/script&gt;

// Secure - escape user input
echo "Welcome, " . htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8');</code></pre>

            <h3>Cross-Site Request Forgery (CSRF)</h3>
            <p>CSRF tricks authenticated users into performing unwanted actions.</p>
            <p>Prevention: Use CSRF tokens, verify origins, use SameSite cookies.</p>

            <h3>Password Security</h3>
            <pre><code>// Hash passwords securely
password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

// Verify password
bcrypt.checkpw(password.encode('utf-8'), stored_hash)

// Never store plain text passwords
// Use bcrypt, Argon2, or scrypt for hashing</code></pre>

            <h3>HTTPS and SSL/TLS</h3>
            <p>Always use HTTPS to encrypt data in transit. Implement HTTP Strict Transport Security (HSTS).</p>

            <h3>Authentication and Authorization</h3>
            <p>Implement proper authentication mechanisms, use multi-factor authentication (MFA), manage sessions securely, and enforce principle of least privilege.</p>

            <h3>Security Best Practices</h3>
            <p>Keep software updated, validate all input, use security headers, implement logging and monitoring, conduct regular security audits, and educate users about security.</p>
        `
    }
];

// Data - Tech News
const newsArticles = [
    {
        id: 1,
        title: 'Artificial Intelligence Shows Breakthrough in Medical Diagnostics',
        date: 'October 15, 2024',
        category: 'AI/ML',
        description: 'Latest developments in AI models demonstrate improved accuracy in detecting diseases early.',
        source: 'TechNews Daily',
        sourceUrl: '#',
        image: '🤖'
    },
    {
        id: 2,
        title: 'New JavaScript Framework Simplifies Web Development',
        date: 'October 12, 2024',
        category: 'Web Development',
        description: 'A new framework promises to reduce boilerplate code and improve developer experience.',
        source: 'Dev.to',
        sourceUrl: '#',
        image: '⚡'
    },
    {
        id: 3,
        title: 'Cybersecurity Experts Warn of New Vulnerabilities',
        date: 'October 10, 2024',
        category: 'Security',
        description: 'Critical vulnerabilities discovered in widely-used software libraries affect millions of users.',
        source: 'Security Weekly',
        sourceUrl: '#',
        image: '🔐'
    },
    {
        id: 4,
        title: 'Cloud Computing Market Reaches New Heights',
        date: 'October 8, 2024',
        category: 'Cloud',
        description: 'Enterprise adoption of cloud services continues to grow at an unprecedented rate.',
        source: 'Cloud Report',
        sourceUrl: '#',
        image: '☁️'
    },
    {
        id: 5,
        title: 'Python Remains Most Popular Programming Language',
        date: 'October 5, 2024',
        category: 'Programming',
        description: 'Annual survey shows Python maintaining its lead in developer preferences.',
        source: 'Stack Overflow',
        sourceUrl: '#',
        image: '🐍'
    },
    {
        id: 6,
        title: 'Quantum Computing Achieves New Milestone',
        date: 'October 1, 2024',
        category: 'Quantum',
        description: 'Research labs demonstrate quantum computer solving complex problems faster than classical systems.',
        source: 'Science Daily',
        sourceUrl: '#',
        image: '⚛️'
    }
];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-btn');
const tutorialsGrid = document.getElementById('tutorialsGrid');
const newsGrid = document.getElementById('newsGrid');
const tutorialModal = document.getElementById('tutorialModal');
const closeTutorial = document.getElementById('closeTutorial');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');
const loginBtn = document.getElementById('loginBtn');
const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

// Render tutorials
function renderTutorials(filter = 'all') {
    const filtered = filter === 'all' ? tutorials : tutorials.filter(t => t.category === filter);
    tutorialsGrid.innerHTML = filtered.map(tutorial => `
        <div class="tutorial-card" onclick="openTutorial(${tutorial.id})">
            <span class="tutorial-badge">${tutorial.badge}</span>
            <h3>${tutorial.title}</h3>
            <p>${tutorial.description}</p>
            <div class="tutorial-meta">
                <span>${tutorial.difficulty}</span>
                <span>${tutorial.duration}</span>
            </div>
        </div>
    `).join('');
}

// Render news
function renderNews() {
    newsGrid.innerHTML = newsArticles.map(article => `
        <div class="news-card">
            <div class="news-image">${article.image}</div>
            <div class="news-content">
                <span class="news-date">${article.date}</span>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.sourceUrl}" class="news-link">Read on ${article.source} →</a>
            </div>
        </div>
    `).join('');
}

// Open tutorial modal
function openTutorial(tutorialId) {
    const tutorial = tutorials.find(t => t.id === tutorialId);
    if (tutorial) {
        document.getElementById('modalCategory').textContent = tutorial.badge;
        document.getElementById('modalTitle').textContent = tutorial.title;
        document.getElementById('modalBody').innerHTML = tutorial.content;
        tutorialModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modals
closeTutorial.onclick = () => {
    tutorialModal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

closeLogin.onclick = () => {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

closeSignup.onclick = () => {
    signupModal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

closeSearch.onclick = () => {
    searchModal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Modal switching
loginBtn.onclick = () => {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

signupLink.onclick = (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
};

loginLink.onclick = (e) => {
    e.preventDefault();
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
};

// Filter tutorials
filterBtns.forEach(btn => {
    btn.onclick = () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTutorials(currentFilter);
    };
});

// Search functionality
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length === 0) return;

    const tutorialResults = tutorials.filter(t =>
        t.title.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query)
    );

    const newsResults = newsArticles.filter(n =>
        n.title.toLowerCase().includes(query) ||
        n.description.toLowerCase().includes(query) ||
        n.category.toLowerCase().includes(query)
    );

    const results = [
        ...tutorialResults.map(t => ({ ...t, type: 'tutorial' })),
        ...newsResults.map(n => ({ ...n, type: 'news' }))
    ];

    if (results.length === 0) {
        document.getElementById('searchResults').innerHTML = `
            <div class="no-results">
                <p>No results found for "${query}"</p>
                <p>Try searching with different keywords</p>
            </div>
        `;
    } else {
        document.getElementById('searchResults').innerHTML = results.map(item => `
            <div class="search-result-card" onclick="${item.type === 'tutorial' ? `openTutorial(${item.id})` : `window.open('${item.sourceUrl}')`}">
                <span class="search-result-type">${item.type === 'tutorial' ? item.badge : item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    searchModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

searchBtn.onclick = performSearch;
searchInput.onkeypress = (e) => {
    if (e.key === 'Enter') performSearch();
};

// Close modals when clicking outside
window.onclick = (event) => {
    if (event.target === tutorialModal) {
        tutorialModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (event.target === searchModal) {
        searchModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Navigation smooth scroll
navLinks.forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const target = link.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    };
});

// Form submission
document.querySelectorAll('form').forEach(form => {
    form.onsubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! Thank you for your interest.');
        form.reset();
        if (form.closest('.modal')) {
            form.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
});

// Initialize
renderTutorials();
renderNews();

console.log('Techy website loaded successfully! 🚀');
