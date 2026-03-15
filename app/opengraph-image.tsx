import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(13, 148, 136, 0.28), transparent 30%), radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.24), transparent 32%), #f8fafc",
          color: "#0f172a"
        }}
      >
        <div style={{ fontSize: 28 }}>Portfolio</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.06em" }}>{siteConfig.name}</div>
          <div style={{ fontSize: 28, maxWidth: 1000, color: "#334155" }}>{siteConfig.heroSubheadline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#0f766e" }}>{siteConfig.location}</div>
      </div>
    ),
    size
  );
}
