---
layout: single
author_profile: false
title: ""
---

<style>
.page {
  width: 100% !important;
  padding-right: 0 !important;
  margin: 0 auto !important;
  float: none !important;
}

.page__inner-wrap {
  width: 90% !important;
  margin: 0 auto !important;
  float: none !important;
}
</style>

# OmniSafe: Safety, Privacy, and Reliability of Audio-Visual LLMs

**Intended Venue ICLR 2027** — TBD | TBD

Contact: [gs534@cam.ac.uk](mailto:gs534@cam.ac.uk)

---

## News

- **[TBD] Workshop Status** — Placeholder for any updates

---

## About
{: #about}

Audio-visual large language models (AV-LLMs) — systems that jointly perceive and reason over speech, sound, images, and video — are already deployed in the real world. Qwen3-Omni and Gemini 3.1 Pro process audio, video, and speech natively in real time. Meta sold over 7 million Ray-Ban AI glasses in 2025 alone, each a wearable AV-LLM with a live camera and microphone. Apple's always-on AI glasses are expected to ship in 2027. These systems don't just read and write — they hear and see, continuously, in the real world — and that fundamentally changes the threat landscape.

Yet the safety research community has not kept pace. Existing "trustworthy MLLM" workshops focus predominantly on text and static images, leaving two critical gaps: (1) unlike static images, the audio and video input channels are largely undefended, and (2) cross-modal interactions open failure modes that single-modality research cannot cover.

**OmniSafe** creates the first dedicated venue and community to address both gaps, bringing together researchers across adversarial robustness, reliability, and privacy to chart a path toward trustworthy AV-LLMs.

---

## Call for Papers
{: #cfp}

The **OmniSafe Workshop** invites submissions from researchers and practitioners working on the safety, privacy, and reliability of audio-visual large language models.

### Scope

We welcome contributions across three core research areas and their intersections:

**Scope 1 — Adversarial Robustness**

A harmful prompt that is correctly refused in text can achieve over 80% jailbreak success when delivered as speech with prosodic distortions, because safety training has never covered the acoustic domain. Building red-teaming methodology and guardrails that are robust across all modalities simultaneously is an essentially open problem. Topics include:

- Audio, visual, and audio-visual jailbreaking and red-teaming
- Cross-modal inconsistency attacks
- Voice spoofing and audio adversarial examples targeting AV-LLM agents
- Omni-modal guardrail and safety-filter models
- Physical-world and sensor-level attacks (e.g., ultrasonic "dolphin attacks," adversarial patches persistent through camera feeds)

**Scope 2 — Reliability**

An AV-LLM asked to transcribe a political speech can hallucinate statements the speaker never made; asked to describe a surveillance clip, it can invent actions that never occurred. Hallucinated statements or misinformation about videos can cause serious consequences, yet detection and prevention methods for audio-visual hallucination remain largely underexplored. Topics include:

- Audio-visual hallucinations and misinformation detection and mitigation
- Hallucination and misinformation evaluation benchmarks
- Uncertainty estimation and calibration for AV-LLMs

**Scope 3 — Privacy**

A user asking an AV-LLM to transcribe a meeting recording may unknowingly expose every speaker's voiceprint, emotional state, and health cues — including bystanders who never consented. Unlike text, these signals are embedded in the raw audio-visual stream itself, invisible to users. Topics include:

- Sensitive attribute inference and private attribute profiling from audio-visual inputs
- Speaker identity and face identity leakage from AV-LLM representations
- Bystander and third-party privacy in always-on AV devices
- Membership inference against audio-visual models
- Privacy-preserving training and inference (anonymisation, machine unlearning, differential privacy, on-device processing)

**Cross-cutting Themes**

We also welcome work on: safety of agentic and embodied AV systems; fairness and equity in safety and detection performance across accents, languages, and demographics; policy, regulation, and real-world incident analysis.

### Benchmark Challenge

We are exploring a shared benchmark challenge focused on one of two tracks:

- **(a) Audio-visual jailbreak red-teaming** — attack and defend an AV-LLM across modalities simultaneously
- **(b) AV-LLM privacy auditing** — probe deployed models for sensitive attribute leakage or speaker re-identification

Both tracks address problems where no standard benchmark currently exists.

### Important Dates

- **Submission Portal Opens:** TBD
- **Paper Submission Deadline:** TBD
- **Notification:** TBD
- **Camera-ready Deadline:** TBD
- **Workshop Date:** TBD

### Submission Guidelines

**Format:** We will offer two submission tracks:

- **Regular Papers Track:** Research and position papers (10 pages). References and supplementary materials do not count toward the limit.
- **Short Papers Track:** Short papers (4 pages) to include researchers outside the standard ML conference circuit. Suitable for unpublished ideas, modest theoretical results, follow-up experiments, or fresh perspectives. References and supplementary materials do not count toward the limit.

**Anonymity:** Submissions must be fully anonymized, including any supplementary or linked material such as code.

**Dual submission:** The workshop will adopt a non-archival policy, welcoming ongoing and unpublished work, as well as papers under review or recently accepted elsewhere (provided no dual-submission or anonymity policies are violated).

**LLM usage policy:** AI-generated papers are not allowed. AI assistance is permitted, but submissions must be primarily human-authored.

**Contact:** For questions, please reach out at [gs534@cam.ac.uk](mailto:gs534@cam.ac.uk).

---

## Schedule
{: #schedule}

*All times are local.*

| **Time** | **Session** |
|----------|-------------|
| 09:00–09:20 | Opening: The Omni-Modal Threat Landscape |
| 09:20–10:30 | Invited Talks: Scope 1 — Adversarial Robustness (×2) |
| 10:30–11:00 | Spotlight Papers ×4 |
| 11:00–11:30 | Coffee Break + Poster Session |
| 11:30–12:30 | Invited Talks: Scope 2 — Reliability (×2) |
| 12:30–14:00 | Lunch + Poster Session |
| 14:00–15:00 | Invited Talks: Scope 3 — Privacy (×2) |
| 15:00–15:30 | Spotlight Papers ×4 |
| 15:30–16:00 | Coffee Break + Poster Session |
| 16:00–17:00 | Panel: *"Can we make AV-LLMs trustworthy before they scale further?"* |
| 17:00–17:15 | Closing Remarks + Best Paper Award |

---

## Speakers
{: #speakers}

*To be announced.*

---

## Organizers
{: #organizers}

We are currently recruiting 5–8 co-organizers. We are seeking representation across the safety/red-teaming, speech/audio, vision, and privacy sub-communities, and are committed to diversity across institutions, career stages, and geographic regions.

**Interested in co-organizing, joining the program committee, or speaking?**
Please reach out at [gs534@cam.ac.uk](mailto:gs534@cam.ac.uk).
