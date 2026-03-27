# Project Conventions and Standards

## Project Overview

**ProspectFly** - A B2B consultancy website with CMS for AI automation services.

Two main components:
1. **CMS App** (`app.prospectfly.com`) - Admin interface for content management
2. **Public Site** (`prospectfly.com`) - Marketing website with SSR

### Tech Stack
- **CMS App**: React 19 + Vite + Tailwind CSS + shadcn/ui
- **Public Site**: React Router 7 with SSR + Tailwind CSS
- **Database**: Supabase (shared instance: `wloxeyxvoktswfdynwhy`)
- **Deployment**: Vercel (two separate projects)

---

## GIT WORKFLOW

**IMPORTANT:** Do NOT commit changes automatically.
- **ALWAYS** wait for explicit user command before committing to git
- Only run `git add`, `git commit`, or `git push` when the user explicitly asks
- After making code changes, inform the user and wait for their "commit" or "push" command

---

## File Naming Convention

**IMPORTANT:** All new files MUST use lowercase with hyphens (kebab-case).

Examples:
- `site-pages.jsx` (correct)
- `admin-users.jsx` (correct)
- `seo-templates.jsx` (correct)
- `SitePages.jsx` (WRONG - uses PascalCase)
- `sitePages.jsx` (WRONG - uses camelCase)

---

## File Structure

```
/src                            # CMS App (app.prospectfly.com)
  /pages                        # Page components
    login.jsx
    signup.jsx
    dashboard.jsx
    site-pages.jsx
  /components
    /ui                         # shadcn components
    AdminRoute.jsx              # Admin route guard
    ProtectedRoute.jsx          # Auth route guard
    Sidebar.jsx                 # CMS navigation
  /contexts
    AuthContext.jsx             # Auth state management
  /hooks
    useUserRole.js              # Admin role detection
  /lib
    utils.js                    # shadcn utilities
  App.jsx                       # Main router
  main.jsx                      # Entry point
  supabase-client.js
  index.css

/site                           # Public Site (prospectfly.com)
  /app
    /routes
      _index.tsx                # Homepage
      $.tsx                     # Dynamic CMS pages
    root.tsx                    # Layout with header/footer
    routes.ts                   # Route config
    app.css                     # Tailwind styles
  package.json
  vite.config.ts
  react-router.config.ts

/supabase
  /migrations                   # Database migrations (pf_ prefix)
```

---

## Application Routes

### CMS App (app.prospectfly.com)

| Route | Page | Description |
|-------|------|-------------|
| `/login` | Login | User authentication |
| `/signup` | Signup | User registration |
| `/dashboard` | Dashboard | Overview with stats |
| `/site-pages` | Site Pages | Manage marketing pages |
| `/blog` | Blog | Manage blog posts |
| `/seo-pages` | SEO Pages | Manage programmatic SEO pages |
| `/case-studies` | Case Studies | Manage case studies |
| `/categories` | Categories | Manage content categories |
| `/seo-templates` | SEO Templates | Manage page templates |
| `/admin/users` | Users | Admin: user management |
| `/admin/assets` | Assets | Admin: image/file management |

### Public Site (prospectfly.com)

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Main landing page |
| `/services` | Services | Services offered |
| `/case-studies` | Case Studies | Client work examples |
| `/blog` | Blog | Blog index |
| `/contact` | Contact | Contact form |
| `/*` | Dynamic | CMS-managed pages |

---

## Database Schema

### Tables (pf_ prefix)

All tables use `pf_` prefix to avoid conflicts with prospectracker-001 in shared Supabase.

```sql
-- User profiles with roles
CREATE TABLE pf_user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT NOT NULL,
  display_name TEXT,
  role TEXT DEFAULT 'standard',  -- 'admin' or 'standard'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Content categories
CREATE TABLE pf_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL,  -- 'industry', 'process', 'topic', 'general'
  parent_id UUID REFERENCES pf_categories(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Unified content table
CREATE TABLE pf_site_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  page_type TEXT NOT NULL,  -- 'page', 'blog', 'seo', 'case_study', 'pillar'
  template TEXT NOT NULL,
  status TEXT DEFAULT 'draft',  -- 'draft', 'published', 'archived'
  title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  body_sections JSONB DEFAULT '[]',
  category_id UUID REFERENCES pf_categories(id),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Uploaded assets
CREATE TABLE pf_site_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SEO page templates
CREATE TABLE pf_seo_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  template_body JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### RLS Functions

```sql
-- Check if user is admin (SECURITY DEFINER to avoid recursion)
CREATE FUNCTION pf_is_admin(user_id UUID) RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM pf_user_profiles
    WHERE id = user_id AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;
```

---

## UI/UX Standards

### Cursor Behavior
**IMPORTANT:** All interactive elements MUST show pointer cursor on hover.

- **Buttons**: Always add `cursor-pointer` class
- **Clickable divs**: Add `cursor-pointer` when onClick handler is present
- **Disabled elements**: Use `cursor-not-allowed`

### Browser Dialogs
**IMPORTANT:** NEVER use browser `alert()`, `confirm()`, or `prompt()` dialogs.
- Use custom modals or inline UI instead

### Error Messages
Show user-friendly errors, not raw database messages.

---

## Brand Colors

- **Primary**: Amber `#f59e0b` (Tailwind: `amber-500`)
- **Dark Background**: `#0a0a0a`
- **Text**: `#111111`
- **Font Display**: Space Grotesk
- **Font Body**: Inter

---

## Environment Configuration

### CMS App (.env in root)
```
VITE_SUPABASE_URL=https://wloxeyxvoktswfdynwhy.supabase.co
VITE_SUPABASE_KEY=your_anon_key
VITE_PUBLIC_SITE_URL=http://localhost:5174
```

### Public Site (site/.env)
```
SUPABASE_URL=https://wloxeyxvoktswfdynwhy.supabase.co
SUPABASE_ANON_KEY=your_anon_key
```

---

## Commands

### CMS App (port 5173)
```bash
cd /Volumes/DEV-2/z_dev/prospectfly-001
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run linter
```

### Public Site (port 5174)
```bash
cd /Volumes/DEV-2/z_dev/prospectfly-001/site
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production server
```

---

## Deployment (Vercel)

**CRITICAL:** Two separate Vercel projects from same repo.

| Project | Domain | Root Directory | Build Command |
|---------|--------|----------------|---------------|
| prospectfly-cms | app.prospectfly.com | `/` (root) | `npm run build` |
| prospectfly-site | prospectfly.com | `/site` | `npm run build` |

---

## Content Types

All managed via `pf_site_pages` table with `page_type` filter:

| Type | Description |
|------|-------------|
| `page` | Standard marketing pages (Services, About, Contact) |
| `blog` | Blog posts (AI automation, n8n topics) |
| `seo` | Programmatic SEO pages (by industry/process/location) |
| `case_study` | Client case studies |
| `pillar` | Pillar content pages |

---

## Status

### Implemented
- [x] CMS App scaffolding (React + Vite)
- [x] Public Site scaffolding (React Router 7 SSR)
- [x] Database migrations (6 files)
- [x] Homepage with exact design specs
- [x] Auth system (login, signup, protected routes)
- [x] Admin role system
- [x] Migrations run in Supabase

### Pending
- [ ] CMS CRUD pages (copy patterns from raresocial-007)
- [ ] Blog listing/editing pages
- [ ] SEO pages with template generation
- [ ] Case studies pages
- [ ] Categories management
- [ ] Asset upload/management
- [ ] Git integration
- [ ] Deploy to Vercel

---

## Reference Project

This project is based on the structure of **raresocial-007**. When building CMS pages, reference:
- `/Volumes/DEV-2/z_dev/raresocial-007/src/pages/site-pages*.jsx` - Page CRUD patterns
- `/Volumes/DEV-2/z_dev/raresocial-007/src/components/section-editor-modal.jsx` - Section editor
