import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent", // Fond transparent
        }}
      >
        {/* Utilisation de la balise img pour charger le logo SVG */}
        <img
          src="https://studio-126.com/images/about/about-image-2.svg" // URL complète de l'image
          alt="Logo Studio 126"
          style={{
            width: "500px", // Largeur de l'image
            height: "500px", // Hauteur de l'image
            objectFit: "contain", // Assurer que l'image est bien ajustée
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
