# Debugging Pipelines Assets

This directory contains visual assets for the debugging pipelines documentation.

## Current Assets (SVG)

### Diagrams
1. ✅ **debugging-mindset.svg** - Flowchart showing: Observe → Hypothesize → Test → Verify (with iteration loop)
2. ✅ **quick-wins-checklist.svg** - Visual checklist of 7 quick checks with checkboxes and time estimates

### Annotated Error Messages
3. ✅ **error-npm-404.svg** - npm 404 with callouts for: error code, package name, registry URL
4. ✅ **error-timeout.svg** - Test timeout with: which test, timeout value, stack trace
5. ✅ **error-environment.svg** - Missing env var with: variable name, where it's used
6. ✅ **error-permission.svg** - 403 response with: endpoint, auth header, response body
7. ✅ **error-oom.svg** - OOM killed with: memory limit, actual usage, process

## Asset Details

- **Format:** SVG (vector graphics, scales to any size)
- **Style:** Terminal/code editor aesthetics with professional annotations
- **Accessibility:** Includes title and description elements for screen readers
- **Colors:** Yellow/orange highlights (#fbbf24, #f59e0b) for annotations
- **File sizes:** Optimized (~5-15KB each)

## Future Additions

Provider-specific screenshots can be added later if needed (GitHub Actions debug logs, CircleCI SSH rerun, Jenkins console, Travis debug mode). The content works well without them.
