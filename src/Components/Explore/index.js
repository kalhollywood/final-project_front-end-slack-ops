import MapContainer from "../MapContainer";
import Navbar from "../Navbar";
import { useState } from "react";
import EventOverlay from "../EventOverlay/index.js";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";
import MainEventCard from "../MainEventCard";
Amplify.configure(awsExports);
Amplify.configure(awsconfig);

function Explore(signOut, user) {
  const [eventsArr, setEventsArr] = useState([
    {
      eventId: 0,
      eventName: "Long Gameboy Advance enthusiasts meeting",
      eventDescription: "Come see this long boi.",
      mainDescription:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
      eventImg:
        "https://images.nintendolife.com/c23e0dc684e6f/wide-gba.large.jpg",
      eventTags: ["dog friendly", "lgbt", "clean toilets"],
      eventDistance: "2km away",
      eventTime: "tomorrow",
      rating: 5,
      organiser: "Mary",
      email: "mary@gmail.com",
      address: "14 Aldon Lane",
      lat: 51.50429287644996,
      lng: -0.07860452094441346,
    },
    {
      eventId: 1,
      eventName: "The Melonator World Tour",
      eventDescription: "Embrace the melon, be the melon.",
      mainDescription:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
      eventImg:
        "https://runt-of-the-web.com/wordpress/wp-content/uploads/2016/04/melonator.jpg",
      eventTags: ["dog friendly", "lgbt", "clean toilets", "accessibility"],
      eventDistance: "km away",
      eventTime: "in 2 days",
      rating: 4,
      organiser: "Sarah",
      email: "sarah@gmail.com",
      address: "23 Holly Lane",
      lat: 47.602508712234524,
      lng: 3.5412595468827868,
    },
    {
      eventId: 2,
      eventName: "The return of the banana",
      eventDescription: "Banana bending workshop included.",
      mainDescription:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
      eventImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzY_Ofzzp1UTUR3hEGVPOu3urAajfCg2oRg&usqp=CAU",
      eventTags: ["dog friendly", "lgbt", "workshop"],
      eventDistance: "10km away",
      eventTime: "in 3 days",
      rating: 3,
      organiser: "Ben",
      email: "ben@gmail.com",
      address: "6 Corgi Close",
      lat: 47.605623195531535,
      lng: 3.5208701897473174,
    },
    {
      eventId: 3,
      eventName: "Nick Cage fanclub party",
      eventDescription: "Bring your own Nicholas Cage cardboard cutout.",
      mainDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      eventImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dailydot.com%2Fwp-content%2Fuploads%2Fa00%2Fb2%2Fb32e0d39036e2891848a4eed4ee81b72.jpg&f=1&nofb=1",
      eventTags: ["Nick Cage", "lgbt", "meeting"],
      eventDistance: "5km away",
      eventTime: "in 3 days",
      rating: 5,
      organiser: "John",
      email: "John@hotmail.com",
      address: "24 Folders Lane",
      lat: 47.592604513995454,
      lng: 3.53192040563478,
    },
    {
      eventId: 4,
      eventName: "Beer Festival",
      eventDescription: "I'm too tired to think of anything funny.",
      mainDescription:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
      eventImg:
        "https://p2d7x8x2.stackpathcdn.com/wordpress/wp-content/uploads/2014/10/Craft-Beer.jpg",
      eventTags: ["dog friendly", "lgbt", "alcohol", "festival"],
      eventDistance: "1km away",
      eventTime: "in 4 days",
      rating: 1,
      organiser: "Steve",
      email: "steve@gmail.com",
      address: "10 Updown Lane",
      lat: 47.596612205676706,
      lng: 3.5331182122558964,
    },

    {
      eventId: 5,
      eventName: "Landfill sightseeing adventure",
      eventDescription: "Don't touch anything. Thieves will be prostituted.",
      mainDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      eventImg:
        "https://thumbs.dreamstime.com/b/pollution-concept-garbage-pile-trash-dump-landfill-birds-flying-around-91233936.jpg",
      eventTags: ["museum", "lgbt", "dog friendly"],
      eventDistance: "2km away",
      eventTime: "in 5 days",
      rating: 5,
      organiser: "Al Cohol DeNaturated",
      email: "a.c.DeNaturated@hotmail.com",
      address: "1 Landfill Alley",
      lat: 52.23300178597648,
      lng: 20.904440714145675,
    },
    {
      eventId: 6,
      eventName: "Seated Gentle Excercise (online)",
      eventDescription: "No violent movement and loud noises please.",
      mainDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      eventImg:
        "https://www.shape.com/thmb/q4wBNX2YPFL86grF-6_kgo7JX5A=/400x0/filters:no_upscale():max_bytes(150000):strip_icc()/happybabypose-edit_0-f9f1011e631d4954b4eeea6b43743776.png",
      eventTags: ["excercise", "online", "meeting"],
      eventDistance: "5km away",
      eventTime: "in 3 days",
      rating: 3,
      organiser: "Diana Imogen Crave",
      email: "D.I.Crave@gmail.com",
      address: "online",
      lat: 52.235042924247765,
      lng: 20.886735810419843,
    },
    {
      eventId: 7,
      eventName: "Siberian food cookery school",
      eventDescription:
        "The magical thing about siberian food is that you'll only need a plate",
      mainDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      eventImg:
        "https://i.pinimg.com/originals/8d/b1/64/8db164c57814f594461b7a56b9522eee.jpg",
      eventTags: ["cooking", "accessible", "meeting", "recurring"],
      eventDistance: "5km away",
      eventTime: "in 3 days",
      rating: 1,
      organiser: "Ignacy123",
      email: "I.Lovski@hotmail.com",
      address: "24 Folders Lane",
      lat: 53.821110541196994,
      lng: -3.0136801746060935,
    },
    {
      eventId: 8,
      eventName: "Pokemon Tai Chi for dogs",
      eventDescription: "It's not a scam I swear. Bring your wallet.",
      mainDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      eventImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRVb1kD5lR5H7GeRuA-af6Ig2XS-wg4bO0Ig&usqp=CAU",
      eventTags: ["excercise", "dog friendly", "parking", "meeting"],
      eventDistance: "2km away",
      eventTime: "in 10 days",
      rating: 1,
      organiser: "Richard Champion",
      email: "dick.champion@gmail.com",
      address: "Plaza Del Charco",
      lat: 28.41684109377287,
      lng: -16.55081008870899,
    },
    {
      eventId: 9,
      eventName: "Hardcore Children Bloodbowl Competition",
      eventDescription:
        "Not for faint-hearted. Child endangerment at its finest.",
      mainDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      eventImg:
        "https://i.pinimg.com/originals/8d/b1/64/8db164c57814f594461b7a56b9522eee.jpg",
      eventTags: ["cooking", "accessible", "meeting", "recurring"],
      eventDistance: "5km away",
      eventTime: "in 3 days",
      rating: 1,
      organiser: "Ignacy123",
      email: "I.Lovski@hotmail.com",
      address: "24 Folders Lane",
      lat: 53.821110541196994,
      lng: -3.0136801746060935,
    },
    {
      eventId: 10,
      eventName: "Bank Robbery",
      eventDescription: "Looking for a crew, hit me up.",
      mainDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      eventImg:
        "https://www.deweybrinkleylaw.com/wp-content/uploads/2016/04/bigstock-Hooded-Robber-With-A-Gun-And-A-78546158-768x513.jpg",
      eventTags: ["robbery", "accessible", "meeting", "recurring"],
      eventDistance: "5km away",
      eventTime: "in 3 days",
      rating: 1,
      organiser: "BePhucDat214",
      email: "bpd@gmail.com",
      address: "La Caixa Bank",
      lat: 28.41635985131634,
      lng: -16.547548522601453,
    },
  ]);

  /**************************DUMMY DATA ALERT***************************** */
  // const coordinates = { lat: 53.22738449126366, lng: 20.923854902697684 };
  /*_______________________________________________________________________*/

  const [location, setLocation] = useState({
    lat: 47.60011001977801,
    lng: 3.533434778585759,
  });

  const [userLocation, setUserLocation] = useState({
    lat: 47.60011001977801,
    lng: 3.533434778585759,
  });
  //This state takes in the object of the event clicked in EventOverlay
  const [popUp, setPopUp] = useState(undefined);

  //This function is passed down the tree to change the index of the even pop up
  function eventClickHandler(position, eventId) {
    for (let i = 0; i < eventsArr.length; i++) {
      if (eventsArr[i].eventId === eventId) {
        setPopUp(eventsArr[i]);
        setLocation(position);
      }
    }
  }

  function markerClickHandler(markerEventId) {
    for (let i = 0; i < eventsArr.length; i++) {
      if (eventsArr[i].eventId === markerEventId) {
        setPopUp(eventsArr[i]);
        setLocation(userLocation);
      }
    }
  }

  //function to close the pop up
  function xClickReset() {
    setPopUp(undefined);
    setLocation(userLocation);
  }

  window.addEventListener("load", () => {
    navigator.geolocation.getCurrentPosition(positionFound, positionNotFound);
    async function positionFound(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      console.log("something");
      setUserLocation({ lat: lat, lng: lng });
      setLocation({ lat: lat, lng: lng });
    }
    function positionNotFound(err) {
      console.log(err);
    }
  });

  return (
    <div>
      <Navbar />
      <MapContainer
        centerObj={location}
        eventsArr={eventsArr}
        userLocation={userLocation}
        markerOnClick={markerClickHandler}
      ></MapContainer>
      <EventOverlay
        onClick={eventClickHandler}
        xClick={xClickReset}
        eventsArr={eventsArr}
      />
      {popUp ? (
        <MainEventCard eventObj={popUp} xClick={xClickReset}></MainEventCard>
      ) : null}
    </div>
  );
}

// export default Explore;
export default withAuthenticator(Explore);
// test
// pushing to main
//oh no
