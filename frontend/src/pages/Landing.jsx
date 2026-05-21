import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Landing = () => {
  const { user } = useAuth();
  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="landing-blob landing-blob-1" />
      <div className="landing-blob landing-blob-2" />
      <div className="landing-blob landing-blob-3" />
      <div className="landing-grid-pattern" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-soft-xl" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Ethara</p>
            <p className="text-xs text-slate-400">Team workspace reimagined</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link to="/login" className="transition hover:text-white">Login</Link>
          <Link to="/signup" className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-400 hover:text-white">Sign up</Link>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col gap-16 px-6 py-8 sm:px-8">
        <section className="grid gap-12 lg:grid-cols-[1.3fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-sm">
              <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300" />
              Collaborative work with clarity
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl">
                Your team’s next productivity hub, redesigned for velocity.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Ethara blends planning, chat, calendar, and task intelligence into one polished workspace so teams can move faster with less noise.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-soft-lg transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-soft-xl"
              >
                Start free
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-8 py-3 text-base font-semibold text-slate-200 transition hover:border-cyan-400 hover:bg-slate-800"
              >
                Explore demo
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-6 shadow-soft-xl ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1 hover:bg-slate-900/95">
                <div className="text-3xl">💡</div>
                <h3 className="mt-4 text-lg font-semibold text-white">Insight-first workflow</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">Keep work visible and stay ahead with dashboards built for every team.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6 shadow-soft-xl ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1 hover:bg-slate-900/95">
                <div className="text-3xl">⚡</div>
                <h3 className="mt-4 text-lg font-semibold text-white">Fast setup</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">Launch projects in minutes with ready-to-use boards, members, and notifications.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-soft-xl backdrop-blur-xl ring-1 ring-white/10 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Live preview</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">A polished workspace snapshot</h2>
              </div>
              <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">Built for teams</span>
            </div>
            <div className="grid gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-4">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-5 shadow-soft-xl">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-100">Sprint board</span>
                  <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-semibold text-green-200">Live</span>
                </div>
                <p className="mt-3 text-sm text-slate-400">Track releases, blockers, and team progress in one glance.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-5 shadow-soft-xl">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-100">Meeting notes</span>
                  <span className="rounded-full bg-violet-500/15 px-2.5 py-1 text-xs font-semibold text-violet-200">Smart</span>
                </div>
                <p className="mt-3 text-sm text-slate-400">Capture decisions, share updates, and sync action items automatically.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-soft-xl backdrop-blur-xl sm:p-10 lg:grid-cols-3">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Why Ethara</p>
            <h2 className="text-3xl font-semibold text-white">A fresh view of team productivity.</h2>
            <p className="text-sm leading-7 text-slate-400">Designed to feel modern, not bloated. Every module is built to help teams move faster while staying in sync.</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-soft-xl">
            <h3 className="text-lg font-semibold text-white">Unified collaboration</h3>
            <p className="text-sm text-slate-400">Tasks, chat, files, and calendar are linked so conversations turn into action.</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-soft-xl">
            <h3 className="text-lg font-semibold text-white">Clear focus</h3>
            <p className="text-sm text-slate-400">Prioritize what matters with smart filters, labels, and status views that cut through noise.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
