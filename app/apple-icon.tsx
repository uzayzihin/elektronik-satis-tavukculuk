import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F2EDE4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: "#2E3B2C",
        }}
      >
        <div
          style={{
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 110,
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          ES
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginTop: 8,
          }}
        >
          Tavukçuluk
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
