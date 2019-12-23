import React from "react";

const step = (text, { markers, zoomLevel, mapCenter } = {}) => ({
  text,
  mapCenter,
  zoomLevel,
  markers: markers || []
});

const Link = ({ href, children }) => (
  <a href={href} target="_blank">
    {children}
  </a>
);

export const steps = [
  step(
    <>
      Du er invitert til Amsterdam.
      <br />
      <small>klikk på sirkelen ➡️</small>
    </>
  ),
  step("Flyet lander torsdag 16. januar, kl. 17:25.", {
    mapCenter: { lat: 52.3105386, lng: 4.7660857 },
    zoomLevel: 13,
    markers: [
      {
        label: "Schiphol Amsterdam Airport",
        location: { lat: 52.3105386, lng: 4.7660857 }
      }
    ]
  }),

  step("...og letter mandag 20. januar, kl. 18:10", {
    mapCenter: { lat: 52.3405386, lng: 4.8260857 },
    zoomLevel: 12
  }),
  step("Vi skal bo på et billig, shabby, supersentralt hotel.", {
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
      Da bor vi nært det som skjer denne siste helgen av{" "}
      <Link href="https://amsterdamlightfestival.com/en/">
        Amsterdam lysfestival.
      </Link>
    </>,
    {
      mapCenter: { lat: 52.370706, lng: 4.900148 },
      markers: [
        {
          label: "ARTIS Amsterdam Royal Zoo",
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
      Jeg gleder meg spesielt til å se{" "}
      <Link href="https://www.skalar.art/">SKALAR</Link> på lørdag!
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
  step("Det er god mat og drikke i nærheten!", {
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
  step("Og det er disco like ved!", {
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
  step("...kanskje også se noen shady steder?", {
    markers: [
      {
        label: "Red light bar",
        location: { lat: 52.3726666, lng: 4.8948655 },
        color: "pink"
      },
      {
        label: "Barneys Coffeshop",
        location: { lat: 52.380627, lng: 4.8888053 },
        color: "pink"
      },
      {
        label: "Grey Area Coffeeshop",
        location: { lat: 52.374665, lng: 4.8866712 },
        color: "pink"
      }
    ]
  }),

  step("Så hva sier du? Vil du bli med?", {
    zoomLevel: 13,
    mapCenter: { lat: 52.373706, lng: 4.890148 }
  }),
  step(
    <>
      <Link href="https://www.messenger.com/t/tomas.a.fagerbekk">
        Send meg melding
      </Link>{" "}
      da vel!
    </>
  ),
  step("God jul 🎄")
];
