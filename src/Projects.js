export const projects = [
    {
        sku: "About",
        title: "Hi, I'm Rob Quinn",
        subtitle: "Allow me to introduce myself",
        short: "A bit about me",
        icon: "",
        cover: "AboutMe.png",
        article: [
            {
                h: "Who are you?",
                p: "I'm a \"computery guy\" who loves programming, design, 3D, physics, geometry, mobile, UX, mechanical keyboards, and most importantly—making games!",
            },
            {
                p: "I got into programming by teaching myself and making my first game, Monster Roadkill Lite, which I published for iPhone way back in 2011. Since then, I self-published many more games for several different platforms and started my own company, Kyanite Games.",
            },
            {
                p: "I studied Software Engineering at Iowa State, during which I also participated in over 10 hackathons, and helped organize events for HackISU and Digital Women Code Camp. After graduating in 2018, I moved to Seattle to work on Rec Room.",
            },
            {
                h: "What are these projects?",
                p: "These are just a few of my favorite projects I have made for work, as an indie developer, for school, hackathons, or just for fun!",
            },
            {
                p: "This website itself is actually one of my projects, I made it using React and styled it taking inspiration from the iOS 11 App Store (which is fitting for my interest in iOS).",
            },
        ],
    },
    {
        sku: "RecRoom",
        title: "Rec Room",
        subtitle: "Online Universe",
        short: "Game Engineer at Rec Room",
        icon: "",
        cover: "Rec-1.jpg",
        article: [
            {
                h: "What is Rec Room?",
                p: "Rec Room is an online universe where you can hang out with your friends and play thousands of games like paintball, disc golf, and quests. Users can make custom \"Rooms\" and games of their own while playing together.",
            },
            {
                h: "",
                p: "I started at Rec Room in 2018 as a Game Engineer. At the time, the company was only 20 people so in the first few months I quickly got to work on just about every part of the app, from making new laser guns to radio voice communication to procedural geometry and the early prototype & ongoing work to bring Rec Room from VR-only to a cross platform game on flat screens like PC, PS4, and eventually iPhone and iPad.",
            },
            {
                img: "Rec-3.jpg",
                c: "One of my first tasks was adding radio-style voice communication for teammates in Rec Royale. Photo by user Cloud (with me on the right)"
            },
            {
                img: "bowling-Kiwi2020.jpg",
                c: "Bowling was my first project as lead developer, which included a lot of physics and networking in addition to the bowling pins/ball/scoring/turns and other interactions. Photo by user Kiwi2020"
            },
            {
                img: "Crescendo-fuzzyraven361.jpg",
                c: "Working on the Castlevania-inspired quest, \"Crescendo of the Blood Moon\", was super fun. I was responsible for balancing & implementing the quest's loot economy, programming traps in the dungeon, and making the whip snap objects up in the air so they land in your hand. Photo by user FuzzyRaven361"
            },
            {
                h: "",
                p: "By now, I have seen the company more than double in size as well as platforms. We also subdivided from one giant team (the whole company) into smaller teams, and I have comfortably settled into my role on the Player Experience team which focuses on cross-platform design/controls/interactions, mechanics/game feel, and platform-specific delights.",
            },
            {
                h: "Social Magic on the iPhone",
                p: "Besides developing Rec Room's controls, interactions, and UI to work as a cross platform game, my most significant series of projects have been focused on making the iPhone version of Rec Room a compelling product. Rec Room in VR just makes sense because of the way VR affords a physical presence, can be infinitely expressive, and makes for great social playmates. The early version of our flat-screen players didn't have nearly the same degrees of freedom to express themselves, so they came off as very robotic and umpleasant to be around if you were playing in VR. Given a fairly broad prompt to make flat-screen players better social playmates, I got to design and implement some really fun features that make expressing yourself on a phone much more delightful:",
            },
            {
                img: "Waving.gif",
                c: "Non-VR players can wave with full control over the motion, rhythm, and intensity."
            },
            {
                img: "DanceMode.gif",
                c: "Dance mode lets you do high-energy poses with your full body"
            },
            {
                img: "RRAnimationGraph.png",
                c: "I am very satisfied with the animation graph I designed & implemented to go with dancin' and wavin'. It is a 3D Delaunay graph where any x,y,z input will return a weighted blend of the four animation nodes in the surrounding tetrahedron. It will seamlessly blend along any path and extrapolate outside the graph for super smooth results."
            },
            {
                h: "iPhone + AR",
                p: "I had been pushing for AR features since before we were even on the iPhone, so when the time was right, I was totally ready to take on these projects.",
            },
            {
                h: "",
                p: "The first phase of AR on the phone was using the TrueDepth camera on the iPhone X to copy your facial expressions onto the Rec Room character, similar to Apple's Memoji. The faces in Rec Room use discrete sprites rather than blend shapes so I designed a heuristic to determine what expression you are trying to make and pick the best sprite. It also has fun features like animating your eye/mouth/head positions.",
            },
            {
                img: "ARSelfie.gif",
                c: "Face tracking while taking a selfie"
            },
            {
                h: "",
                p: "Next, we added the AR Room which lets you scan your space, decorate it with virtual props, and invite your friends to join you. This project was a joint effort with making the AR player controls and integrating the AR scan into Rec Room so other players could see a rough scan of your space.",
            },
            {
                img: "RROfficeAR.gif",
                c: "Bowling in the Rec Room office using AR. The table and room are real, the pins, ball, and Shawn are augmented. Shawn is in VR."
            },
            {
                img: "RRARAppleFeature.JPG",
                c: "Apple did a feature specifically on the AR features!"
            },
        ],
    },
    {
        sku: "CC",
        title: "Climber Crew",
        subtitle: "From hackathon to beyond",
        short: "Rock climbing adventure",
        icon: "",
        cover: "CC-newpromo.png",
        article: [
            {
                img: "CC-newpromo.png",
                c: "Climber Crew in 2019"
            },
            {
                h: "Origins",
                p: "I started Climber Crew at HackISU in Fall 2015 as \"Climbing Simulator\", where it was a crowd favorite and something I knew I had to continue. I have been working on it in my free time (what little there was between classes and now a full time game industry job) and will publish it \"when it's done\". Here are some reasons I'm proud of it and also why it is taking so long to make:",
                img: "CC-4.PNG",
                c: "From the first weekend of development"
            },
            {
                h: "Detailed, Nuanced Movement",
                p: "Smooth motion and floppy physics are at the core of Climber Crew, while also keeping the game accessible.",
            },
            {
                p: "Most physics games are either 1) just a hidden capsule player with a ragdoll being pulled around with it, or 2) raw and unassisted physics that are meant to be incredibly difficult and unforgiving. I too started out using simple invisible springs to pull the player through the air, but I decided there had to be a better solution that was physically accurate and nuanced, yet intentional and approachable.",
            },
            {
                p: "My latest solution is to use inverse kinematics to calculate how the climber's body should pose to reach its target, and then applies torques to each limb. Since all of the forces come from \"inside\" the climber's body, like actual muscles, it feels very realistic, but the inverse kinematics also allow for precise intent over where you place their hands.",
            },
            {
                h: "Simple Tested Controls",
                p: "The controls has been reduced to simple drag-and-drop anywhere on the screen. In fact, it is a very familiar movement to scrolling through a webpage, so mobile users should find it very natural.",
            },
            {
                h: "Multiplayer",
                p: "Race your friends up the column with split-screen multiplayer. You can also punch each other and see who stays on the longest.",
            },
            {
                h: "Lots of Art",
                p: "I'm making all the 3D models myself, which is fun but time consuming.",
            },
        ],
    },
    {
        sku: "DOGS",
        title: "Machine Learning \"First Steps\"",
        subtitle: "Made in 36 hours",
        short: "Using genetic algorithms",
        icon: "",
        cover: "DOGS-1.png",
        banner: {award: "1st Place", event: "HackISU Fall 2016"},
        article: [
            {
                h: "Machine Learning with Genetic Algorithms",
                p: "This project was made in one weekend at HackISU in Fall 2016 where it won first place. It simulates physics-based dogs that learn to walk using a genetic algorithm. The dogs have muscles that are powered by a sinewave with parameters for frequency, amplitude, offset, and center. By randomly mutating and combining the values, they figure out which values work best to walk forward. The best dog gets saved and is the parent of the next generation.",
                img: "AboutMe.png",
                c: "I lead the project, helping my teammates learn Unity for the first time, and worked with a bio pre-medical illustration student to determine the physicality and muscle range of the dogs"
            },
            {
                p: "",
                img: "DOGS-1.png",
                c: "Dogs running after ~200 generations"
            },
            {
                img: "DOGS-2.png",
                c: "Fitness scores over time, which is based on how far the dog walks, and how upright it is in the end. Lucky mutations result in sudden increases (for example, at gen 92)."
            },
        ],
    },
    {
        sku: "PV",
        title: "Pack Van",
        subtitle: "Endless Arcade Driving",
        short: "Collect packages and dodge cars",
        icon: "y",
        cover: "PV.png",
        article: [
            {
                h: "",
                p: "Go around town collecting packages in your van. But watch out for the cars that will try to stop you! See how many packages you can get before the cars get you!",
            },
            {
                img: "PV.png",
                c: "A fun twist on a classic arcade game"
            },
            {
                h: "",
                p: "Previously available on the App Store, Apple TV, and Google Play",
            },
            {
                p: "Credit to: Synty Studios for various art assets"
            },
        ],
    },
    {
        sku: "DI",
        title: "Dungeon Infinity",
        subtitle: "Dungeon Crawler",
        short: "Procedurally generated levels",
        icon: "y",
        cover: "DI.png",
        article: [
            {
                h: "",
                p: "Enter an infinite dungeon to find gold while avoiding traps and fighting monsters. Dungeons are randomly generated, so every game is a unique experience, and there are many rooms to explore and secrets to find.",
            },
            {
                img: "DI.png",
                c: "The spiders are my favorite part of Dungeon Infinity, they were fun to animate"
            },
            {
                h: "",
                p: "Previously available on the App Store.",
            },
        ],
    },
    {
        sku: "NSS",
        title: "Ninja Star Survival",
        subtitle: "Throw ninja stars",
        short: "A take on the 'tossing' genre",
        icon: "y",
        cover: "NSS.png",
        article: [
            {
                h: "",
                p: "You are trapped in a lab and a mob of angry robots is approaching! Defend yourself against the robot army using 1 of 12 powerful ninja throwing stars, each with its own unique ability.",
            },
            {
                img: "NSS.png",
                c: "That might leave a scratch"
            },
            {
                h: "",
                p: "Previously available on the App Store, Google Play, and Windows 10.",
            },
        ],
    },
    {
        sku: "MR",
        title: "Monster Roadkill",
        subtitle: "Zombies & Cars",
        short: "The start of the adventure",
        icon: "y",
        cover: "MR.png",
        article: [
            {
                h: "",
                p: "Monsters have infested the island and it is up to you to stop them! Drive one of 6 vehicles, equipped with missiles, a flamethrower, jet engine, or laser guns, or just hit them with your car. Monster Roadkill is an exciting action adventure driving game that combines zombies and cars and guns in a massive 3D environment.",
            },
            { img: "MR.png",
                c: "Get those zombies!"
            },
            {
                h: "",
                p: "This was the first app I ever published back in 2011. I first learned programming, 3D art, animation, publishing, and a bunch of other skills by making this game.",
            },
            {
                h: "",
                p: "Previously available on the App Store, Google Play, and the Mac App Store.",
            },
        ],
    },
    {
        sku: "BOT",
        title: "Block Robots",
        subtitle: "Made in 36 hours",
        short: "iPad app that teaches programming",
        icon: "",
        cover: "BOT-1.png",
        banner: {award: "1st Place", event: "HackISU Spring 2016"},
        article: [
            {
                h: "First Hackathon Win",
                p: "This project was made in one weekend for HackISU in Spring 2016 where it won first place. It is a game that teaches programming to kids (but is fun for all ages!). During demos a kid who was no more than 10 years old tried it out and loved it! His parents had a hard time getting him away from the iPad, so I consider this project a huge success.",
            },
            {
                h: "Build a Robot",
                p: "First you make a robot out of cube-shaped blocks. Kids love block building and crafting games so it was a great way to get them interested. Blocks include propellers, lights, and sensors that can be programmed.",
                img: "BOT-1.png",
                c: "Build a flying robot out of blocks"
            },
            {
                h: "Build the Code",
                p: "The program for the robot is also made of blocks which makes it easy to visualize. There are code blocks to run the propellers, do 'if' statements for sensors, loop, wait, and more. When you press play the robot runs the code and the code block that is currently running is highlighted so you can literally follow the code being run.",
                img: "BOT-2.png",
                c: "Program your robot using code blocks and watch it run"
            },
            {
                img: "BOT-3.png",
                c: "Just look at this happy robot fellow"
            },
        ],
    },
    {
        sku: "CAR",
        title: "C.AR",
        subtitle: "Made in 36 hours",
        short: "AR concept for self-driving and assisted vehicles",
        icon: "",
        cover: "CAR-1.png",
        article: [
            {
                h: "Augmented Reality Windshield",
                p: "cAR, made for HackISU Spring 2017, shows the potential of AR for cars. An overlay is projected up onto the windshield which highlights obstacles, signs, and paths that are gathered from a self-driving car's existing sensors. Self-driving cars could be safer if the person in the front seat can clearly see what the car sees and what it will do next, and if they need to intervene. This also has applications for assisting human drivers by showing them obstacles they might otherwise miss.",
                img: "CAR-1.png",
                c: "Projecting onto the windshield to show path (green) and obstacles (red)"
            },
            {
                h: "The Setup",
                p: "We used plexiglass to make a 'windshield' and a laptop running a 3D car simulation for what it would look like outside the window. A connected iPad shows an inverted and colorized view of the world, highlighting relevant objects in real time. The projection technique we used is known as Pepper's Ghost, and it projects the iPad onto the clear glass in a way that you can see the colors being projected and still see through it. It looks best in person but hopefully these images give an idea of what it is like.",
                img: "CAR-2.png",
                c: "View from over the glass - what it looks like without the projection"
            },
            {
                img: "CAR-3.png",
                c: "Another example highlighting the stop light and preparing to turn right"
            },
            {
                h: "Challenges",
                p: "Unlike glasses-style AR where the screen is a fixed position from the eye, people vary in height and can move around when they sit in a car seat, and this causes the overlay on the window to not line up with the real world. To fix this we added a webcam image tracking system with the webcam and anchored it to the person's shirt or hat, so when they move their head around then the overlay adjusts the perspective accordingly to keep everything in line.",
            },
        ],
    },
    {
        sku: "AROUND",
        title: "AR Building Navigation",
        subtitle: "Augmented Reality",
        short: "iPad AR concept for hospitals",
        icon: "",
        cover: "AROUND.jpeg",
        article: [
            {
                h: "Augmented Reality Navigation",
                p: "This project was made for CrimsonU internal hackathon. It is used to map out floors of buildings such as hospitals and give directions to a specific room or patient. Navigation is shown with a moving dotted line on the floor, which users can see through their iPad with the help of Apple's new (in beta at the time) ARKit. This project is designed to extend an existing product used for conducting surveys around the hospital, which is often done by volunteers who have limited knowledge of the building and could work much more efficiently with AR guided directions.",
                img: "AROUND.jpeg",
                c: "Guided directions to the next patient"
            },
            {
                h: "New Tech, New Problems to Solve",
                p: "Apple ARKit will be huge for AR due to the relatively low cost, already popular devices, and ease of use, but it is not without challenges. When the app starts the position and rotation of the world change, so it would have to be started in the exact same position and rotation. To fix this we use the compass from Apple Core Motion to align the world so it doesn't matter how we start and it adjusts automatically. Another challenge was how to make the map and navigation data. We had floor plans and tried measuring it out, but a better solution we implemented was a mapping tool so the whole floor can be mapped out on the iPad alone, exported, and reused later.",
            },
        ],
    },
    {
        sku: "GEO",
        title: "Mesh Triangulation and Point Location",
        subtitle: "Computational Geometry",
        short: "Processing and querying triangulation",
        icon: "",
        cover: "GEO-1.png",
        article: [
            {
                p: "Computational Geometry was one of my favorite classes. I really enjoy geometry, vector math, and mesh processing. This class had some of the most interesting algorithms and has earned a spot on my portfolio.",
            },
            {
                h: "Points to Polys to Triangles",
                p: "The goal of this assignment was to convert a point cloud into a Doubly Connected Edge List (DCEL) which represents a mesh using edges, points, and faces. First, the points are made into an outer hull which is a polygon with one face. Second, the polygon is made Y-monotone, meaning traveling counter-clockwise on the left side and clockwise on the right sides never has an edge that is directed up. If an edge is directed up, it needs to be sliced based on the stack of corner vertices (different slice behavior depending on normal, merge, split, start, and end vertices). Finally, the polygon is in Y-monotone chunks that are triangulated, with checks to preserve the manifold shape (again, based on vertex types). Now we have a fully triangulated DCEL. Triangulation is done in n log n time where the longest step is sorting.",
                img: "GEO-1.png",
                c: "A triangulated mesh"
            },
            {
                h: "Coding Extra Tools to Save Time Later",
                p: "To output our mesh, we were required to print a list of each vertex, edge, face, and their connected components. This takes quite a long time to draw out on paper and check the answer. To make my life easier, I wrote a .obj exporter, which would make a 3D file of my mesh and I could tell within a few seconds if it was correct. I am certain I saved many hours of drawing polygons out by hand by writing this tool, and I was the only student who had ever done this for the assignment. I also have far more confidence with my algorithm's accuracy because I could test significantly larger point clouds with ease, therefore testing more edge cases that only show up in uniquely shaped polygons with many points and hundreds of component references.",
                img: "GEO-2.png",
                c: "All components for ONE triangle printed in the terminal"
            },
            {
                h: "Point Location Data Structure",
                p: "The last part of this project was to query a coordinate and return what edge, face, or vertex the coordinate was located on. The data structure for querying points is a persistent binary tree. It is constructed by doing a planar sweep of edges, and makes a binary tree at the 'time' of that edge. Binary trees can have multiple entry points to the same sub-trees and get 'pruned' which reuses existing sub-trees from the previous binary tree, as long as the same sub-tree structure is still in the buffer. This persistence and reuse of sub-trees results in a smaller data structure of approximately n log n in size. A coordinate can be queried for the vertex, edge, or face that contains it in log n time by binary search. Queries are given 3D markers and exported with the .obj mesh.",
                img: "GEO-3.png",
                c: "Query coordinates on the mesh"
            },
        ],
    },
    {
        sku: "RR",
        title: "Realm Raiders",
        subtitle: "HoloLens Prototype",
        short: "Tower defense all around you",
        icon: "",
        cover: "RR-1.png",
        article: [
            {
                h: "Making Games for HoloLens",
                p: "Realm Raiders is a prototype for a Microsoft HoloLens game. It is a tower defense where the enemies are aliens that roll around the room. They come from another dimension so they can roll up the walls and onto the ceiling for a better path. The player gets turrets to set up around the room which can also be placed on walls and the ceiling. In addition to the code and learning a new platform, I also took this project as an opportunity to learn Autodesk Maya, with which I modeled and animated the rolly alien.",
                img: "RR-1.png",
                c: "My aliens boys roll out, unfold, and attack"
            },
            {
                h: "Technical Challenges",
                p: "The biggest challenge was definitely making paths for the aliens to walk on. No built-in navmesh tool was suitable here, especially for going on the ceiling. I made a mesh processor which combines room scan meshes and puts nodes at vertices with a somewhat uniform density, and from there they make a custom navigation mesh which the aliens can use just fine with a pathfinding algorithm.",
                img: "RR-2.png",
                c: "Aliens and turrets on the walls and ceiling"
            },
        ],
    },
    {
        sku: "REVERSI",
        title: "Reversi Ai",
        subtitle: "Artificial Intelligence",
        short: "Min-max algorithm",
        icon: "",
        cover: "REVERSI-1.png",
        article: [
            {
                h: "Unbeatable Ai (to me at least)",
                p: "This project was to make an Ai for the board game reversi. It uses a minimax algorithm which searches moves up to a certain depth, and picks the next move that minimizes the human and maximizes the Ai score, assuming the human takes their best move. I can beat the Ai at a depth of 3 or 4 but after 7 I don't stand a chance.",
            },
            {
                h: "Tracing its Steps",
                p: "I implemented the game board as a connected graph which evaluated the board's state in place, rather than allocating a new 2D array of the board's state at every step of the search. This made my Ai significantly faster than other implementations and allowed me to push the depth of the search further. As the minimax algorithm reaches the depth of its search, it comes back up and draws a line over the tile on the board. When it gets back to the top you can see the entire thought process and where certain branches were decided against while others continue to the top.",
                img: "REVERSI-2.png",
                c: "The tree representing all moves to a depth of 3, colored lines represent the best move of the subtree and tick size represents score difference"
            },
            {
                p: "The art assets for reversi were provided for the class."
            },
        ],
    },
    {
        sku: "ARPP",
        title: "AR Ping Pong",
        subtitle: "Using Apple ARKit",
        short: "Your iPhone is your paddle",
        icon: "",
        cover: "ARPP.jpeg",
        article: [
            {
                h: "It's Ping Pong, in AR",
                p: "I started this small project to use the fun new AR capabilities of the iPhone and iPad when ARKit was first released. There are some interesting UX considerations for this game, like how to reduce the amount of motion a player has to do so they can keep the view of the AR objects and not have to swing a $1000 device around.",
                img: "ARPP.jpeg",
                c: "Still early in development, but already a lot of fun"
            },
        ],
    },
    {
        sku: "MV",
        title: "Monument Valley",
        subtitle: "3D Modeling",
        short: "Impossible geometry - made possible",
        icon: "",
        cover: "MV-1.png",
        banner: {award: "1st Place", event: "Unity Community Art Challenge #4"},
        article: [
            {
                h: "Monument Valley Ornament",
                p: "Inspired by one of my favorite mobile games, I modeled this Monument Valley themed ornament for the Unity Community Art Challenge and got first place. It took many attempts to make the illusion convincing and not disfigured from other angles, but with some patience and focal length adjustments it turned out great. I also incorporated the Unity logo with the silver color and it fit perfectly.",
                img: "MV-1.png",
                c: "Render of the Unity themed model"
            },
            {
                h: "Physical Copy",
                p: "It's a simple model, but it's elegant and effective. The illusion even holds up in real life, I got it 3D printed and painted it to match.",
                img: "MV-2.jpg",
                c: "3D printed & painted"
            },
        ],
    },
    {
        sku: "ZEN",
        title: "Zenyatta Orb Necklace",
        subtitle: "3D Printing",
        short: "3D printed brass jewelry",
        icon: "",
        cover: "ZEN-1.JPG",
        article: [
            {
                h: "\"Ready for Transcendence\"",
                p: "This piece was inspired by Zenyatta, a hero from the game Overwatch. I modeled the orb with all of the engravings and designs found in the game, and ordered it 3D printed brass. I finished the necklace using rope, beads, and thread that matches the style of Zenyatta's outfit and sash.",
            },
            {
                img: "ZEN-1.JPG",
                c: "Close up of the brass orb"
            },
            {
                img: "ZEN-2.png",
                c: "Render of my 3D model"
            },
        ],
    },
    {
        sku: "",
        title: "",
        subtitle: "",
        short: "",
        icon: "",
        cover: "default.png",
        article: [
            {
                h: "",
                p: "",
                s: ""
            },
        ],
    },
];