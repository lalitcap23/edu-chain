'use client'

import React from 'react'
import { ArrowRight, BookOpen, BadgeIcon as Certificate, Users } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

interface StatItemProps {
  value: string
  label: string
  icon: React.ReactNode
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-200 border border-white/20">
    <div className="text-[#00f2fe] mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-[#00f2fe] mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
)

const StatItem: React.FC<StatItemProps> = ({ value, label, icon }) => (
  <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
    <div className="flex items-center mb-4">
      <div className="text-[#00f2fe] mr-4">{icon}</div>
      <div className="text-4xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
        {value}
      </div>
    </div>
    <p className="text-gray-400">{label}</p>
  </div>
)

const LandingPage: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      title: "Learn & Earn",
      description: "Earn tokens for completing lessons and achieving milestones in your language journey.",
      icon: <BookOpen size={32} />
    },
    {
      title: "NFT Certificates",
      description: "Receive verifiable certificates as NFTs to showcase your language proficiency.",
      icon: <Certificate size={32} />
    },
    {
      title: "Community Learning",
      description: "Connect with language learners worldwide and practice together.",
      icon: <Users size={32} />
    }
  ]

  const stats: StatItemProps[] = [
    { value: "10K+", label: "Active Learners", icon: <Users size={24} /> },
    { value: "25+", label: "Languages", icon: <BookOpen size={24} /> },
    { value: "5K+", label: "NFT Certificates Issued", icon: <Certificate size={24} /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white/10 backdrop-blur-lg sticky top-0 z-10">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
          LinguaQuest
        </div>
        <button 
          className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] px-6 py-3 rounded-full font-bold hover:-translate-y-0.5 transition-transform duration-200 shadow-lg shadow-[#00f2fe]/20"
          onClick={() => console.log("Connect wallet clicked")}
        >
          Connect Wallet
        </button>
      </nav>

      {/* Hero Section */}
      <main className="text-center px-8 py-16 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent leading-tight">
          Learn Languages in the Web3 Era
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Master new languages while earning tokens and NFT certificates.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center mb-16">
          <button 
            className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] px-8 py-4 rounded-full font-bold hover:-translate-y-0.5 transition-transform duration-200 shadow-lg shadow-[#00f2fe]/20 flex items-center justify-center"
            onClick={() => console.log("Start learning clicked")}
          >
            Start Learning <ArrowRight className="ml-2" size={20} />
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
            What Our Learners Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="text-gray-300 mb-4">"LinguaQuest has revolutionized my language learning journey. The ability to earn while learning keeps me motivated!"</p>
              <p className="font-bold text-[#00f2fe]">- Sarah K., Spanish Learner</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="text-gray-300 mb-4">"The NFT certificates are a game-changer. They're not just proof of my skills, but also a cool digital asset!"</p>
              <p className="font-bold text-[#00f2fe]">- Alex M., English Learner</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center text-gray-400">
          <p>&copy; 2024 LinguaQuest. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default LandingPage

