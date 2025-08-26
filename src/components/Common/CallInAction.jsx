
export default function CallInAction({title, subTitle}) {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
            {subTitle}
          </p>
        </div>
      </section>
  )
}
