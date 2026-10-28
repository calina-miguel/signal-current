"use client";

import { useState } from "react";

const probes = [
  { code: "LOAD_PROFILE", prompt: "What would you like to understand?", choices: ["Where demand peaks", "When flexibility matters", "Which load can shift"] },
  { code: "OPERATING_CONTEXT", prompt: "What is the current priority?", choices: ["Build a clearer baseline", "Explore storage options", "Find an efficiency move"] },
  { code: "NEXT_ACTION", prompt: "What can your team do next?", choices: ["Review a meter view", "Compare one scenario", "Share a short brief"] },
];
const briefs = [
  ["Peak demand review", "Start by listing the intervals when load is highest and what was operating then. Compare the pattern across representative days before choosing an intervention."],
  ["Flexibility window", "Identify one controllable load and the hours it can shift without affecting operations. Use that window as a starting point for a storage or response conversation."],
  ["Efficiency question", "Pick a single process or system to review. Establish its operating schedule and baseline so your team can compare a practical improvement."],
];

export function Pathway() {
  const [index, setIndex] = useState(0); const [answers, setAnswers] = useState<number[]>([]); const [ready, setReady] = useState(false);
  const select = (n: number) => setAnswers((old) => { const next = old.slice(0, index); next[index] = n; return next; });
  return <div className="pathway pathway--signal" id="signal-pathway" aria-live="polite">
    <div className="pathway__terminal-head"><span><i/> SIGNAL / GUIDED REVIEW</span><b>{ready ? "COMPLETE" : `QUERY 0${index + 1}`}</b></div>
    {ready ? <div className="pathway__result"><span className="pathway__code">OUTPUT / 0{(answers[0] ?? 0) + 1}</span><h3>{briefs[answers[0] ?? 0][0]}</h3><p>{briefs[answers[0] ?? 0][1]}</p><div className="pathway__status"><i/> ACTION BRIEF READY <span>LOCAL VIEW</span></div><small>Email follow-up is paused until sender-domain setup is complete.</small><button onClick={() => { setReady(false); setIndex(0); setAnswers([]); }}>Run a new review ↺</button></div> : <>
      <p className="pathway__code">{probes[index].code} // {String(index + 1).padStart(2, "0")}</p><h3>{probes[index].prompt}</h3><div className="pathway__rows">{probes[index].choices.map((item, i) => <button key={item} className={answers[index] === i ? "active" : ""} onClick={() => select(i)} aria-pressed={answers[index] === i}><span>0{i + 1}</span><b>{item}</b><i>{answers[index] === i ? "ACTIVE" : "SELECT"}</i></button>)}</div>
      <div className="pathway__control"><span>PROGRESS <b>{Math.round(((index + 1) / 3) * 100)}%</b></span><button onClick={() => setIndex(Math.max(index - 1, 0))} disabled={!index}>BACK</button><button onClick={() => index < 2 ? setIndex(index + 1) : setReady(true)} disabled={answers[index] === undefined}>{index === 2 ? "GENERATE BRIEF" : "NEXT QUERY"} ↗</button></div>
    </>}
  </div>;
}
