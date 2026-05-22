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
          background: "#F2EDE4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: "#1A1F18",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid #DDD4C4",
            margin: 24,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 18,
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#2E3B2C",
            }}
          >
            ES
          </div>
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#2E3B2C",
            }}
          >
            Tavukçuluk
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#5C6157",
            }}
          >
            Premium Tavuk Tedariği
          </div>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#1A1F18",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Beyaz etin</span>
            <span style={{ fontStyle: "italic", color: "#B8421F" }}>
              premium adresi.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "system-ui, sans-serif",
            fontSize: 18,
            color: "#5C6157",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#2E3B2C",
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
              border: "1px solid #DDD4C4",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#B8421F",
            }}
          >
            7/24 Sipariş Hattı
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
