import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-semibold">Product not found</h2>
      <p className="mt-2 text-gray-500">
        The product you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="inline-block mt-6 text-blue-600 underline"
      >
        Back to products
      </Link>
    </div>
  );
}