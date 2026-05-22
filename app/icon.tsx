import { ImageResponse } from "next/og";

export const size = {
  width: 256,
  height: 256,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F2C200",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 600,
          fontSize: 180,
          lineHeight: 1,
          color: "#0A0A0A",
          letterSpacing: "-0.03em",
        }}
      >
        ES
      </div>
    ),
    {
      ...size,
    }
  );
}
