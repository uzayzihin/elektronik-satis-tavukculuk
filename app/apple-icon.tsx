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
          background: "#F2C200",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: "#0A0A0A",
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: 110,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          ES
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginTop: 6,
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
