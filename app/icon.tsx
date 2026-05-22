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
          background: "#F2EDE4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 180,
          lineHeight: 1,
          color: "#2E3B2C",
          letterSpacing: "-0.04em",
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
