export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="responsive-container">
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Macamen Art Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
