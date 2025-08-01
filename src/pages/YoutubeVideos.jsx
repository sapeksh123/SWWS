
import { Play, Eye, Calendar } from "lucide-react";

export default function YoutubeVideos() {
  const videos = [
    {
      id: 1,
      title: "Complete RO Installation Guide",
      thumbnail: "https://youtu.be/GUTyGiVsLm8?si=JYRDe1IJBVXBGXr-&t=60",
      duration: "12:45",
      views: "25,432",
      uploadDate: "2 weeks ago",
      description: "Step-by-step RO installation guide",
    },
    {
      id: 2,
      title: "RO vs UV vs UF - Comparison",
      thumbnail: "/placeholder.svg?height=300&width=500&text=RO+vs+UV+vs+UF",
      duration: "8:32",
      views: "18,765",
      uploadDate: "1 month ago",
      description: "Compare different water purification technologies",
    },
    {
      id: 3,
      title: "How to Change RO Filters",
      thumbnail: "/placeholder.svg?height=300&width=500&text=Filter+Change",
      duration: "6:18",
      views: "32,156",
      uploadDate: "3 weeks ago",
      description: "DIY guide to replace RO filters",
    },
    {
      id: 4,
      title: "Water Quality Testing Guide",
      thumbnail: "/placeholder.svg?height=300&width=500&text=Water+Testing",
      duration: "5:24",
      views: "14,892",
      uploadDate: "1 week ago",
      description: "Test water quality using TDS meter",
    },
  ];

  return (
      <div className="py-16 px-4 bg-cyan-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1  className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">YouTube Videos</h1>
          <p className="text-xl text-teal-600 max-w-3xl mx-auto leading-relaxed">
            Educational videos, installation guides, and maintenance tips
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  🔥 FEATURED VIDEO
                </div>
                <h2 className="text-3xl font-bold text-teal-800 mb-4">Complete RO Installation Guide</h2>
                <p className="text-lg text-teal-600 mb-6 leading-relaxed">
                  Our most popular video showing step-by-step RO installation process.
                </p>
                <div className="flex items-center space-x-6 mb-6 text-teal-600">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5" />
                    <span>25,432 views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>2 weeks ago</span>
                  </div>
                </div>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Now
                </button>
              </div>
              <div className="relative">
                <img
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center">
                  <div className="bg-teal-600 text-white p-4 rounded-full">
                    <Play className="h-8 w-8 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.slice(1).map((video) => (
            <div
              key={video.id}
              className="hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden group cursor-pointer rounded-xl"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-teal-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Play className="h-6 w-6 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-teal-800 mb-2">{video.title}</h3>
                <p className="text-teal-600 text-sm mb-3">{video.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{video.views}</span>
                  </div>
                  <span>{video.uploadDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 text-center text-teal-800">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Channel</h2>
          <p className="text-xl text-cyan-800 mb-8 max-w-2xl mx-auto">
            Stay updated with water purification tips and guides. Join 50,000+ subscribers!
          </p>
          <button className="bg-rose-500 text-white hover:bg-white hover:text-rose-500 hover:border-2 px-4 py-3 rounded-lg font-medium flex items-center mx-auto">
            <Play className="mr-2 h-5 w-5" />
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
