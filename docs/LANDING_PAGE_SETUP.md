# Landing Page Creation Guide

After running `make reset-db` and `make dev`, follow these steps to create the landing page manually in Strapi admin.

## Step 1: Access Strapi Admin

1. Go to: http://localhost:1337/cms/admin
2. Login with your admin credentials
3. Navigate to: **Content Manager** > **Landing Page** (under SINGLE TYPES)

## Step 2: Hero Section

### Basic Info
- **Title**: `Zero-Emission Solutions for a Circular Future`
- **Subtitle**: `Identifying and preparing breakthrough green technologies for the European market—bridging global innovation with European climate ambition.`
- **Background Style**: `gradient-blue`
- **Text Alignment**: `left`

### Tags (Add 2 tags)
1. **Tag 1**: 
   - Text: `Based in Norway`
   - Variant: `default`
2. **Tag 2**:
   - Text: `Certifying Quality`
   - Variant: `default`

### Primary CTA
- **Text**: `Explore our Technology`
- **URL**: `#technology`
- **Variant**: `primary`
- **Size**: `medium`
- **Open in New Tab**: `false` (unchecked)

### Feature Cards (Add 3 cards)
1. **Card 1**:
   - Title: `Global Innovation Sourcing`
   - Description: `Identifying breakthrough green technologies from emerging economies.`
   - Icon: `globe`

2. **Card 2**:
   - Title: `EU Regulatory Readiness`
   - Description: `Preparing solutions to meet European sustainability and safety standards.`
   - Icon: `shield`

3. **Card 3**:
   - Title: `Zero-Emission Focus`
   - Description: `Advancing non-incineration technologies for a circular future.`
   - Icon: `leaf`

## Step 3: Sections (Dynamic Zone)

Add 5 sections in this order:

### Section 1: Process Steps
- **Component**: `sections.process-steps`
- **Title**: `Rethinking Technology Transfer`
- **Description**: `For decades, technology transfer has followed a one-way path—from North to South. Norall Network is building a two-way model, identifying breakthrough green technologies from emerging economies and preparing them for integration into the European market. By combining local innovation with regulatory readiness, we unlock scalable climate solutions while advancing circular resilience across borders.`
- **Process Steps**: Select all 4 items (Identify, Refine, EU-Ready, Scale)

### Section 2: Problems
- **Component**: `sections.problems`
- **Title**: `Why Norway Needs a Clean Alternative`
- **Description**: `For decades, technology transfer has followed a one-way path—from North to South. Norall Network is building a two-way model, identifying breakthrough green technologies from emerging economies and preparing them for integration into the European market. By combining local innovation with regulatory readiness, we unlock scalable climate solutions while advancing circular resilience across borders.`
- **Image Position**: `right`
- **Problems**: Select all 3 items (Technology Dependence, Climate Impact, Transition)
- **Image**: (optional - upload if you have one)

### Section 3: Solution Grids
- **Component**: `sections.solution-grids`
- **Title**: `Our Solution`
- **Subtitle**: `A high-temperature plasma system that destroys hazardous waste at the ionic level—recovering clean energy while eliminating emissions and non-recyclable residues.`
- **Layout**: `grid-2`
- **Card Style**: `elevated`
- **Solution Features**: Select all 6 items (Ionic Decomposition, Volume Reduction, No Ash, Clean Energy, Zero-Emission, EU-Ready)

### Section 4: Galleries
- **Component**: `sections.galleries`
- **Title**: `Norall Gallery`
- **Subtitle**: `A visual overview of the technologies, systems, and contexts shaping our work across borders.`
- **Layout**: `grid-3`
- **Gallery Items**: Select all 3 items (Plasma Technology, Waste Challenge, Public Infrastructure)

### Section 5: Contact Forms
- **Component**: `sections.contact-forms`
- **Title**: `What can we help you with?`
- **Subtitle**: `We welcome inquiries from partners, public institutions, and organizations interested in clean waste solutions and cross-border collaboration.`
- **Submit Button Text**: `Get Started`
- **Success Message**: `Thank you for your message. We'll get back to you soon!`
- **Show Name Field**: ✅ (checked)
- **Show Email Field**: ✅ (checked)
- **Show Phone Field**: ✅ (checked)
- **Show Service Field**: ✅ (checked)
- **Show Message Field**: ✅ (checked)
- **Background Color**: `background`

## Step 4: SEO

- **Meta Title**: `Norall Network - Zero-Emission Solutions for a Circular Future`
- **Meta Description**: `Identifying and preparing breakthrough green technologies for the European market. Building a two-way technology transfer model for sustainable climate solutions.`
- **Keywords**: `zero emission, circular economy, technology transfer, plasma technology, waste management, Norway, clean technology`
- **OG Type**: `website`
- **No Index**: `false` (unchecked)

## Step 5: Publish

1. Click **Save** button (top right)
2. Click **Publish** button
3. Verify the landing page appears in the frontend: http://localhost:5173

## Verification

After publishing, check:
- [ ] Hero section displays with gradient background
- [ ] 4 process steps appear in colored bar
- [ ] Problem section shows 3 items with checkmarks
- [ ] Solution grid shows 6 feature cards
- [ ] Gallery shows 3 items
- [ ] Contact form is functional
- [ ] All text matches the design

## Tips

- Use the **Preview** button to see changes before publishing
- All seeded items should appear in dropdown menus
- If items are missing, run `make reset-db` and `make dev` again
- Save frequently to avoid losing work
- You can reorder sections by dragging them
