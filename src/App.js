import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

var projects = [
  {
    sku: "About",
    title: "Hi, I'm Rob Quinn",
    subtitle: "Allow me to introduce myself",
    short: "A bit about me",
    icon: "",
    cover: "AboutMe.png",
    article: [
      {
        h: "What's your thing?",
        p: "I'm a \"computery guy\" who loves working on UX, front-end, VR/AR, and of course, games. I got into programming by teaching myself and making my first game, Monster Roadkill Lite, which was published for iPhone way back in 2011. Since then, I self-published many more games and started my own company, Kyanite Games. In 2018 I graduated from Iowa State with a degree in Software Engineering and moved to Seattle to work on Rec Room.",
      },
      {
        h: "What are these projects?",
        p: "These are some of my favorite projects I have made for work, as an indie, for school/hackathons, or just for fun.",
      },
      {
        h: "Hold up, what is a hackathon? Sounds shady...",
        p: "\"Hack\" is synonymous with \"make\" in this context. It is an event where teams come together for a weekend to make a project from scratch. I have been to over 10 organized hackathons + game jams + startup weekends which is where I take time to prototype my biggest ideas, many projects in my portfolio are (or started as) hacks. I have also been involved with organizing, mentoring, and designing artwork for hackathons including HackISU and Digital Women Code Camp.",
      },
      {
        h: "Is your portfolio, like, part of your portfolio?",
        p: "I'm glad you asked! I made this website using React and did all the styling too using CSS3. Its design is inspired by iOS 11's new App Store, which is fitting for my projects because many are apps. This site is also optimized for Safari, Mobile Safari, and the unique screen shape of the new iPhone X.",
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
        p: "I started at Rec Room in 2018 as a Game Engineer. At the time, the company was only 20 people so in the first few months I quickly got to work on just about every part of the app, from making new laser guns to radio voice communication to procedural geometry and the early prototype & ongoing work to bring Rec Room from VR-only to a cross platform game on flat screens like PC and PS4.",
      },
      {
        img: "Rec-3.jpg"
      },
      {
        h: "",
        p: "By now, I have seen the company more than double in size as well as platforms. We also subdivided from one giant team (the whole company) into smaller teams, and I have comfortably settled into my role on the Player Experience team which focuses on cross-platform design/controls/interactions, mechanics/game feel, and platform-specific delights. Below are some of my most noteworthy projects (in chronological order).",
      },
    
      {
        img: "default.png",
        c: "Bowling was my first project as lead developer, which included a lot of physics and networking in addition to the bowling pins/ball/scoring/turns and other interactions you would expect."
      },
      {
        img: "default.png",
        c: "Working on the Castlevania-inspired quest, \"Crescendo of the Blood Moon\", was super fun. I was responsible for balancing & implementing the quest's loot economy, programming traps in the dungeon, and making the whip snap objects up in the air so they land in your hand."
      },
      {
        h: "Social Magic on the iPhone",
        p: "Besides developing Rec Room's controls, interactions, and UI to work as a cross platform game, my most significant series of projects have been focused on making the iPhone version of Rec Room a compelling product. Rec Room in VR just makes sense because of the way VR affords a physical presence, can be infinitely expressive, and makes for great social playmates. The early version of our flat screen players didn't have nearly the same degrees of freedom to express themselves, so they came off as very robotic and umpleasant to be around if you were playing in VR. Given a fairly broad prompt to make flat screen players better social playmates, I got to design and implement some really fun features that make expressing yourself on a phone much more delightful:",
      },
      {
        img: "default.png",
        c: "Non-VR players can wave with full control over the motion, rhythm, and intensity."
      },
      {
        img: "default.png",
        c: "Dance mode lets you do high-energy poses with your full body"
      },
      {
        img: "default.png",
        c: "I am very proud of the animation graph I designed to go with dancin' and wavin'. It is a 3D Delaunay graph where any x,y,z input will return a weighted blend of the four animation nodes in the surrounding tetrahedron. It will seamlessly blend along any path and extrapolate outside the graph for super smooth results."
      },
      {
        h: "iPhone + AR",
        p: "I had been pushing for AR features since before we were even on the iPhone, so when the time was right, I was totally ready to take on these projects.",
      },
      {
        img: "default.png",
        c: "The first phase of AR on the phone was using the TrueDepth camera on the iPhone X to copy your facial expressions onto the Rec Room character, similar to Apple's Memoji. The faces in Rec Room use discrete sprites rather than blend shapes so I designed a heuristic to determine what expression you are trying to make and pick the best sprite. It also has fun features like animating your eye/mouth/head positions."
      },
      {
        img: "default.png",
        c: "Next, we added the AR Room which lets you scan your space, decorate it with virtual props, and invite your friends to join you. This project was a joint effort with making the AR player controls and integrating the AR scan into Rec Room so other players could get an idea of your space. LiDAR might be useful to make the space more readable ;)"
      },
      {
        h: "Company Info",
        b: {text: "Rec Room", link: "https://www.recroom.com/"}
      },
      {
        h: "Community",
        b: {text: "Rec Net", link: "https://www.rec.net/"}
      },
    ],
  },
  {
    sku: "CC",
    title: "Climber Crew",
    subtitle: "4+ years in the making",
    short: "Rock Climbing Adventure",
    icon: "",
    cover: "CC-1.png",
    article: [
      {
        img: "CC-1.png",
        c: "A recent screenshot of Column Climbers. Follow me on Twitter for the most up-to-date content."
      },
      {
        h: "Going Up",
        p: "I started Column Climbers at HackISU in Fall 2015, where it was a crowd favorite and something I knew I had to continue. I have been working on it in my free time since then and will publish it \"when it's done\". Here are some reasons I'm proud of it and also why it is taking so long to make:",
        img: "CC-4.PNG",
        c: "From the first weekend of development"
      },
      {
        h: "Detailed, Nuanced Movement",
        p: "Smooth motion and floppy physics are at the core of Column Climbers, and it is a fine line between having responsive movement and having the characters be jittery and gross. I really applied my physics skills here to make custom spring and drag forces and learned a lot along the way.",
      },
      {
        h: "Simple Tested Controls",
        p: "The controls has been reduced to simple swipes anywhere on the screen. In fact, it is the same movement you use to scroll through a webpage so mobile users should find it very natural.",
      },
      {
        h: "Easy to Learn, Fun to Master",
        p: "The game is designed to help out new players and give advanced players a challenge. When you touch the screen it shows a hint of where you should drag the hand so you can simply line it up and release. Advanced players will learn to swing and pull to jump great distances, something you will need as the wall gets faster and more chaotic.",
        img: "CC-2.PNG",
        c: "Drag and drop hands and feet on the colorful rocks"
      },
      {
        h: "Multiplayer",
        p: "Race your friends up the column with split-screen multiplayer. You can also punch each other and see who stays on the longest.",
        img: "CC-3.PNG",
        c: "Multiplayer!"
      },
      {
        h: "Procedural Generation",
        p: "The column is all procedurally generated as you go, from the shape of the rock formation to the shape and placement of the hand holds.",
      },
      {
        h: "Lots of Art",
        p: "I'm making all the 3D models myself, which is fun but time consuming. A year in to the project I decided to switch to Autodesk Maya for modeling so I had a bit of a learning curve but now is a regular part of my workflow.",
      },
    ],
  },
  {
    sku: "DOGS",
    title: "Machine Learning \"First Steps\"",
    subtitle: "Physical Locomotion",
    short: "Using Genetic Algorithms",
    icon: "",
    cover: "DOGS-1.png",
    banner: {award: "1st Place", event: "HackISU Fall 2016"},
    article: [
      {
        h: "",
        p: "This project started at HackISU in Fall 2016 where it won first place. In one weekend, my team made physics based dogs learn to walk using a genetic algorithm. The dogs have muscles that are powered by a sinewave with parameters for frequency, amplitude, offset, and center. By randomly modifying the values, they figure out which values work best to walk forward. The best dog gets saved and is the parent of the next generation. I lead the project, helping my teammates learn Unity for the first time, and working with a bio pre-medical illustration student who determined the shape and muscle range of the dogs. The team is pictured in the first section of my portfolio.",
        img: "DOGS-1.png",
        c: "Dogs running after ~200 generations"
      },
      {
        img: "DOGS-2.png",
        c: "Fitness scores over time. Lucky mutations result in sudden increases (for example, at gen 92)."
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
        img: "PV.png",
        c: "A fun twist on a classic arcade game"
      },
      {
        h: "",
        p: "Previously available on the App Store, Apple TV, and Google Play",
      },
      {
        h: "Due Credit",
        p: "Pack Van uses art assets made by Synty Studios."
      },
    ],
  },
  {
    sku: "DI",
    title: "Dungeon Infinity",
    subtitle: "Dungeon Crawler",
    short: "Procedurally Generated Levels",
    icon: "y",
    cover: "DI.png",
    article: [
      {
        h: "",
        p: "Enter an infinite dungeon to find gold while avoiding traps and fighting monsters. Dungeons are randomly generated, so every game is a unique experience, and there are many rooms to explore and secrets to find.",
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
        img: "MR.png",
        c: "Get those zombies!"
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
    subtitle: "Educational and fun",
    short: "iPad App that Teaches Programming",
    icon: "",
    cover: "BOT-1.png",
    banner: {award: "1st Place", event: "HackISU Spring 2016"},
    article: [
      {
        h: "First Hackathon Win",
        p: "This project was made in a weekend for HackISU in Spring 2016 where it won first place. It is a game that teaches programming to kids (but is fun for all ages!). During demos a kid who was no more than 10 years old tried it out and loved it! His parents had a hard time getting him away from the iPad, so I consider this project a huge success.",
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
    title: "cAR",
    subtitle: "Augmented Reality Glass",
    short: "AR Concept for Self-Driving and Assisted Vehicles",
    icon: "",
    cover: "CAR-1.png",
    article: [
      {
        h: "Augmentd Reality Windshield",
        p: "cAR, made for HackISU Spring 2017, shows the potential of AR for cars. An overlay is projeted up onto the windshield which highlights obstacles, signs, and paths that are gathered from a self-driving car's existing sensors. Self-driving cars could feel safer if the person in the front seat can clearly see what the car sees and what it will do next. This also has applications for assisting human drivers by showing them obstacles they might otherwise miss.",
        img: "CAR-1.png",
        c: "Projecting onto the windshield to show path (green) and obstacles (red)"
      },
      {
        h: "The Setup",
        p: "We used plexiglass to make a 'windshield' and a laptop running a 3D car simulation for what it would look like outside the window. An iPad was connected to the computer as a second monitor using Duet Display, and shows an inverted and colorized view of the world, highlighing relevant objects in real time (not pre-recorded). The projection technique we used is known as Pepper's Ghost, and it projects the iPad onto the clear glass in a way that you can see the colors being projected and still see through it. It looks best in person but hopefully these images give an idea of what it is like.",
        img: "CAR-2.png",
        c: "View from over the glass - what it looks like without the projection"
      },
      {
        img: "CAR-3.png",
        c: "Another example highlighting the stop light and preparing to turn right"
      },
      {
        h: "Challenges",
        p: "Unlike glasses-style AR where the screen is a fixed position from the eye, people vary in height and can move around when they sit in a car seat, and this causes the overlay on the window to not line up with the real world. To fix this we added a simple color tracking system with the webcam and anchored it to the person's shirt or hat, so when they move their head around then the overlay adjusts the perspective accordingly to keep everything in line.",
      },
    ],
  },
  {
    sku: "AROUND",
    title: "AR Building Navigation",
    subtitle: "Indoor Pathfinding",
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
    short: "Processing and Querying Triangulation",
    icon: "",
    cover: "GEO-1.png",
    article: [
      {
        h: "Love Me Some Geometry",
        p: "Computational Geometry was one of my favorite classes. I really enjoy geometry, vector math, and mesh processing. This class had some of the most interesting algorithms and has earned a spot on my portfolio. This summary is a bit more technical than the others.",
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
        c: "All components for ONE triangle."
      },
      {
        h: "Point Location Data Structure",
        p: "The last part of this project was to query a coordinate and return what edge, face, or vertex the coordinate was located on. The data strucure for querying points is a persistent binary tree. It is constructed by doing a planar sweep of edges, and makes a binary tree at the 'time' of that edge. Binary trees can have multiple entry points to the same sub-trees and get 'pruned' which reuses existing sub-trees from the previous binary tree, as long as the same sub-tree structure is still in the buffer. This persistence and reuse of sub-trees results in a smaller data structure of approximately n log n in size. A coordinate can be queried for the vertex, edge, or face that contains it in log n time by binary search. Queries are given 3D markers and exported with the .obj mesh.",
        img: "GEO-3.png",
        c: "Query coordinates on the mesh"
      },
    ],
  },
  {
    sku: "RR",
    title: "Realm Raiders",
    subtitle: "Prototype for HoloLens",
    short: "Tower Defense All Around You",
    icon: "",
    cover: "RR-1.png",
    article: [
      {
        h: "Making Games for HoloLens",
        p: "Realm Raiders is a prototype for a Microsoft HoloLens game. It is a tower defense where the enemies are aliens that roll around the room. They come from another dimension so they can roll up the walls and onto the ceiling for a better path. The player gets turrets to set up around the room which can also be placed on walls and the ceiling. I took this project as an opportunity to learn Autodesk Maya, with which I modeled and animated the rolly alien.",
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
    subtitle: "Good luck",
    short: "Always n Steps Ahead",
    icon: "",
    cover: "REVERSI-1.png",
    article: [
      {
        h: "Unbeatable Ai",
        p: "This project was to make an Ai for the board game reversi. It uses a minimax algorithm which searches moves up to a certain depth, and picks the next move that minimizes the human and maximizes the Ai score, assuming the human takes their best move. I can beat the Ai at a depth of 3 or 4 but after 7 I don't stand a chance (but I had never played reversi before this project, give me a break).",
      },
      {
        h: "Tracing its Steps",
        p: "I implemented the game board as a connected graph which evaluated the board's state in place, rather than creating a new 2D array of the board's state at every step of the search. This made my Ai significantly faster than other implementations and allowed me to push the depth of the search further. As the minimax algorithm reaches the depth of its search, it comes back up and draws a line over the tile on the board. When it gets back to the top you can see the entire thought process and where certain branches were decided against while others continue to the top.",
        img: "REVERSI-2.png",
        c: "The tree representing all moves to a depth of 3, colored lines represent the best move of the subtree and tick size represents score difference"
      },
      {
        h: "Due Credit",
        p: "The art assets for reversi were provided for the class."
      },
    ],
  },
  {
    sku: "ARPP",
    title: "AR Ping Pong",
    subtitle: "Using Apple ARKit",
    short: "Your iPhone is Your Paddle",
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
    sku: "IRON",
    title: "VR Game",
    subtitle: "Coming in May",
    short: "Class Project Using Vive",
    icon: "",
    cover: "default.png",
    article: [
      {
        h: "I'm Making a Vive Game",
        p: "More information coming in the winter, but it has motion based spell casting and high-tech vampires. Get excited.",
        s: ""
      },
    ],
  },
  {
    sku: "MV",
    title: "Monument Valley",
    subtitle: "Impossible Geometry",
    short: "Fan Art + Unity",
    icon: "",
    cover: "MV-1.png",
    banner: {award: "1st Place", event: "Unity Community Art Challenge 4"},
    article: [
      {
        h: "Impossible Made Possible",
        p: "Inspired by one of my favorite games, I modeled this Monument Valley themed ornament for the Unity Comminity Art Challenge and got first place. It took many attempts to make the illusion convincing and not disfigured from other angles, but with some patience and focal length adjustments it turned out great. I even incorporated the Unity logo with the silver color and it fit perfectly.",
        img: "MV-1.png",
        c: "Render from Sketchfab"
      },
      {
        h: "Physical Copy",
        p: "It's a simple model, but it's elegant and effective. The illusion even holds up in real life, I got it 3D printed and painted to match.",
        img: "MV-2.jpg",
        c: "3D printed & painted"
      },
    ],
  },
  {
    sku: "ZEN",
    title: "Zenyatta Orb Necklace",
    subtitle: "3D Printed Fan art",
    short: "Mixed Medium Art",
    icon: "",
    cover: "ZEN-1.JPG",
    article: [
      {
        h: "\"Ready for Transcendence\"",
        p: "This piece was inspired by Zenyatta, a hero from the game Overwatch. The orb was meticulously modeled with all of the engravings and designs found in the game, and the topology is impeccable to ensure the highest quality print. I ordered it 3D printed in brass and assembled the necklace using rope, beads, and thread that matches the style of Zenyatta's outfit and sash.",
      },
      {
        h: "Something Different",
        p: "This project took many hours but it was 110% worth it, and it was fun to do a \"full stack\" craft that started as a computer model and ended as a piece of jewelery. Just like with different coding frameworks, I like trying new mediums and I learn pretty quickly.",
        img: "ZEN-1.JPG",
        c: "Close up of the brass orb"
      },
      {
        img: "ZEN-2.png",
        c: "3D render"
      },
      {
        img: "ZEN-3.jpg",
        c: "Bonus pic: Overwatch watercolor. Rare for me to do an entirely non-digital piece but this one was a lot of fun and I like how it turned out."
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


function Link(props){
  if(props.address == null)
    return null;
  if(props.store === "googleplay"){
    return(
      <a className="foreground" href={props.address}><img className="badge prepadded" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
    );
  }
  else if(props.store === "microsoft"){
    return(
      <a className="foreground" href={props.address}><img className="badge foreground" alt="Get it from Microsoft" src="https://assets.windowsphone.com/85864462-9c82-451e-9355-a3d5f874397a/English_get-it-from-MS_InvariantCulture_Default.png"/></a>
    );
  }
  else if(props.store === "appstore"){
    return(
      <a className="foreground" href={props.address}><img className="badge foreground" alt="" src={require("./images/badges/Download_on_the_App_Store_Badge_US-UK_135x40.svg")}/></a>
    );
  }
  else{
    return(
      <a className="foreground" className="badge alt foreground" href={props.address}>{props.alt}</a>
    );
  }
}

function closeCard(){
  $(".active").each(function(index){
    $(this).removeClass("active");
    $("body").removeClass("noscroll");
  });
}
$(function(){
  $(".card").click(function(){
      closeCard();
      $(this).next(".content").addClass("active");

      var cardTitle = ''+$(this).find('.cover').find('h3').text();
      window.ga('send','event','card','click', cardTitle);

      $("body").addClass("noscroll");
      $("#backdrop").addClass("active");
  });
  $(".button").click(function(){
      var buttonName = ''+$(this).text();
      console.log(buttonName);
      window.ga('send','event','button','click', buttonName);
  });
  $(".badge:not(.alt)").click(function(){
      var badgeName = 'Store Badge: '+$(this).parent().prop('href');
      window.ga('send','event','badge','click', badgeName);
  });
});

function Button(props){
  return(
    <div className="buttonbox">
    <a className={"button foreground shadow3D " + (props.Twitter ? "twitter" : "")} href={props.link}>{props.text}</a>
    </div>
  );
}

function Card(props){
  var p = projects.find(function(proj){return proj.sku === props.sku; });
  return(
    <div className="cardcontainer">
        <div className="card foreground rounded16 shadow3D lightborder">
          {p.banner && <Banner banner={p.banner}/>}
          <div className="roundedmask rounded16">
            <Cover project={p}/>
          </div>
        </div>
        <Content project={p}/>
    </div>
  );
}

function Banner(props){
  if(props.small)return(
    <div className="banner">
      <h3>{props.banner.award}</h3>
      <h4>{props.banner.event}</h4>
    </div>
  );
  return(
    <div className="banner shadow3D static">
      <h3>{props.banner.award}</h3>
      <h4>{props.banner.event}</h4>
      <div className="banner-left"></div>
      <div className="banner-right"></div>
    </div>
  );
}

function Cover(props){
  var p = props.project;
  return(
    <div className="cover">
      <img className="thumb" alt="" src={require("./images/products/screens/" + p.cover)}/>
      <div className="cover-details-container">
        <h4>{p.subtitle}</h4>
        <h3>{p.title}</h3>
        {p.icon && <img className="app-icon lightborder" alt="" src={require("./images/products/icons/" + p.sku + ".png")}/>}
        <h5>{p.short}</h5>
      </div>
    </div>
  );
}

function Content(props){
  var p = props.project;
  return(
    <div className="content rounded16-top lightborder midground shadow3D static">
      <div className="close" onClick={closeCard}></div>
      <div className="scroll-content">
        <Cover project={p}/>
        {p.banner && <Banner banner={p.banner} small/>}
        <Article list={p.article}/>
        <div className="links">
          <Link store="appstore" address={p.appstore}/>
          <Link store="googleplay" address={p.googleplay}/>
          <Link store="microsoft" address={p.microsoft}/>
          <Link alt={p.textlink} address={p.textaddress}/>
        </div>
      </div>
    </div>
  );
}

function Article(props){
  if(!props.list)
    return <div></div>;
  const content = props.list.map((section) =>
    <div key={props.list.indexOf(section)}>
      {section.h && <p className="paragraph-title">{section.h}</p>}
      {section.p && <p>{section.p}</p>}
      {section.img && <div className="image-with-caption">
        <div className="screenshot"><img alt="" src={require("./images/products/screens/"+section.img)}/></div>
        <p><i>{section.c}</i></p>
      </div>}
      {section.b && <div className="buttonbox"><a className="button foreground shadow3D" href={section.b.link}>{section.b.text}</a></div>}
    </div>
  );
  return <div>{content}</div>;
}

function Projects(){
  return(
    <div className="bodymask">
      <div className="body">
        <section>
          <h4 className="section-subtitle">A collection of my best work</h4>
          <h3 className="section-title">Featured</h3>
        </section>
        <div className="cards">
          <Card sku="About"/>
          <Card sku="CC"/>
          <Card sku="RecRoom"/>
        </div>

        <section>
          <h4 className="section-subtitle">Made within hours</h4>
          <h3 className="section-title">Hackathons</h3>
        </section>
        <div className="cards">
          <Card sku="DOGS"/>
          <Card sku="CAR"/>
          <Card sku="AROUND"/>
          <Card sku="BOT"/>
        </div>

        <section>
          <h4 className="section-subtitle">I studied software engineering</h4>
          <h3 className="section-title">Class Projects</h3>
        </section>
        <div className="cards">
          <Card sku="GEO"/>
          <Card sku="RR"/>
          <Card sku="REVERSI"/>
        </div>

        <section>
          <h4 className="section-subtitle">Published apps</h4>
          <h3 className="section-title">by Kyanite Games</h3>
        </section>
        <div className="cards">
          <Card sku="PV"/>
          <Card sku="DI"/>
          <Card sku="NSS"/>
          <Card sku="MR"/>
        </div>

        <section>
          <h4 className="section-subtitle">Art and stuff</h4>
          <h3 className="section-title">Hobby Projects</h3>
        </section>
        <div className="cards">
          <Card sku="MV"/>
          <Card sku="ZEN"/>
        </div>

        <section>
          <h4 className="section-subtitle">Say hi, ask me anything</h4>
          <h3 className="section-title">Contact</h3>
        </section>
        <div className="contactlinks">
          <Button text="Hello" link="mailto:rob@angle.fish"/>
          <Button Twitter="y" text="RobQuiiinn" link="https://twitter.com/RobQuiiinn"/>
        </div>
      </div>
    </div>
  );
}

function Header(){ 
  return(
    <header className="foreground">
      <div className="body">
        <img className="logo" alt="" src={require("./images/branding/logo.png")}/>
        <span className="portfolio-title">Made by Rob Q</span>
      </div>
    </header>
  );
}

function currentYear(){
  var currentYear = new Date().getFullYear();
  return currentYear > 2018 ? currentYear : 2018;
}

function Footer(){
  return(
    <footer className="foreground">
      <div className="body">
        <p>&copy; {currentYear()} Robert Quinn. All Rights Reserved. App Store is a service mark of Apple, Inc. iPhone, iPad, and Apple TV are trademarks of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc.</p>
        <p>Last updated May 2020</p>
      </div>
    </footer>
  );
}

class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Projects/>
        <Footer/>
        <div id="backdrop" onClick={closeCard}></div>
      </div>
    );
  }
}

export default App;
