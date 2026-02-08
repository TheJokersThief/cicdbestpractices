# Local Validation Visual Assets

This directory contains SVG diagrams for the local pipeline validation content page.

## Files

### feedback-loop-comparison.svg
**Purpose:** Show before/after comparison of CI feedback loops to demonstrate time savings

**Content:**
- Split comparison showing two developer workflows
- Before: Write → Push → Wait 8min → Fail → Fix → Push → Wait 8min (16+ minutes total)
- After: Write → Validate locally 30s → Fix → Validate 30s → Push → Pass (2 minutes total)

**Style:** Hand-drawn timeline with sketchy arrows, color-coded (red for failures, green for success)

**Usage:** Main content opening section, demonstrates value proposition

---

### act-setup-flow.svg
**Purpose:** Show the simple path from zero to first successful local run

**Content:**
- 3-step horizontal flow diagram
- Step 1: Install act (with platform icons)
- Step 2: Optional .actrc config
- Step 3: Run `act` command with success output
- Big checkmark at end: "Ready!"

**Style:** Hand-drawn boxes with sketchy connecting arrows, casual aesthetic

**Usage:** GitHub Actions quick start section

---

## Design Guidelines

- **Style:** Hand-drawn aesthetic (Excalidraw-like)
- **Lines:** Sketchy, organic, not perfectly straight
- **Colors:** Use sparingly for emphasis (red = problem, green = success)
- **Text:** Casual, readable sans-serif
- **Complexity:** Keep it simple - these should be scannable at a glance
