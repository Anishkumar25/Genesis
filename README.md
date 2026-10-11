# Genesis
 
Genesis is a mobile-first web app that helps women find verified NGOs, lawyers, and financial educators, and learn about their legal and financial rights. It was started with a women's awareness community in mind, especially for women in rural areas who often don't know where to turn.
 
**Status: prototype.** Everything listed in the app is sample data. No real organizations, lawyers, or helplines have been verified by us yet, and nothing here is legal advice.
 
Live demo: https://genesis-topaz-nine.vercel.app/
 
## Why this exists
 
A woman who needs legal, financial, or emotional support usually has to search around, often on a shared phone, often in a crisis. Genesis tries to put trusted help in one calm place: a directory of vetted partners, plain-language explainers on rights, and practical guidance on becoming financially independent.
 
The hard part of a project like this isn't the code. It's trust and safety, so those come first in every design decision.
 
## What it does today
 
- **Find help.** Filter providers by need (legal, counselling, shelter, financial) and district. Contact happens directly through the provider's own phone number.
- **Know your rights.** Short guides on topics like property inheritance, Zero FIR, domestic protection, and workplace safety, with room for partner videos.
- **Financial independence.** Guidance on bank accounts, emergency savings, UPI safety, and free community workshops.
- **National helplines.** One-tap calling for 181 (Women Helpline), 112 (Emergency), 1930 (Cyber Crime), and the NCW helpline.
- **Anonymous ping.** A way to signal demand for help in a district without giving a name or number.
- **Partner portal.** Login for NGOs, lawyers, and admins. Providers stay hidden from the public until an admin approves them.
- **Privacy page.** A plain-language statement of what the app does and doesn't store.
## Safety principles
 
These apply to every change made to the project.
 
1. **Browsing needs no account.** Anyone can use the directory and the guides without signing up.
2. **Collect as little as possible.** The app never asks women for a name, phone number, address, or story. An anonymous ping stores only the need category, the district, and a timestamp.
3. **No in-app chat or case storage.** Until proper encryption, consent, and retention policies exist, the app doesn't hold sensitive case details.
4. **Quick Exit on every screen.** One tap sends the user to a neutral site and replaces the current page in history so the Back button doesn't return to Genesis. It does not erase browser history, and the app should never claim it does. Users who share a device should use a private or incognito window.
5. **Don't overpromise.** No claims of total anonymity. Hosting providers can see IP addresses in their logs, and we say so.
6. **Verify before listing.** Lawyers and NGOs are approved manually by an admin (bar council ID, NGO registration) before they appear publicly.
7. **Discreet by design.** The app looks like a general wellbeing and rights resource. Emails and notifications never mention abuse or assault.
## Tech stack
 
- Next.js (App Router) and Tailwind CSS
- Supabase for authentication and database, with Row Level Security
- Vercel for hosting
All of these have free tiers, which keeps the project affordable for a student-run effort.
 
## Getting started
 
You'll need Node.js 18 or newer and a free Supabase project.
 
```bash
git clone <your-repo-url>
cd genesis
npm install
cp .env.example .env.local
```
 
Fill in `.env.local` with your Supabase project values:
 
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
 
Then start the dev server:
 
```bash
npm run dev
```
 
Open http://localhost:3000. Never commit `.env.local`, and never put a service-role key in client code.
 
## Deploying
 
1. Push the repo to GitHub.
2. Import it into Vercel.
3. Add the same environment variables in the Vercel project settings.
4. Deploy.
## Project structure
 
The main routes are:
 
| Route | Purpose |
| --- | --- |
| `/` | Home, with the three pathways and national helplines |
| `/find-help` | Provider directory with filters and the anonymous ping |
| `/rights` | Rights guides and video links |
| `/finance` | Financial independence guidance and workshops |
| `/privacy` | What is and isn't stored |
| `/login` | Partner portal for NGOs, lawyers, and admins |
 
## Roles
 
| Role | Access |
| --- | --- |
| Visitor | Browse everything without an account |
| NGO / Lawyer | Create and edit a profile, see anonymous demand in their districts. Hidden from the public until approved |
| Admin | Approve, reject, or suspend providers |
 
## Contributing
 
Contributions are welcome, especially from people with legal, NGO, social work, or accessibility experience. Before opening a pull request, please read the safety principles above. Changes that collect more personal data, add tracking, or weaken the Quick Exit behavior won't be accepted.
 
If you find a privacy or security problem, please report it privately to the maintainer instead of opening a public issue.
 
 
## Contact
 
Built by Anish. Reach out at: palleanishkumar25@gmail.com
 
