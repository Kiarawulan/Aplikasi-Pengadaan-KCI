import { Lock } from "lucide-react";
import type { MainStep } from "../../types";

export function StepTracker({ steps, activeStepIdx, activeSubIdx, completedStepIds, submittedSubs, onSelectStep, onSelectSub, canAccessStep, canAccessSub }: {
  steps: MainStep[];
  activeStepIdx: number;
  activeSubIdx: number;
  completedStepIds: Set<string>;
  submittedSubs: Set<string>;
  onSelectStep: (idx: number) => void;
  onSelectSub: (sIdx: number) => void;
  canAccessStep: (idx: number) => boolean;
  canAccessSub: (sIdx: number) => boolean;
}) {
  return (
    <div className="w-[230px] shrink-0 flex flex-col gap-1.5">
      {steps.map((step, idx) => {
        const isActive = idx === activeStepIdx;
        const isDone = completedStepIds.has(step.id);
        const accessible = canAccessStep(idx);

        return (
          <div key={step.id}>
            <button
              onClick={() => accessible && onSelectStep(idx)}
              disabled={!accessible}
              className={`w-full h-10 rounded-[10px] flex items-center px-2 gap-2 transition-all text-left ${!accessible ? "opacity-40 cursor-not-allowed" : ""}`}
              style={{
                background: isActive ? "#cc0000" : "#ffffff",
                boxShadow: isActive ? "0px 1px 3px rgba(0,0,0,0.22)" : "0px 1px 1.5px rgba(0,0,0,0.18)",
              }}
            >
              <div className="w-[22px] h-[22px] shrink-0">
                <svg viewBox="0 0 22 22" fill="none" className="w-full h-full">
                  <circle cx="11" cy="11" r="10"
                    fill={isDone ? "#4ACE22" : isActive ? "rgba(255,255,255,0.22)" : accessible ? "#F5F5F5" : "#E8E8E8"}
                    stroke={isDone ? "#4ACE22" : isActive ? "rgba(255,255,255,0.45)" : accessible ? "#C0C0C0" : "#D8D8D8"}
                    strokeWidth="1.4"
                  />
                  {isDone ? (
                    <path d="M6.5 11l3 3 6-6" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  ) : !accessible ? (
                    <Lock size={8} x="7" y="7" color="#bbb" />
                  ) : (
                    <text x="11" y="15" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={isActive ? "white" : "#888"}>{idx + 1}</text>
                  )}
                </svg>
              </div>
              <span className={`text-[12.5px] leading-none ${isActive ? "font-bold text-white" : accessible ? "font-medium text-[#1a1a1a]" : "font-medium text-[#aaa]"}`}>
                {step.label}
              </span>
            </button>

            {/* Sub-steps — only show for active step */}
            {isActive && step.subSteps.length > 0 && (
              <div className="mt-1 ml-3.5 flex flex-col gap-0.5 pl-3 border-l-2 border-[#e0e0e0]">
                {step.subSteps.map((sub, sIdx) => {
                  const subActive = sIdx === activeSubIdx;
                  const subDone = submittedSubs.has(`${step.id}.${sub.id}`);
                  const subAccessible = canAccessSub(sIdx);
                  return (
                    <button
                      key={sub.id}
                      onClick={() => subAccessible && onSelectSub(sIdx)}
                      disabled={!subAccessible}
                      className={`flex items-center gap-2 h-7 rounded-full px-2 text-left transition-all w-full ${
                        subActive ? "bg-[#f0f0f0]" : subAccessible ? "hover:bg-[#fafafa]" : "opacity-40 cursor-not-allowed"
                      }`}
                    >
                      <div className="w-[9px] h-[9px] shrink-0">
                        <svg viewBox="0 0 9 9" fill="none" className="w-full h-full">
                          <circle cx="4.5" cy="4.5" r="4"
                            fill={subDone ? "#4ACE22" : subActive ? "#252271" : "#F0F0F0"}
                            stroke={subDone ? "#4ACE22" : subActive ? "#252271" : "#BBBBBB"}
                          />
                          {subDone && <path d="M2.5 4.5l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />}
                          {subActive && !subDone && <circle cx="4.5" cy="4.5" r="1.8" fill="white" />}
                        </svg>
                      </div>
                      <span className={`text-[10.5px] leading-none ${subActive ? "font-semibold text-[#252271]" : subAccessible ? "text-[#555]" : "text-[#aaa]"}`}>
                        {sub.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

