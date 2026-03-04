import Link from "next/link";

export default function NotFound() {
  return (
    <div className="card p-10 text-center space-y-3">
      <div className="text-2xl font-semibold">404</div>
      <p className="text-text-muted">This page doesn’t exist.</p>
      <Link className="btn btn-primary" href="/">
        Go Home
      </Link>
    </div>
  );
}
