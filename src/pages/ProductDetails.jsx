import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProductDetails() {
  const { t } = useTranslation();
  const { id } = useParams();

  // Fetch all products from translations (like you did in FeaturedProducts)
  const products = t("featuredProducts", { returnObjects: true });

  // Find product by id (string → number)
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t("home.products.notFound", "Product not found")}
        </h2>
        <Link to="/">
          <Button className="bg-green-600 hover:bg-green-700">
            <ArrowLeft className="mr-2 h-5 w-5" />
            {t("home.products.backToProducts", "Back to Home")}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
            {product.category}
          </span>

          <p className="text-lg text-gray-700 mb-6">{product.description}</p>

          <div className="flex gap-4">
          <Link to="/details">
             <Button className="bg-green-600 hover:bg-green-700">
              Buy Now
            </Button>
          </Link>
            
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-5 w-5" />
                {t("home.products.backToProducts", "Back to Home")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
