---
name: Legacy dependency security blocks
description: Safely restore installation when a legacy lockfile contains transitive releases blocked by Replit's npm security policy.
---

When installation is blocked by security-policy-rejected transitive lock entries, inspect the package's latest release and every parent semver range; update only versions that satisfy those ranges rather than disabling security checks.

**Why:** Installing the imported Create React App project was blocked on several vulnerable transitive releases before the app could start.

**How to apply:** For future dependency-restoration failures in this project, identify the package actually rejected, verify parent constraints from the lockfile, and make a narrow compatible lockfile update before retrying installation.
