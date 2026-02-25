import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Extracted Components
import HeroSection from "./CourseDetailComponents/HeroSection";
import RatingCard from "./CourseDetailComponents/RatingCard";
import WhatYouLearn from "./CourseDetailComponents/WhatYouLearn";
import CourseContent from "./CourseDetailComponents/CourseContent";
import Requirements from "./CourseDetailComponents/Requirements";
import Description from "./CourseDetailComponents/Description";
import Instructors from "./CourseDetailComponents/Instructors";
import Reviews from "./CourseDetailComponents/Reviews";
import ExploreTopics from "./CourseDetailComponents/ExploreTopics";
import CourseIncludes from "./CourseDetailComponents/CourseIncludes";
import StickyInfoCard from "./CourseDetailComponents/StickyInfoCard";

// Main Course Detail Component
export default function CourseDetail() {
  return (
    <div className="bg-slate-50/30 min-h-screen font-['Public_Sans']">
      <Header />

      <HeroSection />

      <div className="relative">
        <RatingCard />
      </div>

      <main className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Main Content Area */}
          <div className="flex-1 w-full lg:max-w-[calc(100%-440px)] space-y-4">
            <WhatYouLearn />
            <CourseContent />
            <Requirements />
            <Description />
            <Instructors />
            <Reviews />
            <ExploreTopics />
            <CourseIncludes />
          </div>

          {/* Sidebar Area */}
          <aside className="w-full lg:w-[400px] space-y-8 sticky top-32 transition-all duration-500">
            <div className="hidden lg:block">
              <StickyInfoCard />
            </div>

            {/* Mobile/Tablet Info Card (shown at top on smaller screens) */}
            <div className="lg:hidden order-first mb-12">
              <StickyInfoCard />
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

