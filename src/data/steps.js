import React from "react";

const step = (text, { markers, zoomLevel, mapCenter } = {}) => ({
  text,
  mapCenter,
  zoomLevel,
  markers: markers || []
});

const Link = ({ href, children, blank = false } = {}) => (
  <a href={href} target={blank ? "_blank" : ""}>
    {children}
  </a>
);

export const steps = [
  step(
    <>
      I would like to invite you to Amsterdam.
      <br />
      <small>click on the circle ➡️</small>
    </>
  ),
  step("The flight lands Thursday the 16th, at 17:25.", {
    mapCenter: { lat: 52.3105386, lng: 4.7660857 },
    zoomLevel: 13,
    markers: [
      {
        label: "Schiphol Amsterdam Airport",
        location: { lat: 52.3105386, lng: 4.7660857 }
      }
    ]
  }),

  step("...og we'll stay until Monday the 20th, at 18:10.", {
    mapCenter: { lat: 52.3405386, lng: 4.8260857 },
    zoomLevel: 12
  }),
  step("We're living at a cheap, shitty, super central hotel.", {
    zoomLevel: 13,
    mapCenter: { lat: 52.373706, lng: 4.890148 },
    markers: [
      {
        label: "Boutique Hotel La Belle Vue",
        location: { lat: 52.373706, lng: 4.890148 },
        color: "red"
      }
    ]
  }),
  step(
    <>
      Which means that we live close to what happens this last weekend of{" "}
      <Link href="https://amsterdamlightfestival.com/en/" blank>
        Amsterdam Light Festival.
      </Link>
    </>,
    {
      mapCenter: { lat: 52.370706, lng: 4.900148 },
      markers: [
        {
          label: "Sleepwalking at ARTIS Zoo",
          location: { lat: 52.365889, lng: 4.916554 }
        },
        {
          label: "Amsterdam Light Festival Cruise",
          location: { lat: 52.364667, lng: 4.879696 }
        }
      ]
    }
  ),
  step(
    <>
      I'm especially looking forward Saturday: I got two tickets for the{" "}
      <Link href="https://www.skalar.art/" blank>
        SKALAR show
      </Link>{" "}
      !
    </>,
    {
      zoomLevel: 14,
      mapCenter: { lat: 52.376706, lng: 4.885148 },
      markers: [
        {
          label: "Gashouder westergasfabriek",
          location: { lat: 52.386356, lng: 4.875391 }
        }
      ]
    }
  ),
  step("There is good food and drinks nearby.", {
    mapCenter: { lat: 52.373483, lng: 4.888163 },
    markers: [
      {
        label: "A Taste Of Amsterdam Food Tour",
        location: { lat: 52.375048, lng: 4.896282 }
      },
      {
        label: "Bagels & Beans",
        location: { lat: 52.373483, lng: 4.888163 }
      },
      {
        label: "PANCAKES Amsterdam Westermarkt",
        location: { lat: 52.374793, lng: 4.884022 }
      },
      {
        label: "Pulitzer's Bar",
        location: { lat: 52.372653, lng: 4.884607 }
      }
    ]
  }),
  step("And night clubs.", {
    markers: [
      {
        label: "The Smallest Disco in the World",
        location: { lat: 52.3666975, lng: 4.8920318 },
        color: "blue"
      },
      {
        label: "Club Mystique",
        location: { lat: 52.378311, lng: 4.89472 },
        color: "blue"
      },
      {
        label: "Warehouse Elementenstraat",
        location: { lat: 52.3938179, lng: 4.8496236 },
        color: "blue"
      }
    ]
  }),

  step("So what do you say? Would you like to join?", {
    zoomLevel: 13,
    mapCenter: { lat: 52.373706, lng: 4.890148 }
  }),
  step(
    <>
      Then{' '}
      <Link href="tel:+4741767679">send me a message!</Link>
    </>
  ),
  step("Happy birthday 🎁")
];
