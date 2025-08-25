import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Helmet } from 'react-helmet-async'
import {
  Search,
  Filter,
  ExternalLink,
  Star,
  Leaf,
  ShoppingCart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CallInAction from "@/components/Common/CallInAction";

const Products = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const categories = [
    t("product-categories.all"),
    t("product-categories.fish"),
    t("product-categories.cattle"),
    t("product-categories.seeds"),
    t("product-categories.fruits"),
    t("product-categories.vegetables"),
    t("product-categories.fertilizers"),
    t("product-categories.organicProducts"),
  ];

  const products = [
    {
      id: 3,
      name: t("products.tomatoes.name"),
      categoryKey: "vegetables",
      category: t("product-categories.vegetables"),
      description: t("products.tomatoes.desc"),
      image: "https://cdn.mos.cms.futurecdn.net/6ct8VbpM7PtB2JdiqCMicQ.jpg",
      price: "$8/kg",
      rating: 4.7,
      organic: false,
      featured: true,
      inStock: true,
      origin: "Mexico",
      purchaseUrl: "/details",
    },
    {
      id: 4,
      name: t("products.cornSeeds.name"),
      categoryKey: "seeds",
      category: t("product-categories.seeds"),
      description: t("products.cornSeeds.desc"),
      image:
        "https://static.vecteezy.com/system/resources/previews/025/525/613/non_2x/peeled-corn-cob-yellow-seeds-top-view-ai-generated-image-photo.jpg",
      price: "$120/bag",
      rating: 4.6,
      organic: false,
      featured: false,
      inStock: true,
      origin: "USA",
      purchaseUrl: "/details",
    },
    {
      id: 6,
      name: t("products.bioFertilizer.name"),
      categoryKey: "fertilizers",
      category: t("product-categories.fertilizers"),
      description: t("products.bioFertilizer.desc"),
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
      price: "$35/bag",
      rating: 4.5,
      organic: true,
      featured: false,
      inStock: true,
      origin: "Germany",
      purchaseUrl: "/details",
    },
    {
      id: 8,
      name: t("products.carrots.name"),
      categoryKey: "vegetables",
      category: t("product-categories.vegetables"),
      description: t("products.carrots.desc"),
      image:
        "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=200&fit=crop",
      price: "$6/kg",
      rating: 4.6,
      organic: true,
      featured: false,
      inStock: true,
      origin: "Canada",
      purchaseUrl: "/details",
    },
    {
      id: 9,
      name: t("products.sunflowerSeeds.name"),
      categoryKey: "seeds",
      category: t("product-categories.seeds"),
      description: t("products.sunflowerSeeds.desc"),
      image:
        "https://images.squarespace-cdn.com/content/v1/5af5f71c0dbda32cd6252624/1551807984833-EIDG489P0GJ09HMDXFLB/AdobeStock_159061908-sunflower.jpeg",
      price: "$85/bag",
      rating: 4.7,
      organic: false,
      featured: false,
      inStock: false,
      origin: "Ukraine",
      purchaseUrl: "/details",
    },
    {
      id: 10,
      name: t("products.bananas.name"),
      categoryKey: "fruits",
      category: t("product-categories.fruits"),
      description: t("products.bananas.desc"),
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop",
      price: "$4/kg",
      rating: 4.8,
      organic: true,
      featured: true,
      inStock: true,
      origin: "Ecuador",
      purchaseUrl: "/details",
    },
    {
      id: 12,
      name: t("products.bellPeppers.name"),
      categoryKey: "vegetables",
      category: t("product-categories.vegetables"),
      description: t("products.bellPeppers.desc"),
      image:
        "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=200&fit=crop",
      price: "$10/kg",
      rating: 4.5,
      organic: false,
      featured: false,
      inStock: true,
      origin: "Netherlands",
      purchaseUrl: "/details",
    },
    {
      id: 13,
      name: t("products.rohita.name"),
      categoryKey: "fish",
      category: t("product-categories.fish"),
      description: t("products.rohita.desc"),
      image:
        "https://www.wegotmeat.com/cdn/shop/products/ROHU-1.jpg?v=1618600294&width=1500",
      price: "$28/kg",
      rating: 4.9,
      organic: false,
      featured: true,
      inStock: true,
      origin: "Norway",
      purchaseUrl: "/details",
    },
    {
      id: 14,
      name: t("products.tilapia.name"),
      categoryKey: "fish",
      category: t("product-categories.fish"),
      description: t("products.tilapia.desc"),
      image:
        "https://worldfishcenter.org/sites/default/files/styles/larger_header/public/images/bg/news/1111.jpg?itok=WGej83CH",
      price: "$18/kg",
      rating: 4.6,
      organic: true,
      featured: false,
      inStock: true,
      origin: "Vietnam",
      purchaseUrl: "/details",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === t("product-categories.all") ||
      product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      case "price":
        return (
          parseFloat(a.price.replace(/[^0-9.]/g, "")) -
          parseFloat(b.price.replace(/[^0-9.]/g, ""))
        );
      default:
        return 0;
    }
  });
  
  const featuredProducts = products.filter((product) => product.featured);

  const handlePurchase = (url) => {
    navigate("/details");
  };
  
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('seo.products.title')}</title>
        <meta name="description" content={t('seo.products.description')} />
        <meta httpEquiv="Content-Language" content={i18n.language} />
      </Helmet>
      
      <CallInAction title={t("product-hero.title")} subTitle={t("product-hero.subtitle")}/>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("featured.title")}
            </h2>
            <p className="text-xl text-gray-600">{t("featured.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-green-200"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-green-600 text-white">
                      {t("labels.featured")}
                    </Badge>
                    {product.organic && (
                      <Badge className="bg-emerald-100 text-emerald-800">
                        <Leaf className="h-3 w-3 mr-1" />
                        {t("labels.organic")}
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    {/* <span className="text-lg font-bold text-green-600">
                      {product.price}
                    </span> */}
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      onClick={() => handlePurchase(product.purchaseUrl)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {t("buttons.purchase")}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder={t("placeholders.search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-green-600 hover:bg-green-700"
                      : ""
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="name">{t("sort.name")}</option>
                <option value="rating">{t("sort.rating")}</option>
                <option value="price">{t("sort.price")}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === t("product-categories.all")
                ? t("grid.allProducts")
                : selectedCategory}
            </h2>
            <div className="text-gray-600">
              {sortedProducts.length}{" "}
              {t("grid.productsFound", { count: sortedProducts.length })}
            </div>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("grid.noProducts")}
              </h3>
              <p className="text-gray-600">{t("grid.tryAdjusting")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      {product.organic && (
                        <Badge className="bg-emerald-100 text-emerald-800 text-xs">
                          <Leaf className="h-3 w-3 mr-1" />
                          {t("labels.organic")}
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-white rounded-full p-1 shadow-lg">
                        <div className="flex items-center text-xs">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-xs"
                        onClick={() => handlePurchase(product.purchaseUrl)}
                      >
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        {t("buttons.viewMore")}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {sortedProducts.length > 0 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-green-600 hover:text-white"
              >
                {t("buttons.loadMore")}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
