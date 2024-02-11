import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import { projects } from './Projects.js';

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
        <div className="card foreground rounded16 shadow3D">
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
  return(
    <div className="banner ">
      <div className="banner-left"></div>
      <div className="banner-right"></div>
      <div className="banner-middle shadow2D">
        <h4>{props.banner.event}</h4>
        <h3>{props.banner.award}</h3>
      </div>
    </div>
  );
}

function Cover(props){
  var p = props.project;
  return(
    <div className="cover">
      <img className="thumb" alt="" src={require("./images/products/screens/" + p.cover)}/>
      <div className="cover-details-container">
        <h4>{p.topic}</h4>
        <h3>{p.title}</h3>
        {p.icon && <img className="app-icon" alt="" src={require("./images/products/icons/" + p.sku + ".png")}/>}
        <h5>{p.short}</h5>
      </div>
    </div>
  );
}

function Content(props){
  var p = props.project;
  return(
    <div className="content rounded16-top midground shadow3D static">
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
          <h3 className="section-title">Featured</h3>
          <h4 className="section-subtitle">Get to know me and my work</h4>
        </section>
        <div className="cards">
          <Card sku="About"/>
        </div>

        <section>
          <h3 className="section-title">Rec Room (2018&nbsp;&ndash;&nbsp;Present)</h3>
          <h4 className="section-subtitle">Just a few of my favorite projects</h4>
          <Card sku="RR-Social"/>
          <Card sku="RR-Vision"/>
          <Card sku="RR-Creation"/>
          <Card sku="RR-AR"/>
          <Card sku="RR-2018"/>
        </section>
        
        <section>
          <h3 className="section-title">College (2014&nbsp;&ndash;&nbsp;2018)</h3>
          <h4 className="section-subtitle">Hackathons and Class Projects</h4>
        </section>
        <div className="cards">
          <Card sku="CC"/>
          <Card sku="DOGS"/>
          <Card sku="BOT"/>
          <Card sku="GEO"/>
          <Card sku="REVERSI"/>
        </div>

        <section>
          <h3 className="section-title">Kyanite Games, Inc. (2011&nbsp;&ndash;&nbsp;2015)</h3>
          <h4 className="section-subtitle">My first self-published games</h4>
        </section>
        <div className="cards">
          <Card sku="PV"/>
          <Card sku="DI"/>
          <Card sku="NSS"/>
          <Card sku="MR"/>
        </div>

        <section>
          <h3 className="section-title">Hobby Projects</h3>
          <h4 className="section-subtitle">Art, crafts, keyboards</h4>
        </section>
        <div className="cards">
          <Card sku="KEY"/>
          <Card sku="MV"/>
          <Card sku="ZEN"/>
        </div>

        <section>
          <h3 className="section-title">Contact</h3>
          <h4 className="section-subtitle">Say hi, ask me anything</h4>
        </section>
        <div className="contactlinks">
          <Button text="Email me" link="mailto:rob@angle.fish"/>
          <Button text="Instagram" link="https://instagram.com/madebyrobq"/>
          <Button text="f.k.a. twitter (may be hiding from bots)" link="https://twitter.com/madebyrobq"/>
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
        <h3 className="portfolio-title">made by Rob Q</h3>
      </div>
    </header>
  );
}

function currentYear(){
  var currentYear = new Date().getFullYear();
  return currentYear > 2024 ? currentYear : 2024;
}

function Footer(){
  return(
    <footer className="">
      <div className="body footer">
        <p>&copy; {currentYear()} Robert Quinn</p>
        <p>Last updated Feb 2024</p>
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
