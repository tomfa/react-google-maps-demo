import React from "react";

const step = (text, { markers, zoomLevel, mapCenter } = {}) => ({
  text,
  mapCenter,
  zoomLevel,
  markers: markers || []
});

export const steps = [
  step("Du er invitert til Amsterdam."),
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
  step("...og letter mandag 20. januar, kl. 18:10", { zoomLevel: 11 }),
  step("Vi skal bo på et billig, shabby, supersentralt hotel.", {
    zoomLevel: 14,
    mapCenter: { lat: 52.373706, lng: 4.890148 },
    markers: [
      {
        label: "Boutique Hotel La Belle Vue",
        location: { lat: 52.373706, lng: 4.890148 },
        color: 'red',
      }
    ]
  }),
  step("Da har vi kort vei til god mat"),
  step("Og festligheter :)"),
  step(
    <>
      Jeg gleder meg til å se <a href="https://www.skalar.art/">SKALAR</a>
    </>,
    {
      zoomLevel: 13,
      mapCenter: { lat: 52.3844955, lng: 4.8805461 },
      markers: [
        {
          label: "Gashouder westergasfabriek",
          location: { lat: 52.3844955, lng: 4.8805461 },
          color: 'blue',
        }
      ]
    }
  ),
  step("Og hvem vet, kanskje det blir et basseng"),
  step(
    <>
      Vil du bli med?{" "}
      <a href="https://www.messenger.com/t/tomas.a.fagerbekk">
        Send meg melding
      </a>{" "}
      da vel!
    </>
  ),
  step("God jul 🎄")
];
