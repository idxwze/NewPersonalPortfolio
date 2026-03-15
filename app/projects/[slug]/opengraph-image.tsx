import { ImageResponse } from "next/og";
import { projectItems } from "@/data/projects";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const project = projectItems.find((item) => item.slug === params.slug) ?? projectItems[0];

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
            "radial-gradient(circle at top left, rgba(13, 148, 136, 0.28), transparent 30%), radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.24), transparent 32%), #0f172a",
          color: "white"
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: "-0.04em", opacity: 0.8 }}>Seifeddine Reguige</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.05em" }}>{project.title}</div>
          <div style={{ fontSize: 28, maxWidth: 960, color: "rgba(255,255,255,0.82)" }}>{project.summary}</div>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.12)",
                fontSize: 24
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
