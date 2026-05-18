export const projects = [
    {
        sku: "About",
        title: "Hi, I'm Rob Quinn",
        topic: "About Me",
        short: "Allow me to introduce myself",
        icon: "",
        cover: "aboutme.jpeg",
        article: [
            {
                h: "Who are you?",
                p: "I'm a \"computery guy\" who loves programming, design, 3D, physics, geometry, mobile, UX, mechanical keyboards, and most importantly\u2014making games!",
            },
            {
                h: "A little history",
                p: "I got into programming by teaching myself and making my first game, Monster Roadkill Lite, which I published for iPhone way back in 2011. Since then, I self-published many more games for several different platforms and started my own company, Kyanite Games, Inc.",
            },
            {
                p: "I studied Software Engineering at Iowa State University, during which I also participated in over 10 hackathons, and helped organize events for HackISU and Digital Women Code Camp. After graduating in 2018, I moved to Seattle to work at Rec Room (which was called Against Gravity at the time).",
            },
            {
                h: "What are these projects?",
                p: "These are just a few of my favorite projects I have made for work, as an indie developer, for school, hackathons / game jams, or just for fun!",
            },
            {
                p: "This website itself is actually one of my projects, I made it using React and styled it taking inspiration from the iOS 11 App Store (which is fitting for my interest in iOS).",
            },
        ],
    },
    {
        sku: "RR-2018",
        title: "Joining Rec Room",
        topic: "Online Universe",
        short: "Memories from the early days",
        icon: "",
        cover: "Rec-1.jpg",
        article: [
            {
                h: "What's Rec Room?",
                p: "Rec Room was an online universe where you can hang out with your friends and play thousands of games like paintball, disc golf, and quests. Users could make custom \"Rooms\" and games of their own while playing together.",
            },
            {
                h: "First few months",
                p: "I started at Rec Room in summer 2018 as a Game Engineer. At the time, the company was only 20 people so in the first few months I had the opportunity to work on just about every part of the app, from new laser guns, to radio voice communication, to bowling and dungeons and so much more. I also focused heavily on the early prototype & ongoing work to bring the Rec Room gameplay experience from VR-only to a fully cross-platform game on flat screens like PC, PS4, and eventually iPhone and iPad and many more platforms.",
            },
            {
                img: "Rec-3.jpg",
                c: "One of my first tasks was adding radio-style voice communication for teammates in Rec Royale. Photo by user Cloud (with me on the right)."
            },
            {
                img: "bowling-Kiwi2020.jpg",
                c: "Bowling was my first project as lead developer, which included a lot of physics and networking in addition to the bowling pins/ball/scoring/turns and other interactions. Photo by user Kiwi2020."
            },
            {
                img: "Crescendo-fuzzyraven361.jpg",
                c: "Working on the Castlevania-inspired quest, \"Crescendo of the Blood Moon,\" was super fun. I was responsible for balancing & implementing the quest's loot economy, programming traps in the dungeon, and making the whip snap objects up in the air so they land in your hand. Photo by user FuzzyRaven361."
            },
            {
                h: "Looking back",
                p: "Well, Rec Room has come to its end (closing and shutting down on June 1, 2026), but it has been an incredible 8 years, going from hire 20 to a coworker of 300, from 3 VR-exclusive platforms to over a dozen platforms, and having the opportunities & autonomy to work on a wide variety of things I am very passionate about. For a while, we got to build a community, and a place that was really meaningful to a lot of people, and that's pretty cool.",
            },
        ],
    },
    {
        sku: "RR-AR",
        title: "AR Experiments",
        topic: "Augmented Reality",
        short: "Using ARKit on iOS",
        icon: "",
        cover: "RRARAppleFeature-small.JPG",
        article: [
            {
                h: "iPhone + AR",
                p: "In the early days of Rec Room I also worked on several fun AR features for the iPhone. First was the ability to take selfies using ARKit, where the avatar would copy your real head position and facial expressions, similar to Apple's Memoji. Since Rec Room's faces use discrete sprites instead of rigged 3D models, I made a system to weigh all the facial parameters and determine the closest matching expression.",
                img: "ARSelfie.gif",
                c: "Face tracking while taking a selfie"
            },
            {
                h: "",
                p: "Next, we added the AR Room which lets you scan your space, decorate it with virtual props, and invite your friends to join you. This project was a combined effort to make the AR player controls and integrate the AR scan into Rec Room so other players could see an approximation of your space.",
                img: "RR-AR-office.gif",
                c: "Bowling in the Rec Room office using AR. The table and room are real, the pins, ball, and Shawn are augmented. Shawn is in VR."
            },
            {
                img: "RRARAppleFeature.JPG",
                c: "Apple featured Rec Room specifically for multiplayer AR!"
            },
        ],
    },
    {
        sku: "RR-Creation",
        title: "Creation Tools",
        topic: "Cross-Platform",
        short: "Tools to empower mobile creators",
        icon: "",
        cover: "RR-Pride-1.JPG",
        article: [
            {
                h: "Finding potential on mobile",
                p: "On my own time I've created several rooms in-game using our User-Generated-Content tools. It's a great way to get context on how it works, what it needs, and the connection to the rest of the ecosystem.",
            },
            {
                p: "Since Rec Room started out as a VR-only game, and most of the top creators were in VR, the majority of the creation experience was tailored for them and not a great fit for flat-screen platforms\u2014especially small mobile screens. The iPad is such a fun creative device to me, and by using it to create my own rooms I could find the limitations, identify changes to make it more viable, and then go implement changes I needed myself!",
            },
            {
                img: "RR-Pride-1.JPG",
                c: "Working on \"PRIDEfest\" on iPad. I created this room in 2020 as a way to celebrate Pride month when it could not happen in person due to the pandemic.",
            },
            {
                h: "Empowering mobile & Screens creation",
                p: "With all of the context and interest I had accumulated in mobile creation, it eventually became my full time job for a while!",
            },
            {
                p: "To start out, it needed several overhauls to get Screens creation closer to parity. First, I re-architected the creation code to be shared and work consistently on both VR and Screens. Second, I helped the team consolidate our menus from \"physical\" VR menus to cross-platform 2D UI, but also added the ability to tear off UI tabs into world space for advanced creators who preferred to work that way.",
            },
            {
                p: "Now it was time for fun features! The creation controls are normally like a first person game, but I worked on support for Screen players to zoom in and out and orbit around the world (like many 3D creation apps) to create faster or more precisely depending on what they need to do. On mobile, zoom and orbit use multitouch gestures which feel right at home.",
            },
            {
                p: "For mobile specifically, I added a bunch more features to make input faster and more natural, including direct tap/drag controls for all creation operations, and Apple Pencil support to run operations anywhere on screen, with pressure sensitivity.",
            },
            {
                h: "My Room showcase",
            },
            {
                img: "RR-Pride-2.jpeg",
                c: "The team liked my room and decided to use it to launch Pride avatar items in 2020 and 2021. Apple also featured Rec Room for Pride month using my room\u2014created entirely on iPad\u2014as key art!",
            },
            {
                img: "RR-Glass-1.JPG",
                c: "\"Glass Garden\", inspired by the Chihuly garden in Seattle, an artistic expansion of my virtual recreation of Seattle. Made on iPad.",
            },
            {
                img: "RR-Voronoi.gif",
                c: "\"Voronoi Lounge\" features a cool computational geometry concept - a dynamic Voronoi diagram made using only in-game tools! How is it possible? Here's my hint: Cones.",
            },
        ],
    },
    {
        sku: "RR-Social",
        title: "Social Magic on Mobile",
        topic: "Cross-Platform",
        short: "Delightful expression powered by computational geometry",
        icon: "",
        cover: "RR-waving-rc2.jpg",
        article: [
            {
                img: "RR-waving-rc.jpg",
                c: "Expressive waving is essential for new players to make social connections and retain in the app. We've proven it to have double-digit % impact by comparing to players who could not wave or instead had a pre-recorded wave animation like is typical in most games."
            },
            {
                h: "Bringing \"Social Magic\" through on mobile",
                p: "My main focus at Rec Room was always around the cross-platform controls, interactions, and UX, not just as a typical game, but also as a social sandbox.",
            },
            {
                p: "Rec Room in VR just made sense because of the way VR affords a physical presence, can be infinitely expressive, and is fun to interact with. The early version of our flat-screen players didn't have nearly the same degree of freedom to express themselves, so they came off as very robotic and unpleasant to be around to our VR audience.",
            },
            {
                p: "Given a fairly broad prompt to \"make flat-screen players better social playmates,\" I designed and implemented some really fun features that make expressing yourself on a phone, console, or PC much more delightful:",
            },
            {
                img: "Waving.gif",
                c: "Non-VR players can now express themselves with full control over the motion, rhythm, and intensity using analog inputs, rather than a single pre-recorded animation"
            },
            {
                img: "DanceMode.gif",
                c: "Dance mode lets players do high-energy poses with their entire body using the same expressive analog systems that put the player in control"
            },
            {
                h: "Will it Blend? Using Computational Geometry",
                p: "To achieve smooth blended 3D analog animations, I decided to implement a 3D Delaunay graph where any (x,y,z) input will return a Barycentric coordinate (weighted position) of the four animation nodes in the surrounding tetrahedron. It seamlessly blends along any path and can even extrapolate on inputs that are outside of the hull of the graph.",
            },
            {
                img: "RR-delaunay-graphs.JPEG",
                c: "Visualization of several wave/dance animation graphs, where each vertex is an animation pose, lines form the Delaunay tetrahedrons, and spheres show the circumsphere of each tetrahedron in which no other vertex lies."
            },
        ],
    },
    {
        sku: "RR-Vision",
        title: "Vision Pro",
        topic: "Apple",
        short: "WWDC23 keynote title",
        icon: "",
        cover: "VP.jpg",
        article: [
            {
                h: "Rec Room in the Apple Vision Pro reveal",
                p: "At the WWDC23 keynote, Apple unveiled the Vision Pro to the world. You might have noticed that Rec Room made an appearance, and I had the incredibly lucky and rare opportunity of working on this demo!",
                img: "RR-VP-1.png",
                c: "Look Gary, there I am!",
            },
            {
                p: "A few short clips of Rec Room running on the Vision Pro were also featured in Apple's video, \"Bring your Unity VR app to a fully immersive space.\"",
                img: "RR-VP-2.jpg",
                c: "Definitely an upgrade from Rec Room's old mitten hands",
                b: { text: "Apple: Bring your Unity VR app to a fully immersive space", link: "https://developer.apple.com/videos/play/wwdc2023/10093/" }
            },
            {
                p: "Images above from Apple",
            },
        ],
    },
    {
        sku: "CC",
        title: "Climbing Simulator",
        topic: "Adventure",
        short: "Rock climbing physics",
        icon: "",
        cover: "CC-newpromo.png",
        article: [
            {
                img: "CC-newpromo.png",
                c: "Updates from later on in 2019"
            },
            {
                h: "Origins",
                p: "I started this project called \"Climbing Simulator\" at HackISU in Fall 2015, where it was a crowd favorite and something fun I would continue to work on in my free time.",
                img: "CC-4.PNG",
                c: "From the first weekend of development"
            },
            {
                h: "Intuitive, familiar controls",
                p: "At the core of the gameplay are the simple yet nuanced drag-and-drop controls. All it takes is one touch anywhere on the screen, and you can precisely ease over to the next hold, or dynamically fling yourself to the finish.",
            },
            {
                p: "Swiping your way up the wall is a very similar motion to scrolling through an app or webpage, so mobile users should find it very natural and familiar.",
            },
            {
                h: "Balancing physics",
                p: "As a physics-based game, it should be fun and floppy, but I still wanted the game to be accessible. Most games in the genre are either:",
            },
            {
                p: "1) faked or decorative, like a ragdoll being pulled around while the player is actually just an invisible capsule",
            },
            {
                p: "2) or raw and unassisted physics which are meant to be incredibly difficult and unforgiving",
            },
            {
                p: "After several iterations, I managed to find an approach that maintains both of my goals of feeling truly and delightfully physical, without sacrificing usability for casual players.",
            },
            {
                p: "By using Inverse Kinematics, I calculate how the climber's body should pose to reach its intended target, then I apply torque to match that pose. Since all of the torque forces come from \"inside\" the climber's body, like actual muscles (as opposed to a giant invisible spring pulling the body), it feels very realistic while intuitively matching the player's intent.",
            },
            {
                h: "Multiplayer",
                p: "Split-screen multiplayer was a feature from early on, and it even works on iPad (where you can play side-by-side or head-to-head). I have started a number of multiplayer modes like racing, survival, and co-op.",
            },
        ],
    },
    {
        sku: "DOGS",
        title: "Machine Learning \"First Steps\"",
        topic: "Made in 36 hours",
        short: "Using genetic algorithms",
        icon: "",
        cover: "DOGS-1.png",
        banner: {award: "1st Place", event: "HackISU Fall 2016"},
        article: [
            {
                h: "Machine Learning with Genetic Algorithms",
                p: "This project was made in one weekend at HackISU in Fall 2016 where it won first place. It simulates physics-based dogs that learn to walk using a genetic algorithm. The dogs have muscles that are powered by a sinewave with parameters for frequency, amplitude, offset, and center. By randomly mutating and combining the values, they figure out which values work best to walk forward. The best dog gets saved and is the parent of the next generation.",
                img: "hackisuf165.jpg",
                c: "I lead the project, helping my teammates learn Unity for the first time, and worked with a bio pre-medical illustration student to determine the physicality and muscle range of the dogs"
            },
            {
                p: "",
                img: "DOGS-1.png",
                c: "Dogs running after ~200 generations"
            },
            {
                img: "DOGS-2.jpg",
                c: "Fitness scores over time, which is based on how far the dog walks, and how upright it is in the end. Lucky mutations result in sudden increases (for example, at gen 92)."
            },
        ],
    },
    {
        sku: "PV",
        title: "Pack Van",
        topic: "Arcade Racing",
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
        topic: "Action Adventure",
        short: "Procedurally generated levels",
        icon: "y",
        cover: "DI.jpg",
        article: [
            {
                h: "",
                p: "Enter an infinite dungeon to find gold while avoiding traps and fighting monsters. Dungeons are randomly generated, so every game is a unique experience, and there are many rooms to explore and secrets to find.",
            },
            {
                img: "DI.jpg",
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
        topic: "Action",
        short: "A take on the 'tossing' genre",
        icon: "y",
        cover: "NSS.jpg",
        article: [
            {
                h: "",
                p: "You are trapped in a lab and a mob of angry robots is approaching! Defend yourself against the robot army using 1 of 12 powerful ninja throwing stars, each with its own unique ability.",
            },
            {
                img: "NSS.jpg",
                c: "My take on the popular \"Paper Toss\" genre"
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
        topic: "Racing Adventure",
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
        topic: "Made in 36 hours",
        short: "iPad app that teaches programming",
        icon: "",
        cover: "BOT-1.png",
        banner: {award: "1st Place", event: "HackISU Spring 2016"},
        article: [
            {
                h: "First Hackathon win",
                p: "This project was made in one weekend for HackISU in Spring 2016 where it won first place. It is a game that teaches programming to kids (but is fun for all ages!). During demos a kid who was no more than 10 years old tried it out and loved it! His parents had a hard time getting him away from the iPad, so I consider this project a huge success.",
            },
            {
                h: "Build a robot",
                p: "First you make a robot out of cube-shaped blocks. Kids love block building and crafting games so it was a great way to get them interested. Blocks include propellers, lights, and sensors that can be programmed.",
                img: "BOT-1.png",
                c: "Build a flying robot out of blocks"
            },
            {
                h: "Build the code",
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
        topic: "Made in 36 hours",
        short: "AR concept for self-driving and assisted vehicles",
        icon: "",
        cover: "CAR-1.png",
        article: [
            {
                h: "Augmented Reality windshield",
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
        topic: "Augmented Reality",
        short: "iPad AR concept for hospitals",
        icon: "",
        cover: "AROUND.jpeg",
        article: [
            {
                h: "Augmented Reality navigation",
                p: "This project was made for CrimsonU internal hackathon. It is used to map out floors of buildings such as hospitals and give directions to a specific room or patient. Navigation is shown with a moving dotted line on the floor, which users can see through their iPad with the help of Apple's new (in beta at the time) ARKit. This project is designed to extend an existing product used for conducting surveys around the hospital, which is often done by volunteers who have limited knowledge of the building and could work much more efficiently with AR guided directions.",
                img: "AROUND.jpeg",
                c: "Guided directions to the next patient"
            },
            {
                h: "New tech, new problems to solve",
                p: "Apple ARKit will be huge for AR due to the relatively low cost, already popular devices, and ease of use, but it is not without challenges. When the app starts the position and rotation of the world change, so it would have to be started in the exact same position and rotation. To fix this we use the compass from Apple Core Motion to align the world so it doesn't matter how we start and it adjusts automatically. Another challenge was how to make the map and navigation data. We had floor plans and tried measuring it out, but a better solution we implemented was a mapping tool so the whole floor can be mapped out on the iPad alone, exported, and reused later.",
            },
        ],
    },
    {
        sku: "GEO",
        title: "Mesh Triangulation and Point Location",
        topic: "Computational Geometry",
        short: "Processing and querying triangulation",
        icon: "",
        cover: "GEO-1.png",
        article: [
            {
                p: "As one of my favorite topics, and for going above the requirements, I want to share this Computational Geometry class project.",
            },
            {
                h: "Points to polys to triangles",
                p: "The goal of this assignment was to convert a point cloud into a Doubly Connected Edge List (DCEL) which represents a mesh using edges, points, and faces. First, the points are made into an outer hull which is a polygon with one face. Second, the polygon is made Y-monotone, meaning traveling counter-clockwise on the left side and clockwise on the right sides never has an edge that is directed up. If an edge is directed up, it needs to be sliced based on the stack of corner vertices (different slice behavior depending on normal, merge, split, start, and end vertices). Finally, the polygon is in Y-monotone chunks that are triangulated, with checks to preserve the manifold shape (again, based on vertex types). Now we have a fully triangulated DCEL. Triangulation is done in n log n time where the longest step is sorting.",
                img: "GEO-1.png",
                c: "A triangulated mesh"
            },
            {
                h: "Extra validation tools",
                p: "To output our mesh, we were required to print a list of each vertex, edge, face, and their connected components. This takes quite a long time to draw out on paper and check the answer. To make my life easier, I wrote a .obj exporter, which would make a 3D file of my mesh and I could tell within a few seconds if it was correct. I am certain I saved many hours of drawing polygons out by hand by writing this tool, and I was the only student who had ever done this for the assignment. I also have far more confidence with my algorithm's accuracy because I could test significantly larger point clouds with ease, therefore testing more edge cases that only show up in uniquely shaped polygons with many points and hundreds of component references.",
                img: "GEO-2.png",
                c: "All components for ONE triangle printed in the terminal"
            },
            {
                h: "Point location data structure",
                p: "The last part of this project was to query a coordinate and return what edge, face, or vertex the coordinate was located on. The data structure for querying points is a persistent binary tree. It is constructed by doing a planar sweep of edges, and makes a binary tree at the 'time' of that edge. Binary trees can have multiple entry points to the same sub-trees and get 'pruned' which reuses existing sub-trees from the previous binary tree, as long as the same sub-tree structure is still in the buffer. This persistence and reuse of sub-trees results in a smaller data structure of approximately n log n in size. A coordinate can be queried for the vertex, edge, or face that contains it in log n time by binary search. Queries are given 3D markers and exported with the .obj mesh.",
                img: "GEO-3.png",
                c: "Query coordinates on the mesh"
            },
        ],
    },
    {
        sku: "RR",
        title: "Realm Raiders",
        topic: "HoloLens Prototype",
        short: "Tower defense all around you",
        icon: "",
        cover: "RR-1.png",
        article: [
            {
                h: "Making games for HoloLens",
                p: "Realm Raiders is a prototype for a Microsoft HoloLens game. It is a tower defense where the enemies are aliens that roll around the room. They come from another dimension so they can roll up the walls and onto the ceiling for a better path. The player gets turrets to set up around the room which can also be placed on walls and the ceiling. In addition to the code and learning a new platform, I also took this project as an opportunity to learn Autodesk Maya, with which I modeled and animated the rolly alien.",
                img: "RR-1.png",
                c: "My aliens boys roll out, unfold, and attack"
            },
            {
                h: "Technical challenges",
                p: "The biggest challenge was definitely making paths for the aliens to walk on. No built-in navmesh tool was suitable here, especially for going on the ceiling. I made a mesh processor which combines room scan meshes and puts nodes at vertices with a somewhat uniform density, and from there they make a custom navigation mesh which the aliens can use just fine with a pathfinding algorithm.",
                img: "RR-2.png",
                c: "Aliens and turrets on the walls and ceiling"
            },
        ],
    },
    {
        sku: "REVERSI",
        title: "Reversi Ai",
        topic: "Artificial Intelligence",
        short: "Min-max algorithm",
        icon: "",
        cover: "REVERSI-1.png",
        article: [
            {
                h: "Unbeatable Ai (to me at least)",
                p: "This project was to make an Ai for the board game reversi. It uses a minimax algorithm which searches moves up to a certain depth, and picks the next move that minimizes the human and maximizes the Ai score, assuming the human takes their best move. I can beat the Ai at a depth of 3 or 4 but after 7 I don't stand a chance.",
            },
            {
                h: "Tracing its steps",
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
        topic: "Using Apple ARKit",
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
        sku: "KEY",
        title: "Custom Mechanical Keyboards",
        topic: "Keyboards",
        short: "From design, to firmware, to PCB",
        icon: "",
        cover: "Valenciano-01.JPG",
        article: [
            {
                h: "Hardware hobby",
                p: "I started getting into mechanical keyboards in 2019, and really got invested during 2020 while working from home. Since then, I've gone from building to customizing to custom designing, from the case down to the PCB hardware and firmware.",
            },
            {
                h: "Custom firmware for productivity",
                p: "The biggest benefit I have found in this hobby (aside from just enjoyment) is the ability to write custom firmware, which without exaggeration was a real inflection point in boosting my productivity. As a Mac user who begrudgingly has to use Windows a lot, I made custom firmware using the QMK library that emulates all the Mac shortcuts on Windows (Cmd, task switcher, spotlight search, cursor shortcuts, emojis, etc.), so I no longer have to mentally context switch or have two sets of muscle memory between all my devices.",
            },
            {
                h: "\"Valenciano\" custom case",
                p: "The most intricate case I've designed, inspired by the work of Spanish architect, Santiago Calatrava. It is made of stacked layers of laser-cut Cerakoted brass and blue acrylic with puzzle-like interlocking panels. PCB is an OLKB Preonic.",
            },
            {
                img: "Valenciano-01.JPG",
                c: "My original architecture-inspired design"
            },
            {
                img: "Valenciano-02.JPG",
                c: "Bottom showing distinctive triangular structure"
            },
            {
                h: "Custom PCBA and CNC design",
                p: "At some point there's a peak of how much customizing one can do, and the only thing left is to wire a keyboard from scratch, down to each tiny electronic component. I learned how to use KiCAD and designed a PCB with an integrated Raspberry Pi and hotswap switch sockets, and got it manufactured by JLCPCB.",
            },
            {
                img: "PCBA-01.jpeg",
                c: "Close-up of the PCBA with Raspberry Pi integrated microcontroller"
            },
            {
                img: "orthotkl.jpeg",
                p: "Now to reveal the final product. The layout is a bit... unconventional (meant to look like a tenkeyless layout from a distance, but in a 30% ortholinear form factor). But most conventional keyboards exist already, so why not have some fun with it! I designed the case in Fusion 360 and got it CNC'd in aluminum. It has an integrated slot designed to hold an iPad mini.",
                c: "My completely custom keyboard! And yes, I can type on it!"
            },
        ],
    },
    {
        sku: "MV",
        title: "Monument Valley",
        topic: "3D Modeling",
        short: "Impossible geometry\u2014made possible",
        icon: "",
        cover: "MV-1.png",
        banner: {award: "1st Place", event: "Unity Community Art Challenge #4"},
        article: [
            {
                h: "Monument Valley ornament",
                p: "Inspired by one of my favorite mobile games, I modeled this Monument Valley themed ornament for the Unity Community Art Challenge and won first place. It took many attempts to make the illusion convincing and not disfigured from other angles, but with some iteration and using a long focal length it turned out great. I also incorporated the Unity logo with the silver color which fits perfectly.",
                img: "MV-1.png",
                c: "Render of the Unity themed model"
            },
            {
                h: "Physical copy",
                p: "It's a simple model, but it's elegant and effective. The illusion even holds up in real life, I got it 3D printed and painted it to match.",
                img: "MV-2.jpg",
                c: "3D printed & painted"
            },
        ],
    },
    {
        sku: "ZEN",
        title: "Zenyatta Orb Necklace",
        topic: "3D Printing",
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
        topic: "",
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