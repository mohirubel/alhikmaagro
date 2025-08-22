import { Badge, ExternalLink, Leaf, ShoppingCart, Star } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next';

export default function FeaturedProducts({featuredProducts, title="", subTitle="", badge="", organicLevel="", handlePurchase, BtnText=""}) {
  const { t } = useTranslation();
  
    return (
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600">{subTitle}</p>
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
                      { BtnText}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

{/* <FeaturedProducts 
      featuredProducts={featuredProducts}
      title={t("featured.title")} 
      subTitle={t("featured.subtitle")}
      badge={t("labels.featured")}
      organicLevel={t("labels.organic")}
      handlePurchase={handlePurchase}
      BtnText={t("buttons.purchase")}
      /> */}