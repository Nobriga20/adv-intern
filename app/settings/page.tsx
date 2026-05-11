"use client";

import { useAppSelector, useAppDispatch } from "../../lib/store";
import { openModal } from "../../store/authSlice";

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  const { user, loggedIn } = useAppSelector((s) => s.auth);
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>
      {loggedIn && user ? (
        <div className="space-y-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="space-y-3">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">Account</div>
            <div className="text-lg font-medium">{user.email}</div>
          </div>

          <div className="space-y-3">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">Subscription</div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 dark:bg-zinc-900 dark:text-white">
                {user.subscribed ? user.plan : "basic"}
              </div>
              {!user.subscribed && (
                <a
                  href="https://summarist.vercel.app/choose-plan"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
                >
                  Upgrade plan
                </a>
              )}
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {user.subscribed
                ? user.plan === "premium-plus"
                  ? "You are on the premium-plus subscription."
                  : "You are on the premium subscription."
                : "You are currently on the basic plan. Upgrade to unlock premium features."}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="h-60 w-full overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900">
            <img
              src="/images/landing.png"
              alt="Login to view settings"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <div className="text-xl font-semibold">Login to access Settings</div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Sign in to view your email, subscription status, and manage your account.
            </p>
          </div>
          <button
            className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            onClick={() => dispatch(openModal())}
          >
            Login to view settings
          </button>
        </div>
      )}
    </div>
  );
}