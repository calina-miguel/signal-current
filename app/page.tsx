import { FunnelLanding } from "./funnel-landing";

export const metadata = { title: "Signal Current", description: "A guided first action for operators exploring storage, electrification, and better energy intelligence." };

export default function Page(){ return <FunnelLanding config={{ name: "Signal Current", monogram: "SC", eyebrow: "MAKE EFFICIENCY VISIBLE", title: "A guided first action for operators exploring storage, electrification, and better energy intelligence.", body: "Energy intelligence", accent: "#087f9d", soft: "#e2f6fa", steps: ["Choose the operating question","Take the first research action","Keep the signal moving"], cta: "Start the trial path", outcome: "First action" }} />; }

