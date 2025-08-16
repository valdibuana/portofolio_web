"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Instagram, Youtube, Music } from 'lucide-react'
import { FaInstagram } from "react-icons/fa";
import Image from "next/image"
import { motion } from "framer-motion"

export default function ArtPortfolio() {
  const artworks = [
    { id: 1, title: "Ethereal Dreams", medium: "Digital Art", year: "2024", image: "/victory.png" },
    { id: 2, title: "Ancient Wisdom", medium: "Oil on Canvas", year: "2023", image: "/ancient wisdom.png" },
    { id: 3, title: "Angel Of Revolution", medium: "Only Mechanical Pencil", year: "2025", image: "/4.2.png" },
    { id: 4, title: "Golden Ratio", medium: "Sculpture", year: "2023", image: "/2.jpg" },
    { id: 5, title: "Digital Renaissance", medium: "Digital Art", year: "2024", image: "/4.jpg" },
    { id: 6, title: "Marble Dreams", medium: "Photography", year: "2023", image: "/3.jpg" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative py-20 px-4 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-200 to-blue-200 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <Image src="/avatar.jpg" alt="Profile" width={170} height={170} className="rounded-full object-cover" />
              </div>
            </div>
          </motion.div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-blue-800 to-amber-600 bg-clip-text text-transparent animate-gradient-x mb-4">
            VALDI D. BUANA
          </h1>
          <div className="space-y-2 mb-8">
            <p className="text-xl text-slate-600 font-medium">VladaXoX</p>
            <p className="text-lg text-slate-500">Visual Artist & Digital Creator</p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button variant="outline" size="lg" className="border-amber-200 hover:bg-amber-50 hover:border-amber-300">
              <a href="https://www.instagram.com/vil_ians?igsh=cWd0eXgyZmd6Z2Jm" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <FaInstagram className="w-5 h-5 mr-2" /> Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50 hover:border-blue-300">
              <Music className="w-5 h-5 mr-2" /> TikTok
            </Button>
            <Button variant="outline" size="lg" className="border-red-200 hover:bg-red-50 hover:border-red-300">
              <Youtube className="w-5 h-5 mr-2" /> YouTube
            </Button>
            <Button variant="outline" size="lg" className="border-slate-200 hover:bg-slate-50 hover:border-slate-300">
              <Github className="w-5 h-5 mr-2" /> GitHub
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-16 px-4 bg-white/50 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
            About My Art
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Menggabungkan estetika modern dengan keindahan klasik Yunani kuno, karya seni saya mengeksplorasi 
            harmoni antara tradisi dan inovasi.
          </p>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
            Gallery
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {artworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  <div className="p-6 bg-gradient-to-br from-amber-50 to-blue-50">
                    <div className="relative">
                      <div className="relative bg-white p-3 rounded-lg shadow-inner">
                        <Image
                          src={artwork.image || "/placeholder.svg"}
                          alt={artwork.title}
                          width={300}
                          height={400}
                          className="w-full h-64 object-cover rounded transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-gradient-to-br from-white to-slate-50">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{artwork.title}</h3>
                    <p className="text-slate-600 mb-1">{artwork.medium}</p>
                    <p className="text-slate-500 text-sm">{artwork.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-16 px-4 bg-gradient-to-r from-amber-100 via-white to-blue-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Tertarik untuk berkolaborasi? Mari terhubung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
              <Instagram className="w-5 h-5 mr-2" /> Follow on Instagram
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white">
              <Github className="w-5 h-5 mr-2" /> View on GitHub
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
