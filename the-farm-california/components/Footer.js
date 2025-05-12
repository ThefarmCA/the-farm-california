export default function Footer() {
  return (
    <footer className="bg-[#3b2f2f] text-white text-center py-6">
      <p className="mb-2">Let's grow together.</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:underline">App Store</a>
        <a href="#" className="hover:underline">Google Play</a>
      </div>
      <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} The Farm California. All rights reserved.</p>
    </footer>
  );
}
