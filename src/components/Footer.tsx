export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-surface text-gray-500">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">
        <p className="text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Abhishek. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
