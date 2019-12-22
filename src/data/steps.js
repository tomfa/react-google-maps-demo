import React from "react";

const step = (
  text,
  { markerLabel, markerLocation, zoomLevel, mapCenter } = {}
) => ({
  text,
  mapCenter,
  zoomLevel,
  markerLabel,
  markerLocation
});

export const steps = [
  step("Du er invitert til Amsterdam."),
  step("Flyet lander torsdag 16. januar, kl. 17:25.", {
    markerLabel: "Gashouder westergasfabriek",
    mapCenter: { lat: 52.3105386, lng: 4.7660857 }
  }),
  step("...og letter mandag 20. januar, kl. 18:10"),
  step("Vi skal bo på et billig, shabby, supersentralt hotel.", {
    markerLabel: "Boutique Hotel La Belle Vue",
    mapCenter: { lat: 52.373706, lng: 4.890148 }
  }),
  step("Da har vi kort vei til god mat"),
  step("Og festligheter :)"),
  step(
    <>
      Jeg gleder meg til å se <a href="https://www.skalar.art/">SKALAR</a>
    </>,
    {
      markerLabel: "Gashouder westergasfabriek",
      mapCenter: { lat: 52.3844955, lng: 4.8805461 }
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
