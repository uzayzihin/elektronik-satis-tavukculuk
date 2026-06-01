import { ImageResponse } from "next/og";

export const alt = "ES Tavukçuluk — Beyaz etin premium adresi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAF7F0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: "#0A0A0A",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "38%",
            background: "#F2C200",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#0A0A0A",
            }}
          >
            ES
          </div>
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "#0A0A0A",
            }}
          >
            Elektronik Satış Tavukçuluk
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            position: "relative",
            maxWidth: 720,
          }}
        >
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#6B6B6B",
            }}
          >
            Premium Tavuk Tedariği
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              color: "#0A0A0A",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Beyaz etin</span>
            <span style={{ fontStyle: "italic" }}>premium adresi.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "system-ui, sans-serif",
            fontSize: 18,
            color: "#0A0A0A",
            position: "relative",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            estavukculuk.com
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              background: "#0A0A0A",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F2C200",
            }}
          >
            7/24 Sipariş
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
